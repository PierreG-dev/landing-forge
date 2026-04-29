# LandingForge

Générateur automatique de landing pages pour PME. Entrez le nom d'une entreprise, son secteur et sa ville — LandingForge produit une page complète et publiquement accessible en quelques secondes.

**Stack :** Next.js 16 · React 19 · TailwindCSS 4 · Prisma 7 · SQLite

---

## Installation

```bash
npm install
npm run dev
```

L'application tourne sur [http://localhost:3000](http://localhost:3000).

### Variables d'environnement

Créez un fichier `.env` à la racine :

```env
DATABASE_URL="file:./dev.db"
NEXT_PUBLIC_APP_PASSWORD="landingforge"
ADMIN_TOKEN="changeme"
```

| Variable | Description |
|---|---|
| `DATABASE_URL` | Chemin vers la base SQLite |
| `NEXT_PUBLIC_APP_PASSWORD` | Mot de passe d'accès au dashboard |
| `ADMIN_TOKEN` | Token Bearer pour accès API sans login |

### Scripts npm

| Commande | Description |
|---|---|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production (inclut `prisma generate`) |
| `npm start` | Serveur de production |

---

## Utilisation

### Interface web

| Route | Accès | Description |
|---|---|---|
| `/login` | Public | Connexion par mot de passe |
| `/` | Authentifié | Dashboard — liste des landing pages |
| `/new` | Authentifié | Formulaire de création |
| `/preview/[slug]` | Public | Aperçu de la landing page |
| `/landing/[slug]` | Authentifié | Statistiques & analytics |

### Secteurs supportés

`restauration` · `artisan-batiment` · `beaute` · `sante` · `juridique` · `immobilier` · `sport-coaching` · `commerce-local` · `informatique` · `evenementiel`

---

## API HTTP

### Authentification

Les routes d'écriture acceptent deux méthodes d'authentification :

- **Cookie** (interface web) : `landingforge_auth=true`, obtenu via `/login`
- **Bearer token** (accès programmatique) : header `Authorization: Bearer <ADMIN_TOKEN>`

```bash
curl -X POST http://localhost:3000/api/generate \
  -H "Authorization: Bearer changeme" \
  -H "Content-Type: application/json" \
  -d '{"company":"Acme","sector":"plomberie","city":"Paris"}'
```

### POST `/api/generate`

Crée une nouvelle landing page.

**Auth requise :** oui

**Corps (JSON) :**

```json
{
  "company": "Boulangerie Martin",
  "sector": "restauration",
  "city": "Lyon",
  "phone": "04 72 00 00 00",
  "email": "contact@martin.fr",
  "tagline": "Le pain d'antan, la passion d'aujourd'hui",
  "service1": "Pains artisanaux",
  "service2": "Viennoiseries",
  "service3": "Commandes spéciales",
  "logoUrl": "https://example.com/logo.png",
  "colorComboId": "amber-green",
  "fontComboId": "elegant",
  "themeId": "modern",
  "primaryHex": "#F59E0B",
  "secondaryHex": "#10B981"
}
```

Seuls `company`, `sector` et `city` sont obligatoires. Les options de design sont générées aléatoirement si omises.

**Réponse :**

```json
{ "slug": "boulangerie-martin-lyon" }
```

La landing page est accessible sur `/preview/boulangerie-martin-lyon`.

---

### DELETE `/api/landing/[slug]`

Supprime une landing page.

**Auth requise :** oui

```http
DELETE /api/landing/boulangerie-martin-lyon
```

**Réponse :**

```json
{ "ok": true }
```

---

### POST `/api/regenerate/[slug]`

Régénère une landing page existante avec de nouveaux blocs (les données d'entreprise sont conservées).

**Auth requise :** oui

```http
POST /api/regenerate/boulangerie-martin-lyon
```

**Réponse :**

```json
{ "slug": "boulangerie-martin-lyon" }
```

---

### GET `/api/render`

Rend une landing page en HTML complet, sans persistance. Utile pour prévisualisation, scraping ou outils headless.

**Auth requise :** non (optionnel pour la sauvegarde)

**Paramètres de requête :**

| Paramètre | Obligatoire | Description |
|---|---|---|
| `company` | oui | Nom de l'entreprise |
| `sector` | oui | Identifiant de secteur |
| `city` | oui | Ville |
| `phone` | non | Téléphone |
| `email` | non | Email |
| `tagline` | non | Accroche |
| `service1`, `service2`, `service3` | non | Services proposés |
| `logoUrl` | non | URL du logo |
| `theme` | non | ID de thème |
| `colors` | non | ID de combinaison de couleurs |
| `fonts` | non | ID de combinaison de polices |
| `primaryHex` | non | Couleur primaire custom (hex) |
| `secondaryHex` | non | Couleur secondaire custom (hex) |
| `save` | non | `true` pour persister en base |

**Exemple :**

```http
GET /api/render?company=Plombier+Dupont&sector=artisan-batiment&city=Paris&save=true
```

**Réponse :** document HTML complet.

Si `save=true`, le header `X-Landing-Slug` contient le slug créé :

```
X-Landing-Slug: plombier-dupont-paris
```

---

## Codes d'erreur

| Code | Cause |
|---|---|
| `400` | Paramètres obligatoires manquants |
| `401` | Non authentifié |
| `404` | Slug introuvable |

---

## Base de données

Le schéma Prisma se trouve dans [prisma/schema.prisma](prisma/schema.prisma). Les migrations sont appliquées automatiquement au build.

Pour réinitialiser la base en développement :

```bash
rm dev.db
npm run build
```

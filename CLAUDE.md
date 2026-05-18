@AGENTS.md

# landing-forge

AI landing page generator for French SMBs. Input: company name + sector + city → output: full HTML landing page.

## Stack
Next.js 16 · React 19 · TS5 · TailwindCSS 4 · DaisyUI 5 · Prisma 7 + SQLite · Node ≥22

## Env vars
```
DATABASE_URL=file:./dev.db
NEXT_PUBLIC_APP_PASSWORD=landingforge
ADMIN_TOKEN=changeme
UNSPLASH_ACCESS_KEY=<key>
```

## DB
`npx prisma migrate dev` — Landing + Visit tables. Landing has slug (unique), blocks (JSON), themeId, colorComboId, fontComboId, views counter.

## Generation pipeline
`generateLanding(prospect, options?)` in `lib/engine/assembler.ts` — pure fn, deterministic via mulberry32 seed.
1. seed → RNG
2. theme: mood-tag match to sector or manual themeId
3. colors: weighted by theme mood or manual colorComboId
4. fonts: weighted by theme+color mood or manual fontComboId
5. blocks: sector blockConfig (mandatory + preferred×3 + excluded, optionalCount[min,max])
6. each block: {type, variant 1-5, corpusIndex}

Save separately via `lib/db/saveLanding.ts`.

## Sectors (13)
`content/sectors/<id>.ts` — each exports `{id, label, icons[], corpus{taglines,descriptions,services,stats,testimonials,faqs,trustItems}, blockConfig{mandatory,preferred,excluded,optionalCount}}`

Corpus text uses `{{company}}` `{{city}}` `{{phone}}` `{{email}}` templates.

Sectors: restauration · artisan-batiment · beaute · sante · juridique · immobilier · sport-coaching · commerce-local · informatique · evenementiel · electricien · plombier · garage

## Block types (10)
`components/blocks/` — Hero(5) Trust(3) Services(5) Stats(4) About(4) Gallery(4) Testimonials(4) FAQ(3) CTA(3) Footer(2)

Each block props: `{variant, corpusIndex, prospect, sector, theme, colors, fonts}`

## Config
- `config/types.ts` — Theme, ColorCombo, FontCombo, MoodTag, SectorId types
- `config/themes.config.ts` — 26+ themes (separators, decoratives, shadows, card styling)
- `config/colors.config.ts` — 25+ color combos w/ mood tags + WCAG AA
- `config/fonts.config.ts` — Google Fonts pairings (display+body)
- `config/unsplash-keywords.config.ts` — sector→keywords for image fetch

## Routes
Public: `/login` · `/preview/[slug]` (tracks views)
Auth (cookie `landingforge_auth=true`): `/` dashboard · `/new` builder · `/landing/[slug]` analytics

API (cookie OR `Authorization: Bearer <ADMIN_TOKEN>`):
- `POST /api/generate` — generate+save
- `POST /api/regenerate/[slug]` — regen blocks, keep company data
- `DELETE /api/landing/[slug]`
- `GET /api/render` — render HTML, no DB (query params)
- `POST /api/db/export` · `POST /api/db/import`

## Key patterns
- Assembler is pure fn — DB save is separate step
- Same seed → identical output (deterministic preview)
- Mood tags link sectors↔themes↔colors↔fonts semantically
- `LandingRenderer.tsx` injects CSS vars + Google Fonts link, maps blocks to components
- CSS vars injected by `lib/engine/cssInjector.ts`

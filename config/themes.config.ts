import type { Theme } from "./types";

export const themes: Theme[] = [
  {
    id: "editorial-bold",
    name: "Editorial Bold",
    description:
      "Mise en page éditoriale façon magazine de luxe — textes massifs, chevauchements dramatiques, tension visuelle maximale.",
    targetSectors: ["agence créative", "studio photo", "mode", "architecture"],

    mood: ["audacieux", "éditorial", "luxe", "dramatique", "graphique"],

    separators: {
      style: "diagonal",
      intensity: "strong",
    },

    decoratives: {
      type: "large-letters",
      placement: "absolute",
      opacity: 0.06,
      scale: "oversized",
    },

    overlaps: {
      enabled: true,
      intensity: "strong",
    },

    shadows: {
      style: "sharp",
      tailwindClass: "shadow-[4px_4px_0px_0px_rgba(0,0,0,0.85)]",
    },

    cards: {
      borderRadius: "rounded-none",
      border: "border-2 border-current",
      padding: "p-8",
      hasBackdropBlur: false,
    },

    spacing: {
      sectionPaddingY: "py-32",
      density: "airy",
    },

    typography: {
      headingWeight: "font-black",
      headingTracking: "tracking-tighter",
      bodyLineHeight: "leading-relaxed",
    },

    tailwindExtras: [
      "mix-blend-multiply",
      "uppercase",
      "rotate-[-2deg]",
      "skew-x-[-1deg]",
    ],
  },

  {
    id: "bento-tech",
    name: "Bento Tech",
    description:
      "Grille bento asymétrique inspirée des interfaces produit Apple et Linear — cartes glassmorphiques, micro-détails, densité premium.",
    targetSectors: ["SaaS", "startup tech", "application mobile", "logiciel"],

    mood: ["tech", "précis", "moderne", "minéral", "structuré"],

    separators: {
      style: "straight",
      intensity: "subtle",
    },

    decoratives: {
      type: "dots-grid",
      placement: "absolute",
      opacity: 0.07,
      scale: "large",
    },

    overlaps: {
      enabled: true,
      intensity: "medium",
    },

    shadows: {
      style: "soft",
      tailwindClass: "shadow-[0_8px_32px_rgba(0,0,0,0.12)]",
    },

    cards: {
      borderRadius: "rounded-2xl",
      border: "border border-white/10",
      padding: "p-6",
      hasBackdropBlur: true,
    },

    spacing: {
      sectionPaddingY: "py-28",
      density: "normal",
    },

    typography: {
      headingWeight: "font-bold",
      headingTracking: "tracking-tight",
      bodyLineHeight: "leading-loose",
    },

    tailwindExtras: ["backdrop-blur-xl", "bg-white/5", "ring-1 ring-white/10"],
  },

  {
    id: "organic-flow",
    name: "Organic Flow",
    description:
      "Séparateurs vague ondulants, blobs décoratifs, douceur et mouvement perpétuel — design vivant comme une respiration.",
    targetSectors: ["bien-être", "yoga", "cosmétique naturelle", "nutrition"],

    mood: ["doux", "naturel", "fluide", "organique", "apaisant"],

    separators: {
      style: "wave-svg",
      intensity: "strong",
    },

    decoratives: {
      type: "blobs",
      placement: "absolute",
      opacity: 0.08,
      scale: "oversized",
    },

    overlaps: {
      enabled: true,
      intensity: "medium",
    },

    shadows: {
      style: "warm",
      tailwindClass: "shadow-[0_12px_40px_rgba(0,0,0,0.08)]",
    },

    cards: {
      borderRadius: "rounded-[2rem]",
      border: "border-0",
      padding: "p-8",
      hasBackdropBlur: false,
    },

    spacing: {
      sectionPaddingY: "py-36",
      density: "airy",
    },

    typography: {
      headingWeight: "font-semibold",
      headingTracking: "tracking-normal",
      bodyLineHeight: "leading-loose",
    },

    tailwindExtras: ["rounded-full", "blur-3xl", "scale-110"],
  },

  {
    id: "craft-artisan",
    name: "Craft Artisan",
    description:
      "Texture stamp, lignes obliques subtiles, imperfection maîtrisée — authenticité artisanale traduite en pixels premium.",
    targetSectors: [
      "artisan",
      "boulangerie",
      "brasserie",
      "restaurant",
      "épicerie fine",
    ],

    mood: ["authentique", "chaleureux", "artisanal", "texturé", "ancré"],

    separators: {
      style: "zigzag",
      intensity: "medium",
    },

    decoratives: {
      type: "stamps",
      placement: "absolute",
      opacity: 0.09,
      scale: "medium",
    },

    overlaps: {
      enabled: true,
      intensity: "subtle",
    },

    shadows: {
      style: "deep",
      tailwindClass: "shadow-[2px_3px_0px_rgba(0,0,0,0.2)]",
    },

    cards: {
      borderRadius: "rounded-sm",
      border: "border border-current/20",
      padding: "p-7",
      hasBackdropBlur: false,
    },

    spacing: {
      sectionPaddingY: "py-24",
      density: "normal",
    },

    typography: {
      headingWeight: "font-extrabold",
      headingTracking: "tracking-wide",
      bodyLineHeight: "leading-relaxed",
    },

    tailwindExtras: ["rotate-[0.5deg]", "border-dashed", "opacity-90"],
  },

  {
    id: "luxury-minimal",
    name: "Luxury Minimal",
    description:
      "Espace négatif roi, proportions dorées, lignes fines — luxe absolu dans l'épure, chaque pixel compte.",
    targetSectors: [
      "immobilier prestige",
      "joaillerie",
      "hôtellerie luxe",
      "cabinet conseil",
    ],

    mood: ["épuré", "luxe", "intemporel", "raffiné", "souverain"],

    separators: {
      style: "straight",
      intensity: "subtle",
    },

    decoratives: {
      type: "thin-lines",
      placement: "absolute",
      opacity: 0.05,
      scale: "large",
    },

    overlaps: {
      enabled: false,
      intensity: "subtle",
    },

    shadows: {
      style: "none",
      tailwindClass: "shadow-none",
    },

    cards: {
      borderRadius: "rounded-none",
      border: "border-t border-current/15",
      padding: "p-10",
      hasBackdropBlur: false,
    },

    spacing: {
      sectionPaddingY: "py-40",
      density: "massive",
    },

    typography: {
      headingWeight: "font-thin",
      headingTracking: "tracking-[0.3em]",
      bodyLineHeight: "leading-loose",
    },

    tailwindExtras: ["uppercase", "text-xs", "border-b border-current/10"],
  },

  {
    id: "geometric-konstrukt",
    name: "Geometric Konstrukt",
    description:
      "Inspiration Bauhaus et constructivisme russe — formes géométriques qui se chevauchent, diagonales affirmées, composition mathématique.",
    targetSectors: [
      "architecture",
      "design industriel",
      "imprimerie",
      "urbanisme",
    ],

    mood: [
      "géométrique",
      "constructiviste",
      "rigoureux",
      "bold",
      "architectural",
    ],

    separators: {
      style: "diagonal",
      intensity: "strong",
    },

    decoratives: {
      type: "geometric-shapes",
      placement: "absolute",
      opacity: 0.1,
      scale: "oversized",
    },

    overlaps: {
      enabled: true,
      intensity: "strong",
    },

    shadows: {
      style: "flat",
      tailwindClass: "shadow-[6px_6px_0px_rgba(0,0,0,1)]",
    },

    cards: {
      borderRadius: "rounded-none",
      border: "border-4 border-current",
      padding: "p-6",
      hasBackdropBlur: false,
    },

    spacing: {
      sectionPaddingY: "py-28",
      density: "compact",
    },

    typography: {
      headingWeight: "font-black",
      headingTracking: "tracking-tighter",
      bodyLineHeight: "leading-snug",
    },

    tailwindExtras: ["rotate-[-5deg]", "skew-y-2", "clip-path-polygon"],
  },

  {
    id: "botanical-lush",
    name: "Botanical Lush",
    description:
      "Éléments botaniques en surimpression, courbes organiques feuillues, profondeur végétale — nature luxuriante digitalisée.",
    targetSectors: [
      "paysagisme",
      "fleuriste",
      "spa",
      "éco-tourisme",
      "mariage",
    ],

    mood: ["luxuriant", "botanique", "doux", "naturel", "poétique"],

    separators: {
      style: "leaf-svg",
      intensity: "strong",
    },

    decoratives: {
      type: "botanical",
      placement: "absolute",
      opacity: 0.08,
      scale: "oversized",
    },

    overlaps: {
      enabled: true,
      intensity: "medium",
    },

    shadows: {
      style: "soft",
      tailwindClass: "shadow-[0_20px_60px_rgba(0,0,0,0.1)]",
    },

    cards: {
      borderRadius: "rounded-[1.5rem]",
      border: "border border-current/10",
      padding: "p-8",
      hasBackdropBlur: false,
    },

    spacing: {
      sectionPaddingY: "py-32",
      density: "airy",
    },

    typography: {
      headingWeight: "font-semibold",
      headingTracking: "tracking-normal",
      bodyLineHeight: "leading-loose",
    },

    tailwindExtras: ["scale-105", "blur-sm", "opacity-80"],
  },

  {
    id: "neon-underground",
    name: "Neon Underground",
    description:
      "Esthétique néon urbaine, rayures obliques sombres, effets glow — énergie nocturne qui percute à l'écran.",
    targetSectors: [
      "club",
      "salle de sport",
      "gaming",
      "événementiel",
      "tatouage",
    ],

    mood: ["intense", "urbain", "nocturne", "électrique", "audacieux"],

    separators: {
      style: "diagonal",
      intensity: "strong",
    },

    decoratives: {
      type: "oblique-stripes",
      placement: "absolute",
      opacity: 0.06,
      scale: "large",
    },

    overlaps: {
      enabled: true,
      intensity: "strong",
    },

    shadows: {
      style: "deep",
      tailwindClass: "shadow-[0_0_40px_rgba(var(--color-primary-rgb),0.4)]",
    },

    cards: {
      borderRadius: "rounded-lg",
      border: "border border-primary/30",
      padding: "p-6",
      hasBackdropBlur: true,
    },

    spacing: {
      sectionPaddingY: "py-24",
      density: "compact",
    },

    typography: {
      headingWeight: "font-extrabold",
      headingTracking: "tracking-tight",
      bodyLineHeight: "leading-relaxed",
    },

    tailwindExtras: [
      "backdrop-blur-md",
      "bg-black/40",
      "ring-1 ring-primary/20",
    ],
  },

  {
    id: "swiss-grid",
    name: "Swiss Grid",
    description:
      "Typographie internationale rigoureuse, grilles asymétriques précises, numéros géants comme éléments décoratifs — design helvétique réinterprété.",
    targetSectors: [
      "conseil",
      "finance",
      "audit",
      "ressources humaines",
      "formation",
    ],

    mood: ["rigoureux", "professionnel", "swiss", "typographique", "structuré"],

    separators: {
      style: "straight",
      intensity: "subtle",
    },

    decoratives: {
      type: "giant-numbers",
      placement: "absolute",
      opacity: 0.05,
      scale: "oversized",
    },

    overlaps: {
      enabled: true,
      intensity: "medium",
    },

    shadows: {
      style: "flat",
      tailwindClass: "shadow-none",
    },

    cards: {
      borderRadius: "rounded-none",
      border: "border-l-4 border-current",
      padding: "p-8",
      hasBackdropBlur: false,
    },

    spacing: {
      sectionPaddingY: "py-24",
      density: "normal",
    },

    typography: {
      headingWeight: "font-black",
      headingTracking: "tracking-tighter",
      bodyLineHeight: "leading-relaxed",
    },

    tailwindExtras: [
      "tabular-nums",
      "text-left",
      "border-b-2 border-current/20",
    ],
  },

  {
    id: "glassmorphic-aurora",
    name: "Glassmorphic Aurora",
    description:
      "Couches de verre dépoli sur fonds dégradés aurora, profondeur atmosphérique, blobs lumineux diffus — design atmosphérique nouvelle génération.",
    targetSectors: ["fintech", "crypto", "IA", "médtech", "agence digitale"],

    mood: ["atmosphérique", "tech", "futuriste", "lumineux", "profond"],

    separators: {
      style: "curve",
      intensity: "medium",
    },

    decoratives: {
      type: "blobs",
      placement: "absolute",
      opacity: 0.12,
      scale: "oversized",
    },

    overlaps: {
      enabled: true,
      intensity: "strong",
    },

    shadows: {
      style: "soft",
      tailwindClass: "shadow-[0_8px_64px_rgba(var(--color-primary-rgb),0.25)]",
    },

    cards: {
      borderRadius: "rounded-3xl",
      border: "border border-white/20",
      padding: "p-8",
      hasBackdropBlur: true,
    },

    spacing: {
      sectionPaddingY: "py-32",
      density: "airy",
    },

    typography: {
      headingWeight: "font-bold",
      headingTracking: "tracking-tight",
      bodyLineHeight: "leading-loose",
    },

    tailwindExtras: [
      "backdrop-blur-2xl",
      "bg-white/10",
      "blur-3xl mix-blend-screen",
    ],
  },

  {
    id: "retro-wave",
    name: "Retro Wave",
    description:
      "Nostalgie 80s revisitée — grilles perspectives, bandes horizontales colorées, typographie rétro-futuriste, groove visuel assumé.",
    targetSectors: ["musique", "podcast", "bar", "marque lifestyle", "vintage"],

    mood: ["rétro", "nostalgique", "groovy", "coloré", "décalé"],

    separators: {
      style: "wave-svg",
      intensity: "medium",
    },

    decoratives: {
      type: "oblique-stripes",
      placement: "absolute",
      opacity: 0.07,
      scale: "large",
    },

    overlaps: {
      enabled: true,
      intensity: "medium",
    },

    shadows: {
      style: "sharp",
      tailwindClass: "shadow-[5px_5px_0px_rgba(0,0,0,0.9)]",
    },

    cards: {
      borderRadius: "rounded-lg",
      border: "border-2 border-current",
      padding: "p-6",
      hasBackdropBlur: false,
    },

    spacing: {
      sectionPaddingY: "py-24",
      density: "normal",
    },

    typography: {
      headingWeight: "font-extrabold",
      headingTracking: "tracking-wide",
      bodyLineHeight: "leading-relaxed",
    },

    tailwindExtras: ["uppercase", "italic", "skew-x-[-1deg]"],
  },

  {
    id: "paper-collage",
    name: "Paper Collage",
    description:
      "Collage de rectangles superposés à angles variés, effet papier découpé, profondeur par superposition — poésie artisanale digitale.",
    targetSectors: [
      "studio créatif",
      "librairie",
      "école",
      "culture",
      "association",
    ],

    mood: ["créatif", "joueur", "artisanal", "chaleureux", "expressif"],

    separators: {
      style: "zigzag",
      intensity: "medium",
    },

    decoratives: {
      type: "overlapping-rects",
      placement: "absolute",
      opacity: 0.08,
      scale: "medium",
    },

    overlaps: {
      enabled: true,
      intensity: "strong",
    },

    shadows: {
      style: "soft",
      tailwindClass: "shadow-[3px_4px_12px_rgba(0,0,0,0.15)]",
    },

    cards: {
      borderRadius: "rounded-sm",
      border: "border-0",
      padding: "p-6",
      hasBackdropBlur: false,
    },

    spacing: {
      sectionPaddingY: "py-24",
      density: "normal",
    },

    typography: {
      headingWeight: "font-bold",
      headingTracking: "tracking-normal",
      bodyLineHeight: "leading-loose",
    },

    tailwindExtras: ["rotate-[1deg]", "rotate-[-1.5deg]", "-translate-y-2"],
  },

  {
    id: "dark-editorial",
    name: "Dark Editorial",
    description:
      "Mode sombre éditorial, contrastes extrêmes blanc sur noir, typographie XXL qui saigne, séparateurs dramatiques — impact maximal.",
    targetSectors: [
      "agence créative",
      "photographe",
      "styliste",
      "galerie",
      "cinéma",
    ],

    mood: ["sombre", "dramatique", "éditorial", "contrasté", "bold"],

    separators: {
      style: "diagonal",
      intensity: "strong",
    },

    decoratives: {
      type: "large-letters",
      placement: "absolute",
      opacity: 0.04,
      scale: "oversized",
    },

    overlaps: {
      enabled: true,
      intensity: "strong",
    },

    shadows: {
      style: "deep",
      tailwindClass: "shadow-[0_24px_80px_rgba(0,0,0,0.8)]",
    },

    cards: {
      borderRadius: "rounded-none",
      border: "border border-white/10",
      padding: "p-10",
      hasBackdropBlur: false,
    },

    spacing: {
      sectionPaddingY: "py-40",
      density: "massive",
    },

    typography: {
      headingWeight: "font-black",
      headingTracking: "tracking-tighter",
      bodyLineHeight: "leading-relaxed",
    },

    tailwindExtras: ["mix-blend-difference", "invert", "contrast-125"],
  },

  {
    id: "coastal-resort",
    name: "Coastal Resort",
    description:
      "Séparateurs vagues naturels, overlaps de photos pleine largeur, texture sable subtile — hôtellerie balnéaire qui fait rêver.",
    targetSectors: [
      "hôtel",
      "location vacances",
      "camping luxe",
      "restaurant bord de mer",
    ],

    mood: ["évasion", "lumineux", "serein", "premium", "naturel"],

    separators: {
      style: "wave-svg",
      intensity: "medium",
    },

    decoratives: {
      type: "thin-lines",
      placement: "absolute",
      opacity: 0.05,
      scale: "large",
    },

    overlaps: {
      enabled: true,
      intensity: "medium",
    },

    shadows: {
      style: "warm",
      tailwindClass: "shadow-[0_16px_48px_rgba(0,0,0,0.1)]",
    },

    cards: {
      borderRadius: "rounded-2xl",
      border: "border-0",
      padding: "p-8",
      hasBackdropBlur: false,
    },

    spacing: {
      sectionPaddingY: "py-32",
      density: "airy",
    },

    typography: {
      headingWeight: "font-semibold",
      headingTracking: "tracking-normal",
      bodyLineHeight: "leading-loose",
    },

    tailwindExtras: ["object-cover", "aspect-video", "brightness-105"],
  },

  {
    id: "startup-kinetic",
    name: "Startup Kinetic",
    description:
      "Énergie de mouvement traduite en CSS — diagonales partout, éléments décentrés, densité startup, cartes qui s'échappent de la grille.",
    targetSectors: ["startup", "scale-up", "marketplace", "e-commerce"],

    mood: ["dynamique", "ambitieux", "rapide", "moderne", "percutant"],

    separators: {
      style: "diagonal",
      intensity: "medium",
    },

    decoratives: {
      type: "geometric-shapes",
      placement: "absolute",
      opacity: 0.06,
      scale: "medium",
    },

    overlaps: {
      enabled: true,
      intensity: "strong",
    },

    shadows: {
      style: "soft",
      tailwindClass: "shadow-[0_8px_24px_rgba(0,0,0,0.12)]",
    },

    cards: {
      borderRadius: "rounded-xl",
      border: "border border-current/10",
      padding: "p-6",
      hasBackdropBlur: false,
    },

    spacing: {
      sectionPaddingY: "py-20",
      density: "compact",
    },

    typography: {
      headingWeight: "font-extrabold",
      headingTracking: "tracking-tight",
      bodyLineHeight: "leading-relaxed",
    },

    tailwindExtras: ["skew-y-[-2deg]", "translate-x-4", "-translate-y-3"],
  },

  {
    id: "medical-trust",
    name: "Medical Trust",
    description:
      "Épure médicale rassurante, séparateurs courbes doux, cartes spacieuses, géométrie ordonnée — confiance et expertise sans froideur.",
    targetSectors: ["santé", "clinique", "pharmacie", "dentiste", "ostéopathe"],

    mood: ["rassurant", "propre", "professionnel", "doux", "fiable"],

    separators: {
      style: "curve",
      intensity: "subtle",
    },

    decoratives: {
      type: "dots-grid",
      placement: "absolute",
      opacity: 0.04,
      scale: "small",
    },

    overlaps: {
      enabled: false,
      intensity: "subtle",
    },

    shadows: {
      style: "soft",
      tailwindClass: "shadow-[0_4px_20px_rgba(0,0,0,0.06)]",
    },

    cards: {
      borderRadius: "rounded-2xl",
      border: "border border-current/8",
      padding: "p-8",
      hasBackdropBlur: false,
    },

    spacing: {
      sectionPaddingY: "py-28",
      density: "normal",
    },

    typography: {
      headingWeight: "font-semibold",
      headingTracking: "tracking-normal",
      bodyLineHeight: "leading-loose",
    },

    tailwindExtras: ["ring-1 ring-current/5", "rounded-full", "gap-8"],
  },

  {
    id: "industrial-loft",
    name: "Industrial Loft",
    description:
      "Béton, acier, brique digitale — textures industrielles sublimées, typographie massive, espaces bruts mais maîtrisés.",
    targetSectors: [
      "immobilier",
      "co-working",
      "salle événementielle",
      "garage auto prestige",
    ],

    mood: ["brut", "industriel", "massif", "texturé", "urbain"],

    separators: {
      style: "straight",
      intensity: "medium",
    },

    decoratives: {
      type: "oblique-stripes",
      placement: "absolute",
      opacity: 0.05,
      scale: "large",
    },

    overlaps: {
      enabled: true,
      intensity: "medium",
    },

    shadows: {
      style: "deep",
      tailwindClass: "shadow-[4px_4px_0px_rgba(0,0,0,0.4)]",
    },

    cards: {
      borderRadius: "rounded-none",
      border: "border-l-2 border-current/40",
      padding: "p-8",
      hasBackdropBlur: false,
    },

    spacing: {
      sectionPaddingY: "py-28",
      density: "normal",
    },

    typography: {
      headingWeight: "font-black",
      headingTracking: "tracking-tight",
      bodyLineHeight: "leading-snug",
    },

    tailwindExtras: [
      "grayscale-[20%]",
      "contrast-110",
      "border-t-4 border-current",
    ],
  },

  {
    id: "playful-pop",
    name: "Playful Pop",
    description:
      "Pop art joyeux, formes rondes qui rebondissent, ombres portées colorées, énergie positive contagieuse — fun mais jamais cheap.",
    targetSectors: [
      "enfance",
      "loisirs",
      "application grand public",
      "food delivery",
      "petfood",
    ],

    mood: ["joyeux", "coloré", "accessible", "pétillant", "chaleureux"],

    separators: {
      style: "wave-svg",
      intensity: "medium",
    },

    decoratives: {
      type: "geometric-shapes",
      placement: "absolute",
      opacity: 0.1,
      scale: "medium",
    },

    overlaps: {
      enabled: true,
      intensity: "medium",
    },

    shadows: {
      style: "sharp",
      tailwindClass: "shadow-[4px_4px_0px_rgba(0,0,0,0.8)]",
    },

    cards: {
      borderRadius: "rounded-3xl",
      border: "border-2 border-current/80",
      padding: "p-6",
      hasBackdropBlur: false,
    },

    spacing: {
      sectionPaddingY: "py-24",
      density: "normal",
    },

    typography: {
      headingWeight: "font-extrabold",
      headingTracking: "tracking-tight",
      bodyLineHeight: "leading-relaxed",
    },

    tailwindExtras: ["rotate-[-1deg]", "rotate-[1deg]", "scale-105"],
  },

  {
    id: "haute-couture",
    name: "Haute Couture",
    description:
      "Asymétrie calculée façon maison de mode parisienne, photographies qui saignent, typographie couture, espaces dramatiquement vides.",
    targetSectors: [
      "mode",
      "beauté",
      "parfumerie",
      "maroquinerie",
      "bijouterie",
    ],

    mood: ["couture", "asymétrique", "dramatique", "élégant", "parisien"],

    separators: {
      style: "diagonal",
      intensity: "subtle",
    },

    decoratives: {
      type: "thin-lines",
      placement: "absolute",
      opacity: 0.04,
      scale: "large",
    },

    overlaps: {
      enabled: true,
      intensity: "strong",
    },

    shadows: {
      style: "none",
      tailwindClass: "shadow-none",
    },

    cards: {
      borderRadius: "rounded-none",
      border: "border-b border-current/20",
      padding: "p-0 pb-8",
      hasBackdropBlur: false,
    },

    spacing: {
      sectionPaddingY: "py-40",
      density: "massive",
    },

    typography: {
      headingWeight: "font-light",
      headingTracking: "tracking-[0.2em]",
      bodyLineHeight: "leading-loose",
    },

    tailwindExtras: ["uppercase", "tracking-[0.15em]", "-translate-x-8"],
  },

  {
    id: "data-dashboard",
    name: "Data Dashboard",
    description:
      "Esthétique tableau de bord analytique — cards métriques denses, micro-typographie chiffrée, grille serrée, précision d'instrument de mesure.",
    targetSectors: [
      "comptabilité",
      "analytics",
      "cabinet expertise",
      "gestion RH",
      "logistique",
    ],

    mood: ["analytique", "dense", "précis", "sobre", "performant"],

    separators: {
      style: "straight",
      intensity: "subtle",
    },

    decoratives: {
      type: "giant-numbers",
      placement: "absolute",
      opacity: 0.03,
      scale: "oversized",
    },

    overlaps: {
      enabled: false,
      intensity: "subtle",
    },

    shadows: {
      style: "flat",
      tailwindClass: "shadow-[0_1px_4px_rgba(0,0,0,0.1)]",
    },

    cards: {
      borderRadius: "rounded-lg",
      border: "border border-current/10",
      padding: "p-5",
      hasBackdropBlur: false,
    },

    spacing: {
      sectionPaddingY: "py-16",
      density: "compact",
    },

    typography: {
      headingWeight: "font-bold",
      headingTracking: "tracking-tight",
      bodyLineHeight: "leading-snug",
    },

    tailwindExtras: ["tabular-nums", "font-mono", "text-sm"],
  },
];

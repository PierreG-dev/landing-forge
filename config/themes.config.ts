import type { Theme } from "./types";

export const themes: Theme[] = [
  {
    id: "forge-obsidian",
    name: "Obsidian",
    description:
      "Architecture brutaliste adoucie — formes lourdes, overlaps assumés, tension entre masse et élégance",
    targetSectors: ["tech", "conseil", "industrie", "finance", "architecture"],

    mood: ["bold", "architectural", "premium", "tension"],

    separators: {
      style: "diagonal",
      intensity: "strong",
    },

    decoratives: {
      type: "overlapping-rects",
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
      tailwindClass: "shadow-[6px_6px_0px_0px_rgba(0,0,0,0.85)]",
    },

    cards: {
      borderRadius: "rounded-none",
      border: "border-2 border-current",
      padding: "p-8",
      hasBackdropBlur: false,
    },

    spacing: {
      sectionPaddingY: "py-28",
      density: "airy",
    },

    typography: {
      headingWeight: "font-black",
      headingTracking: "tracking-tight",
      bodyLineHeight: "leading-relaxed",
    },

    tailwindExtras: [
      "before:absolute before:inset-0 before:skew-y-[-3deg]",
      "mix-blend-multiply",
      "uppercase",
      "[clip-path:polygon(0_4%,100%_0,100%_96%,0_100%)]",
    ],
  },

  {
    id: "forge-silk",
    name: "Silk",
    description:
      "Douceur organique maximale — courbes fluides, blurs atmosphériques, profondeur laiteuse comme du verre dépoli",
    targetSectors: [
      "beauté",
      "bien-être",
      "mariage",
      "mode",
      "cosmétique",
      "lifestyle",
    ],

    mood: ["soft", "organic", "luxe", "sensorial", "aérien"],

    separators: {
      style: "wave-svg",
      intensity: "subtle",
    },

    decoratives: {
      type: "blobs",
      placement: "absolute",
      opacity: 0.08,
      scale: "large",
    },

    overlaps: {
      enabled: true,
      intensity: "medium",
    },

    shadows: {
      style: "warm",
      tailwindClass: "shadow-[0_8px_40px_-8px_rgba(0,0,0,0.12)]",
    },

    cards: {
      borderRadius: "rounded-3xl",
      border: "border border-white/40",
      padding: "p-10",
      hasBackdropBlur: true,
    },

    spacing: {
      sectionPaddingY: "py-32",
      density: "massive",
    },

    typography: {
      headingWeight: "font-light",
      headingTracking: "tracking-wide",
      bodyLineHeight: "leading-loose",
    },

    tailwindExtras: [
      "backdrop-blur-xl",
      "bg-white/20",
      "backdrop-saturate-150",
      "[filter:drop-shadow(0_4px_24px_rgba(0,0,0,0.08))]",
    ],
  },

  {
    id: "forge-cartography",
    name: "Cartography",
    description:
      "Esthétique éditoriale cartographique — lignes fines, grilles exposées, précision typographique d'un atlas haut de gamme",
    targetSectors: [
      "conseil",
      "juridique",
      "immobilier",
      "urbanisme",
      "recherche",
      "audit",
    ],

    mood: [
      "précis",
      "éditorial",
      "classique-moderne",
      "intellectual",
      "structuré",
    ],

    separators: {
      style: "straight",
      intensity: "subtle",
    },

    decoratives: {
      type: "thin-lines",
      placement: "absolute",
      opacity: 0.07,
      scale: "oversized",
    },

    overlaps: {
      enabled: false,
      intensity: "subtle",
    },

    shadows: {
      style: "flat",
      tailwindClass: "shadow-none border border-current/10",
    },

    cards: {
      borderRadius: "rounded-sm",
      border: "border border-current/20",
      padding: "p-6",
      hasBackdropBlur: false,
    },

    spacing: {
      sectionPaddingY: "py-20",
      density: "normal",
    },

    typography: {
      headingWeight: "font-semibold",
      headingTracking: "tracking-widest",
      bodyLineHeight: "leading-7",
    },

    tailwindExtras: [
      "divide-y divide-current/10",
      "grid-cols-[1fr_3fr]",
      "text-[0.7rem] uppercase tracking-[0.2em] opacity-50",
      "border-t-2 border-current pt-2",
    ],
  },

  {
    id: "forge-neon-artisan",
    name: "Neon Artisan",
    description:
      "Craft digital nocturne — fonds sombres, lueurs colorées, texture granuleuse assumée, énergie de l'atelier après minuit",
    targetSectors: [
      "restauration",
      "bar-café",
      "tatouage",
      "musique",
      "artisanat-créatif",
      "studio",
    ],

    mood: ["sombre", "artisanal", "vibrant", "nocturne", "authentique"],

    separators: {
      style: "zigzag",
      intensity: "medium",
    },

    decoratives: {
      type: "stamps",
      placement: "absolute",
      opacity: 0.1,
      scale: "medium",
    },

    overlaps: {
      enabled: true,
      intensity: "medium",
    },

    shadows: {
      style: "deep",
      tailwindClass:
        "shadow-[0_0_40px_-4px_var(--color-primary,rgba(255,200,0,0.4))]",
    },

    cards: {
      borderRadius: "rounded-lg",
      border: "border border-white/10",
      padding: "p-7",
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

    tailwindExtras: [
      '[background-image:url("data:image/svg+xml,...")] bg-repeat opacity-[0.03]',
      "mix-blend-screen",
      "grayscale-[20%] contrast-[1.05]",
      "[text-shadow:0_0_20px_currentColor]",
    ],
  },

  {
    id: "forge-riviera",
    name: "Riviera",
    description:
      "Élégance méditerranéenne estivale — courbes généreuses, blanc éclatant, ombres portées courtes, légèreté du Sud haut de gamme",
    targetSectors: [
      "hôtellerie",
      "location-saisonnière",
      "restaurant-gastronomique",
      "tourisme",
      "événementiel",
      "spa",
    ],

    mood: ["lumineux", "estival", "premium", "méditerranéen", "ouvert"],

    separators: {
      style: "curve",
      intensity: "medium",
    },

    decoratives: {
      type: "botanical",
      placement: "absolute",
      opacity: 0.05,
      scale: "large",
    },

    overlaps: {
      enabled: true,
      intensity: "medium",
    },

    shadows: {
      style: "soft",
      tailwindClass: "shadow-[0_4px_24px_-2px_rgba(0,0,0,0.10)]",
    },

    cards: {
      borderRadius: "rounded-2xl",
      border: "border-0",
      padding: "p-8",
      hasBackdropBlur: false,
    },

    spacing: {
      sectionPaddingY: "py-28",
      density: "airy",
    },

    typography: {
      headingWeight: "font-bold",
      headingTracking: "tracking-normal",
      bodyLineHeight: "leading-8",
    },

    tailwindExtras: [
      "rounded-[40px_4px_40px_4px]",
      "[background:radial-gradient(ellipse_at_top,white_60%,transparent)]",
      "hover:scale-[1.02] transition-transform duration-500",
      "aspect-[4/3] object-cover object-center",
    ],
  },
  {
    id: "forge-ripple",
    name: "Ripple",
    description:
      "Vagues douces et chevauchements fluides. Les sections s'enchaînent comme des nappes d'eau, avec des éléments qui flottent entre les plans.",
    targetSectors: ["spa", "bien-être", "coaching", "nutrition", "yoga"],

    mood: ["fluide", "doux", "premium", "apaisant"],

    separators: {
      style: "wave-svg",
      intensity: "medium",
    },

    decoratives: {
      type: "blobs",
      placement: "absolute",
      opacity: 0.07,
      scale: "oversized",
    },

    overlaps: {
      enabled: true,
      intensity: "strong",
    },

    shadows: {
      style: "soft",
      tailwindClass: "shadow-[0_8px_40px_-12px_rgba(0,0,0,0.18)]",
    },

    cards: {
      borderRadius: "rounded-3xl",
      border: "border border-white/30",
      padding: "p-8",
      hasBackdropBlur: true,
    },

    spacing: {
      sectionPaddingY: "py-28",
      density: "airy",
    },

    typography: {
      headingWeight: "font-light",
      headingTracking: "tracking-wide",
      bodyLineHeight: "leading-relaxed",
    },

    tailwindExtras: [
      "backdrop-blur-md",
      "bg-white/60",
      "-mt-16 relative z-10",
      "transition-transform duration-500 hover:-translate-y-1",
    ],
  },

  {
    id: "forge-obsidian",
    name: "Obsidian",
    description:
      "Architecture sombre et taillée dans la masse. Diagonales tranchantes, volumes qui s'entrechoquent, tension visuelle maximale. Pour les marques qui imposent.",
    targetSectors: [
      "cybersécurité",
      "conseil stratégique",
      "luxe B2B",
      "architecture",
      "finance",
    ],

    mood: ["puissant", "sombre", "tranchant", "autoritaire"],

    separators: {
      style: "diagonal",
      intensity: "strong",
    },

    decoratives: {
      type: "oblique-stripes",
      placement: "absolute",
      opacity: 0.05,
      scale: "large",
    },

    overlaps: {
      enabled: true,
      intensity: "strong",
    },

    shadows: {
      style: "sharp",
      tailwindClass: "shadow-[6px_6px_0px_0px_rgba(0,0,0,0.85)]",
    },

    cards: {
      borderRadius: "rounded-none",
      border: "border-l-4 border-current",
      padding: "p-10",
      hasBackdropBlur: false,
    },

    spacing: {
      sectionPaddingY: "py-32",
      density: "massive",
    },

    typography: {
      headingWeight: "font-black",
      headingTracking: "tracking-tighter",
      bodyLineHeight: "leading-loose",
    },

    tailwindExtras: [
      "skew-x-[-2deg]",
      "clip-path-[polygon(0_0,100%_4%,100%_100%,0_96%)]",
      "uppercase text-xs font-bold tracking-[0.2em]",
      "transition-all duration-300 hover:translate-x-1",
    ],
  },

  {
    id: "forge-jardin",
    name: "Jardin",
    description:
      "Organique, vivant, avec des formes botaniques qui débordent des cadres. Les sections respirent comme des massifs fleuris. Chaleur artisanale sans jamais perdre en élégance.",
    targetSectors: [
      "restauration",
      "épicerie fine",
      "maraîchage",
      "fleuriste",
      "cosmétique naturelle",
    ],

    mood: ["organique", "chaleureux", "artisanal", "vivant"],

    separators: {
      style: "leaf-svg",
      intensity: "medium",
    },

    decoratives: {
      type: "botanical",
      placement: "absolute",
      opacity: 0.09,
      scale: "large",
    },

    overlaps: {
      enabled: true,
      intensity: "medium",
    },

    shadows: {
      style: "warm",
      tailwindClass: "shadow-[0_12px_35px_-8px_rgba(120,80,20,0.22)]",
    },

    cards: {
      borderRadius: "rounded-[2rem_0.5rem_2rem_0.5rem]",
      border: "border border-current/10",
      padding: "p-8 pt-10",
      hasBackdropBlur: false,
    },

    spacing: {
      sectionPaddingY: "py-24",
      density: "normal",
    },

    typography: {
      headingWeight: "font-semibold",
      headingTracking: "tracking-normal",
      bodyLineHeight: "leading-7",
    },

    tailwindExtras: [
      "rotate-[-1deg] hover:rotate-0 transition-transform duration-300",
      "-mt-12 relative z-10",
      "rounded-full px-5 py-2 text-sm font-medium border border-current/20",
      "bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))]",
    ],
  },

  {
    id: "forge-blueprint",
    name: "Blueprint",
    description:
      "Grilles techniques, grands numéros en filigrane, typographie construite au cordeau. Référence visuelle au monde de l'ingénierie et du chantier. Précision assumée.",
    targetSectors: [
      "BTP",
      "immobilier",
      "ingénierie",
      "industrie",
      "facility management",
    ],

    mood: ["technique", "précis", "structuré", "sérieux"],

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
      intensity: "subtle",
    },

    shadows: {
      style: "flat",
      tailwindClass: "shadow-[inset_0_0_0_1px_rgba(0,0,0,0.12)]",
    },

    cards: {
      borderRadius: "rounded-lg",
      border: "border border-current/20",
      padding: "p-6",
      hasBackdropBlur: false,
    },

    spacing: {
      sectionPaddingY: "py-20",
      density: "compact",
    },

    typography: {
      headingWeight: "font-bold",
      headingTracking: "tracking-tight",
      bodyLineHeight: "leading-6",
    },

    tailwindExtras: [
      "font-mono text-xs tracking-widest uppercase",
      "grid grid-cols-12 gap-4",
      "border-t-2 border-current pt-4",
      "tabular-nums slashed-zero",
    ],
  },

  {
    id: "forge-eclat",
    name: "Éclat",
    description:
      "Géométrie en mouvement, rectangles qui se chevauchent et créent des angles inattendus. Énergie visuelle maximale pour des marques qui veulent qu'on les remarque sans crier.",
    targetSectors: [
      "agence créative",
      "event",
      "mode",
      "tech startup",
      "coworking",
    ],

    mood: ["dynamique", "créatif", "énergique", "moderne"],

    separators: {
      style: "zigzag",
      intensity: "medium",
    },

    decoratives: {
      type: "overlapping-rects",
      placement: "absolute",
      opacity: 0.06,
      scale: "medium",
    },

    overlaps: {
      enabled: true,
      intensity: "strong",
    },

    shadows: {
      style: "deep",
      tailwindClass: "shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]",
    },

    cards: {
      borderRadius: "rounded-xl",
      border: "border-0",
      padding: "p-7",
      hasBackdropBlur: true,
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

    tailwindExtras: [
      "rotate-[1.5deg] hover:rotate-0 transition-all duration-400",
      "-mt-20 relative z-20 mx-4",
      "backdrop-blur-xl bg-white/10",
      "before:absolute before:inset-0 before:bg-gradient-to-br before:opacity-20 before:rounded-xl",
    ],
  },
  {
    id: "velvet-arc",
    name: "Velvet Arc",
    description:
      "Élégance courbe et matière. Les sections se fondent via des vagues SVG profondes, les cards ont un effet de relief satiné, les décoratifs typographiques surdimensionnés créent une tension luxueuse. Idéal pour les métiers de service premium.",
    targetSectors: [
      "conseil",
      "coaching",
      "immobilier",
      "finance",
      "spa-bien-être",
    ],

    mood: [
      "premium",
      "courbe",
      "enveloppant",
      "satiné",
      "chaleureux",
      "élégant",
    ],

    separators: {
      style: "wave-svg",
      intensity: "strong",
    },

    decoratives: {
      type: "large-letters",
      placement: "absolute",
      opacity: 0.05,
      scale: "oversized",
    },

    overlaps: {
      enabled: true,
      intensity: "strong",
    },

    shadows: {
      style: "warm",
      tailwindClass: "shadow-[0_8px_40px_-8px_rgba(0,0,0,0.18)]",
    },

    cards: {
      borderRadius: "rounded-3xl",
      border: "border border-white/30",
      padding: "p-8",
      hasBackdropBlur: true,
    },

    spacing: {
      sectionPaddingY: "py-28",
      density: "airy",
    },

    typography: {
      headingWeight: "font-semibold",
      headingTracking: "tracking-tight",
      bodyLineHeight: "leading-relaxed",
    },

    tailwindExtras: [
      "first-letter:text-5xl",
      "[&_section]:overflow-visible",
      "[&_.card]:translate-y-[-1.5rem]",
      "[&_h2]:text-balance",
    ],
  },

  {
    id: "brutalist-pulse",
    name: "Brutalist Pulse",
    description:
      "Architecture brute et énergique. Diagonales franches, chevauchements assumés, chiffres géants en décor. La densité graphique installe une autorité visuelle immédiate. Pour les secteurs tech, agence, et créatif audacieux.",
    targetSectors: [
      "agence-digitale",
      "startup-tech",
      "recrutement",
      "formation",
      "événementiel",
    ],

    mood: [
      "audacieux",
      "énergique",
      "tranchant",
      "structuré",
      "moderne",
      "urbain",
    ],

    separators: {
      style: "diagonal",
      intensity: "strong",
    },

    decoratives: {
      type: "giant-numbers",
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
      tailwindClass: "shadow-[6px_6px_0px_0px_rgba(0,0,0,0.85)]",
    },

    cards: {
      borderRadius: "rounded-none",
      border: "border-2 border-current",
      padding: "p-6",
      hasBackdropBlur: false,
    },

    spacing: {
      sectionPaddingY: "py-24",
      density: "normal",
    },

    typography: {
      headingWeight: "font-black",
      headingTracking: "tracking-tighter",
      bodyLineHeight: "leading-snug",
    },

    tailwindExtras: [
      "[&_h1]:uppercase",
      "[&_h2]:uppercase",
      "[&_.card]:hover:translate-x-[-3px] [&_.card]:hover:translate-y-[-3px]",
      "[&_.card]:transition-transform [&_.card]:duration-150",
      "[&_section]:relative [&_section]:z-10",
    ],
  },

  {
    id: "organic-bloom",
    name: "Organic Bloom",
    description:
      "Nature structurée et respiration maximale. Séparateurs en feuilles SVG, blobs doux en arrière-plan, overlaps photo naturels. La générosité de l'espacement évoque le plein air et l'artisanal haut de gamme.",
    targetSectors: [
      "alimentation-bio",
      "cosmétique-naturelle",
      "paysagisme",
      "yoga",
      "artisanat",
    ],

    mood: [
      "naturel",
      "organique",
      "aérien",
      "doux",
      "artisanal",
      "authentique",
    ],

    separators: {
      style: "leaf-svg",
      intensity: "medium",
    },

    decoratives: {
      type: "botanical",
      placement: "absolute",
      opacity: 0.07,
      scale: "large",
    },

    overlaps: {
      enabled: true,
      intensity: "subtle",
    },

    shadows: {
      style: "soft",
      tailwindClass: "shadow-[0_4px_32px_-4px_rgba(0,0,0,0.10)]",
    },

    cards: {
      borderRadius: "rounded-[2rem]",
      border: "border border-black/5",
      padding: "p-9",
      hasBackdropBlur: false,
    },

    spacing: {
      sectionPaddingY: "py-32",
      density: "massive",
    },

    typography: {
      headingWeight: "font-light",
      headingTracking: "tracking-normal",
      bodyLineHeight: "leading-loose",
    },

    tailwindExtras: [
      "[&_img]:rounded-[2rem]",
      "[&_img]:object-cover",
      "[&_.blob]:blur-3xl [&_.blob]:opacity-30",
      "[&_p]:max-w-prose",
      "[&_section]:isolate",
    ],
  },

  {
    id: "grid-precision",
    name: "Grid Precision",
    description:
      "Rigueur modulaire et micro-details soignés. Grille de points en fond, lignes obliques discrètes, cards au cordeau. La densité maîtrisée reflète expertise et méthode. Convient aux professions réglementées et au B2B sérieux.",
    targetSectors: [
      "comptabilité",
      "juridique",
      "ingénierie",
      "logistique",
      "santé-b2b",
    ],

    mood: [
      "rigoureux",
      "méthodique",
      "sobre",
      "expert",
      "précis",
      "professionnel",
    ],

    separators: {
      style: "straight",
      intensity: "subtle",
    },

    decoratives: {
      type: "dots-grid",
      placement: "absolute",
      opacity: 0.08,
      scale: "medium",
    },

    overlaps: {
      enabled: false,
      intensity: "subtle",
    },

    shadows: {
      style: "flat",
      tailwindClass: "shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)]",
    },

    cards: {
      borderRadius: "rounded-xl",
      border: "border border-black/10",
      padding: "p-6",
      hasBackdropBlur: false,
    },

    spacing: {
      sectionPaddingY: "py-20",
      density: "compact",
    },

    typography: {
      headingWeight: "font-medium",
      headingTracking: "tracking-tight",
      bodyLineHeight: "leading-normal",
    },

    tailwindExtras: [
      "[&_table]:border-collapse",
      "[&_td]:border-b [&_td]:border-black/5",
      "[&_.card]:rounded-xl [&_.card]:border [&_.card]:border-black/10",
      "[&_h2]:text-[clamp(1.5rem,3vw,2.5rem)]",
      "[&_section+section]:border-t [&_section+section]:border-black/5",
    ],
  },

  {
    id: "cinematic-depth",
    name: "Cinematic Depth",
    description:
      "Profondeur scénique et grandeur visuelle. Overlapping rectangles en déco, séparateurs en zigzag dramatique, backdrop-blur sur des cards qui flottent en avant-plan. Chaque section est une scène. Pour les marques qui veulent impressionner.",
    targetSectors: [
      "photographie",
      "architecture",
      "luxe",
      "mode",
      "production-audiovisuelle",
    ],

    mood: [
      "dramatique",
      "immersif",
      "cinématique",
      "sophistiqué",
      "sombre",
      "impact",
    ],

    separators: {
      style: "zigzag",
      intensity: "medium",
    },

    decoratives: {
      type: "overlapping-rects",
      placement: "absolute",
      opacity: 0.06,
      scale: "large",
    },

    overlaps: {
      enabled: true,
      intensity: "medium",
    },

    shadows: {
      style: "deep",
      tailwindClass: "shadow-[0_20px_60px_-15px_rgba(0,0,0,0.35)]",
    },

    cards: {
      borderRadius: "rounded-2xl",
      border: "border border-white/10",
      padding: "p-8",
      hasBackdropBlur: true,
    },

    spacing: {
      sectionPaddingY: "py-36",
      density: "airy",
    },

    typography: {
      headingWeight: "font-bold",
      headingTracking: "tracking-[-0.03em]",
      bodyLineHeight: "leading-relaxed",
    },

    tailwindExtras: [
      "[&_section]:relative [&_section]:overflow-hidden",
      "[&_.card]:backdrop-blur-md",
      "[&_h1]:text-[clamp(2.5rem,6vw,5rem)]",
      "[&_img]:brightness-90 [&_img]:contrast-105",
      "[&_.card]:before:absolute [&_.card]:before:inset-0 [&_.card]:before:bg-gradient-to-b [&_.card]:before:from-white/5 [&_.card]:before:to-transparent [&_.card]:before:pointer-events-none",
    ],
  },
  {
    id: "forge-atlas",
    name: "Atlas",
    description:
      "Cartographique et structuré — grilles de points qui évoquent des relevés topographiques, sections en diagonale marquée, overlaps de cards comme des calques empilés.",
    targetSectors: [
      "conseil",
      "architecture",
      "ingénierie",
      "immobilier",
      "logistique",
    ],

    mood: ["structuré", "précis", "premium", "géométrique"],

    separators: {
      style: "diagonal",
      intensity: "strong",
    },

    decoratives: {
      type: "dots-grid",
      placement: "absolute",
      opacity: 0.07,
      scale: "oversized",
    },

    overlaps: {
      enabled: true,
      intensity: "strong",
    },

    shadows: {
      style: "sharp",
      tailwindClass: "shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)]",
    },

    cards: {
      borderRadius: "rounded-none",
      border: "border border-current/20",
      padding: "p-8",
      hasBackdropBlur: false,
    },

    spacing: {
      sectionPaddingY: "py-28",
      density: "airy",
    },

    typography: {
      headingWeight: "font-black",
      headingTracking: "tracking-tight",
      bodyLineHeight: "leading-relaxed",
    },

    tailwindExtras: [
      "before:absolute before:inset-0 before:bg-[size:32px_32px]",
      "clip-path: polygon(0 0, 100% 4%, 100% 100%, 0 96%)",
      "[&_h2]:border-l-4 [&_h2]:pl-4",
    ],
  },

  {
    id: "forge-velvet",
    name: "Velvet",
    description:
      "Sensoriel et organique — blobs en arrière-plan, sections en courbes généreuses, cards avec flou de verre et bordures subtiles. Chaud, doux, presque tactile.",
    targetSectors: ["beauté", "bien-être", "spa", "nutrition", "coaching"],

    mood: ["doux", "organique", "sensoriel", "luxueux"],

    separators: {
      style: "wave-svg",
      intensity: "medium",
    },

    decoratives: {
      type: "blobs",
      placement: "absolute",
      opacity: 0.08,
      scale: "large",
    },

    overlaps: {
      enabled: true,
      intensity: "medium",
    },

    shadows: {
      style: "warm",
      tailwindClass:
        "shadow-[0_8px_40px_-8px_rgba(var(--color-primary-rgb),0.25)]",
    },

    cards: {
      borderRadius: "rounded-3xl",
      border: "border border-white/30",
      padding: "p-8",
      hasBackdropBlur: true,
    },

    spacing: {
      sectionPaddingY: "py-32",
      density: "massive",
    },

    typography: {
      headingWeight: "font-semibold",
      headingTracking: "tracking-wide",
      bodyLineHeight: "leading-loose",
    },

    tailwindExtras: [
      "backdrop-blur-xl bg-white/10",
      "[&_section]:overflow-hidden [&_section]:relative",
      "[&_.blob]:animate-[float_8s_ease-in-out_infinite]",
    ],
  },

  {
    id: "forge-brutus",
    name: "Brutus",
    description:
      "Néo-brutaliste décomplexé — grandes lettres fantômes en arrière-plan, ombres portées franches, borders visibles, overlaps agressifs. Énergie brute, lisibilité maximale.",
    targetSectors: [
      "agence créative",
      "startup tech",
      "street food",
      "fitness",
      "musique",
    ],

    mood: ["brut", "énergique", "audacieux", "urban"],

    separators: {
      style: "zigzag",
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
      tailwindClass: "shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)]",
    },

    cards: {
      borderRadius: "rounded-sm",
      border: "border-2 border-current",
      padding: "p-6",
      hasBackdropBlur: false,
    },

    spacing: {
      sectionPaddingY: "py-20",
      density: "compact",
    },

    typography: {
      headingWeight: "font-black",
      headingTracking: "tracking-[-0.04em]",
      bodyLineHeight: "leading-snug",
    },

    tailwindExtras: [
      "hover:-translate-y-1 hover:translate-x-1 transition-transform duration-150",
      "[&_h1]:uppercase [&_h2]:uppercase",
      "[&_.card]:hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.9)] transition-shadow",
    ],
  },

  {
    id: "forge-mistral",
    name: "Mistral",
    description:
      "Lignes obliques en tension, rayures fines traversant les sections en diagonale, composition cinétique — comme si le vent traversait la page. Dynamisme maîtrisé.",
    targetSectors: ["transport", "sport", "événementiel", "tech", "énergie"],

    mood: ["dynamique", "cinétique", "moderne", "affirmé"],

    separators: {
      style: "diagonal",
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
      style: "soft",
      tailwindClass: "shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)]",
    },

    cards: {
      borderRadius: "rounded-xl",
      border: "border-l-4 border-t border-r border-b border-current/10",
      padding: "p-7",
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

    tailwindExtras: [
      "[&_section]:skew-y-0 [&_.inner]:skew-y-0",
      "bg-[repeating-linear-gradient(135deg,transparent,transparent_40px,rgba(0,0,0,0.015)_40px,rgba(0,0,0,0.015)_41px)]",
      "[&_h2]:after:content-[''] [&_h2]:after:block [&_h2]:after:w-12 [&_h2]:after:h-1 [&_h2]:after:bg-current [&_h2]:after:mt-3 [&_h2]:after:-skew-x-12",
    ],
  },

  {
    id: "forge-papier",
    name: "Papier",
    description:
      "Superpositions de rectangles translucides comme des feuilles empilées, stamps et tampons décoratifs, texture quasi-éditoriale. Artisanat digital haut de gamme.",
    targetSectors: [
      "artisan",
      "photographe",
      "décoration intérieure",
      "édition",
      "gastronomie",
    ],

    mood: ["éditorial", "artisanal", "raffiné", "tactile"],

    separators: {
      style: "curve",
      intensity: "subtle",
    },

    decoratives: {
      type: "overlapping-rects",
      placement: "absolute",
      opacity: 0.06,
      scale: "medium",
    },

    overlaps: {
      enabled: true,
      intensity: "medium",
    },

    shadows: {
      style: "flat",
      tailwindClass:
        "shadow-[2px_3px_0px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.04)]",
    },

    cards: {
      borderRadius: "rounded-lg",
      border: "border border-current/10",
      padding: "p-9",
      hasBackdropBlur: false,
    },

    spacing: {
      sectionPaddingY: "py-28",
      density: "airy",
    },

    typography: {
      headingWeight: "font-light",
      headingTracking: "tracking-[0.06em]",
      bodyLineHeight: "leading-loose",
    },

    tailwindExtras: [
      "[&_.card]:rotate-[-0.5deg] [&_.card:nth-child(even)]:rotate-[0.5deg]",
      "[&_section]:relative [&_section]:before:absolute [&_section]:before:inset-4 [&_section]:before:border [&_section]:before:border-current/5 [&_section]:before:rounded-2xl [&_section]:before:pointer-events-none",
      "[&_h2]:font-serif [&_.label]:uppercase [&_.label]:tracking-[0.15em] [&_.label]:text-xs",
    ],
  },
  {
    id: "forge-obsidian",
    name: "Obsidian",
    description:
      "Architecture sombre et minérale, reliefs sculptés, contrastes tranchants. Impression de solidité absolue.",
    targetSectors: [
      "cabinet-conseil",
      "securite",
      "finance",
      "architecture",
      "luxe-b2b",
    ],

    mood: [
      "premium",
      "structuré",
      "sérieux",
      "sculptural",
      "contrasté",
      "puissant",
    ],

    separators: {
      style: "diagonal",
      intensity: "strong",
    },

    decoratives: {
      type: "overlapping-rects",
      placement: "absolute",
      opacity: 0.07,
      scale: "oversized",
    },

    overlaps: {
      enabled: true,
      intensity: "strong",
    },

    shadows: {
      style: "sharp",
      tailwindClass: "shadow-[6px_6px_0px_0px_rgba(0,0,0,0.85)]",
    },

    cards: {
      borderRadius: "rounded-none",
      border: "border border-current/20",
      padding: "p-8",
      hasBackdropBlur: false,
    },

    spacing: {
      sectionPaddingY: "py-28",
      density: "airy",
    },

    typography: {
      headingWeight: "font-black",
      headingTracking: "tracking-tight",
      bodyLineHeight: "leading-relaxed",
    },

    tailwindExtras: [
      "clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 95%)",
      "mix-blend-mode: multiply",
      "border-l-4 border-current",
    ],
  },

  {
    id: "forge-brume",
    name: "Brume",
    description:
      "Flottant, aérien, translucide. Les éléments semblent suspendus dans du verre dépoli — parfait pour le conseil et le bien-être haut de gamme.",
    targetSectors: [
      "bien-etre",
      "spa",
      "coaching",
      "psychologie",
      "immobilier-prestige",
    ],

    mood: ["doux", "aérien", "premium", "zen", "translucide", "minimaliste"],

    separators: {
      style: "curve",
      intensity: "subtle",
    },

    decoratives: {
      type: "blobs",
      placement: "absolute",
      opacity: 0.08,
      scale: "large",
    },

    overlaps: {
      enabled: true,
      intensity: "medium",
    },

    shadows: {
      style: "soft",
      tailwindClass: "shadow-[0_8px_40px_-8px_rgba(0,0,0,0.12)]",
    },

    cards: {
      borderRadius: "rounded-3xl",
      border: "border border-white/40",
      padding: "p-10",
      hasBackdropBlur: true,
    },

    spacing: {
      sectionPaddingY: "py-32",
      density: "massive",
    },

    typography: {
      headingWeight: "font-light",
      headingTracking: "tracking-wide",
      bodyLineHeight: "leading-loose",
    },

    tailwindExtras: [
      "backdrop-blur-xl",
      "backdrop-saturate-150",
      "bg-white/20",
    ],
  },

  {
    id: "forge-atelier",
    name: "Atelier",
    description:
      "Esthétique artisanale et éditoriale — tampons, textures papier, décalages volontaires. L'anti-template par excellence.",
    targetSectors: [
      "artisan",
      "gastronomie",
      "agence-creative",
      "mode",
      "photographe",
    ],

    mood: [
      "artisanal",
      "éditorial",
      "chaleureux",
      "authentique",
      "texturé",
      "distinctif",
    ],

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
      intensity: "strong",
    },

    shadows: {
      style: "warm",
      tailwindClass: "shadow-[4px_4px_0px_0px_rgba(120,80,40,0.3)]",
    },

    cards: {
      borderRadius: "rounded-sm",
      border: "border-2 border-current/30",
      padding: "p-7",
      hasBackdropBlur: false,
    },

    spacing: {
      sectionPaddingY: "py-24",
      density: "normal",
    },

    typography: {
      headingWeight: "font-extrabold",
      headingTracking: "tracking-tighter",
      bodyLineHeight: "leading-snug",
    },

    tailwindExtras: ["rotate-[-1deg]", "skew-x-1", "mix-blend-mode: multiply"],
  },

  {
    id: "forge-signal",
    name: "Signal",
    description:
      "Dynamique, directionnel, incisif. Les obliques et les chiffres géants créent une énergie qui pousse à l'action — idéal pour les offres tech et SaaS.",
    targetSectors: [
      "saas",
      "tech",
      "marketing-digital",
      "formation",
      "startup",
    ],

    mood: ["énergique", "moderne", "dynamique", "direct", "tech", "ambitieux"],

    separators: {
      style: "diagonal",
      intensity: "medium",
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
      style: "deep",
      tailwindClass: "shadow-[0_20px_60px_-10px_rgba(0,0,0,0.4)]",
    },

    cards: {
      borderRadius: "rounded-xl",
      border: "border-l-4 border-current",
      padding: "p-6",
      hasBackdropBlur: false,
    },

    spacing: {
      sectionPaddingY: "py-20",
      density: "compact",
    },

    typography: {
      headingWeight: "font-black",
      headingTracking: "tracking-tight",
      bodyLineHeight: "leading-normal",
    },

    tailwindExtras: [
      "clip-path: polygon(0 0, 100% 0, 96% 100%, 0 100%)",
      "oblique-stripes bg-stripes-current/5",
      "-skew-x-3",
    ],
  },

  {
    id: "forge-verdure",
    name: "Verdure",
    description:
      "Botanique, organique, vivant. Courbes naturelles et motifs végétaux créent une atmosphère de confiance douce — sans tomber dans le naïf.",
    targetSectors: [
      "sante",
      "nutrition",
      "eco-responsable",
      "naturopathie",
      "jardinerie",
    ],

    mood: ["organique", "naturel", "rassurant", "frais", "authentique", "sain"],

    separators: {
      style: "wave-svg",
      intensity: "medium",
    },

    decoratives: {
      type: "botanical",
      placement: "absolute",
      opacity: 0.1,
      scale: "large",
    },

    overlaps: {
      enabled: true,
      intensity: "subtle",
    },

    shadows: {
      style: "soft",
      tailwindClass: "shadow-[0_4px_24px_-4px_rgba(0,80,40,0.15)]",
    },

    cards: {
      borderRadius: "rounded-2xl",
      border: "border border-current/15",
      padding: "p-8",
      hasBackdropBlur: false,
    },

    spacing: {
      sectionPaddingY: "py-24",
      density: "airy",
    },

    typography: {
      headingWeight: "font-bold",
      headingTracking: "tracking-normal",
      bodyLineHeight: "leading-relaxed",
    },

    tailwindExtras: [
      "rounded-[40%_60%_60%_40%_/_40%_40%_60%_60%]",
      "border-b-2 border-current/20",
      "bg-gradient-to-br from-current/5 to-transparent",
    ],
  },
];

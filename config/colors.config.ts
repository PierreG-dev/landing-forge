import type { ColorCombo } from "./types";

export const colorCombos: ColorCombo[] = [
  {
    id: "lf-slate-copper",
    name: "Slate & Copper",
    description:
      "Sérénité industrielle rehaussée d'un accent chaud. Pour les cabinets de conseil et bureaux d'études.",
    targetSectors: ["conseil", "ingénierie", "architecture"],
    mood: ["calm", "corporate", "geometric", "flat", "clean", "timeless"],
    colors: {
      primary: "#B06A3A",
      secondary: "#4A6373",
      surface: "#F4F2EE",
      text: "#1E2A32",
      textLight: "#4A6373",
    },
    wcagAA: true,
  },

  {
    id: "lf-moss-ivory",
    name: "Mousse & Ivoire",
    description:
      "Naturalité premium. Textures douces, confiance organique pour artisans et marques bio.",
    targetSectors: ["cosmétique bio", "alimentation", "artisanat"],
    mood: ["calm", "artisan", "organic", "layered", "clean", "timeless"],
    colors: {
      primary: "#4A7C59",
      secondary: "#8C6E4B",
      surface: "#F7F5EE",
      text: "#1C2620",
      textLight: "#4A7C59",
    },
    wcagAA: true,
  },

  {
    id: "lf-navy-gold",
    name: "Marine & Or",
    description:
      "Autorité classique et prestige. Idéal pour cabinets juridiques, finance, institutions.",
    targetSectors: ["droit", "finance", "notariat"],
    mood: ["bold", "luxury", "geometric", "flat", "ornate", "classic"],
    colors: {
      primary: "#C49A28",
      secondary: "#1B2D4F",
      surface: "#F5F3EE",
      text: "#0F1C30",
      textLight: "#1B2D4F",
    },
    wcagAA: true,
  },

  {
    id: "lf-terracotta-sand",
    name: "Terracotta & Sable",
    description:
      "Chaleur méditerranéenne et savoir-faire. Pour décorateurs, hôtellerie, restauration haut de gamme.",
    targetSectors: ["hôtellerie", "restauration", "décoration"],
    mood: [
      "energetic",
      "artisan",
      "organic",
      "textured",
      "decorated",
      "timeless",
    ],
    colors: {
      primary: "#C05A3A",
      secondary: "#8C7355",
      surface: "#F8F3EC",
      text: "#2A1A10",
      textLight: "#8C7355",
    },
    wcagAA: true,
  },

  {
    id: "lf-plum-silver",
    name: "Prune & Argent",
    description:
      "Sophistication discrète et modernité. Pour cliniques esthétiques, parfumeurs, créateurs de mode.",
    targetSectors: ["esthétique", "mode", "parfumerie"],
    mood: ["subtle", "luxury", "editorial", "flat", "clean", "modern"],
    colors: {
      primary: "#6B3D6E",
      secondary: "#8A9BA8",
      surface: "#F5F2F5",
      text: "#1E1220",
      textLight: "#6B3D6E",
    },
    wcagAA: true,
  },

  {
    id: "lf-cobalt-cream",
    name: "Cobalt & Crème",
    description:
      "Expertise technique sublimée. Pour ESN, SaaS, cabinets IT et startups B2B.",
    targetSectors: ["tech", "SaaS", "conseil IT"],
    mood: ["bold", "technical", "geometric", "angular", "clean", "modern"],
    colors: {
      primary: "#1A4DB5",
      secondary: "#3A7DC4",
      surface: "#F4F5F9",
      text: "#0B1832",
      textLight: "#1A4DB5",
    },
    wcagAA: true,
  },

  {
    id: "lf-emerald-graphite",
    name: "Émeraude & Graphite",
    description:
      "Nature puissante et direction assumée. Pour cabinets de développement durable, greentech, ESG.",
    targetSectors: ["greentech", "ESG", "environnement"],
    mood: ["bold", "corporate", "geometric", "layered", "clean", "modern"],
    colors: {
      primary: "#1A6B4A",
      secondary: "#3A4A42",
      surface: "#F2F5F3",
      text: "#0E1F17",
      textLight: "#1A6B4A",
    },
    wcagAA: true,
  },

  {
    id: "lf-rose-taupe",
    name: "Rose Poudré & Taupe",
    description:
      "Féminité élégante et chaleur bienveillante. Santé féminine, bien-être, sophrologie.",
    targetSectors: ["santé", "bien-être", "coaching"],
    mood: ["calm", "friendly", "organic", "curved", "clean", "modern"],
    colors: {
      primary: "#C47A8A",
      secondary: "#8A7570",
      surface: "#F8F3F2",
      text: "#2A1A1C",
      textLight: "#8A7570",
    },
    wcagAA: true,
  },

  {
    id: "lf-midnight-amber",
    name: "Minuit & Ambre",
    description:
      "Caractère nocturne et chaleur intime. Bars à vins, cave, épicerie fine, spiritueux.",
    targetSectors: ["cave", "épicerie fine", "spiritueux"],
    mood: ["bold", "luxury", "editorial", "typographic", "ornate", "classic"],
    colors: {
      primary: "#C48A2A",
      secondary: "#2A2035",
      surface: "#F5F2E8",
      text: "#170E04",
      textLight: "#7A6040",
    },
    wcagAA: true,
  },

  {
    id: "lf-sage-stone",
    name: "Sauge & Pierre",
    description:
      "Sérénité minimaliste et santé holistique. Yoga, méditation, retraites bien-être.",
    targetSectors: ["yoga", "méditation", "naturopathie"],
    mood: ["calm", "artisan", "minimal", "flat", "bare", "timeless"],
    colors: {
      primary: "#5A7A62",
      secondary: "#8A8A80",
      surface: "#F3F4F0",
      text: "#1A2018",
      textLight: "#5A7A62",
    },
    wcagAA: true,
  },

  {
    id: "lf-burgundy-linen",
    name: "Bordeaux & Lin",
    description:
      "Tradition et raffinement du terroir. Domaines viticoles, traiteur gastronomique, fromages.",
    targetSectors: ["viticulture", "gastronomie", "terroir"],
    mood: ["subtle", "artisan", "organic", "textured", "decorated", "classic"],
    colors: {
      primary: "#7A2035",
      secondary: "#8A7A60",
      surface: "#F7F2EE",
      text: "#200B10",
      textLight: "#7A2035",
    },
    wcagAA: true,
  },

  {
    id: "lf-sky-chalk",
    name: "Ciel & Craie",
    description:
      "Légèreté créative et rigueur douce. Design, communication, studios créatifs.",
    targetSectors: ["design", "communication", "studio"],
    mood: ["calm", "creative", "editorial", "wavy", "clean", "modern"],
    colors: {
      primary: "#3A8AC4",
      secondary: "#6AAAD4",
      surface: "#F2F6FA",
      text: "#0A1E30",
      textLight: "#3A8AC4",
    },
    wcagAA: true,
  },

  {
    id: "lf-saffron-white",
    name: "Safran & Blanc Chaud",
    description:
      "Énergie vitale et optimisme expert. Nutrition, coaching sportif, médecine préventive.",
    targetSectors: ["nutrition", "sport", "médecine préventive"],
    mood: ["energetic", "friendly", "organic", "curved", "clean", "modern"],
    colors: {
      primary: "#C47A18",
      secondary: "#E8A84A",
      surface: "#FAF6EE",
      text: "#261800",
      textLight: "#7A5010",
    },
    wcagAA: true,
  },

  {
    id: "lf-mauve-ecru",
    name: "Mauve & Écru",
    description:
      "Intimité chaleureuse et créativité apaisée. Décorateurs d'intérieur, photographes, artistes.",
    targetSectors: ["intérieur", "photographie", "art"],
    mood: [
      "subtle",
      "creative",
      "editorial",
      "layered",
      "decorated",
      "timeless",
    ],
    colors: {
      primary: "#7A5A8A",
      secondary: "#8A7A6A",
      surface: "#F6F2F4",
      text: "#1E1220",
      textLight: "#7A5A8A",
    },
    wcagAA: true,
  },

  {
    id: "lf-teal-ivory",
    name: "Paon & Ivoire",
    description:
      "Confiance médicale et chaleur humaine. Cliniques, cabinets dentaires, paramédicaux.",
    targetSectors: ["médical", "dentaire", "paramédical"],
    mood: ["calm", "corporate", "geometric", "flat", "clean", "modern"],
    colors: {
      primary: "#1A7A7A",
      secondary: "#4AAAAA",
      surface: "#F2F8F8",
      text: "#0A1E1E",
      textLight: "#1A7A7A",
    },
    wcagAA: true,
  },

  {
    id: "lf-ochre-slate",
    name: "Ocre & Ardoise",
    description:
      "Héritage contemporain. Pour architectes, agences immobilières prestige, promoteurs.",
    targetSectors: ["immobilier", "architecture", "promotion"],
    mood: ["bold", "corporate", "geometric", "angular", "clean", "timeless"],
    colors: {
      primary: "#A87A28",
      secondary: "#4A5A6A",
      surface: "#F5F3EC",
      text: "#1A1408",
      textLight: "#4A5A6A",
    },
    wcagAA: true,
  },

  {
    id: "lf-raspberry-chalk",
    name: "Framboise & Craie",
    description:
      "Audace féminine et conviction créative. Agences marketing, brand studios, médias.",
    targetSectors: ["marketing", "brand", "médias"],
    mood: [
      "energetic",
      "creative",
      "editorial",
      "overlapping",
      "clean",
      "modern",
    ],
    colors: {
      primary: "#B52A55",
      secondary: "#D4607A",
      surface: "#F8F2F4",
      text: "#200A10",
      textLight: "#B52A55",
    },
    wcagAA: true,
  },

  {
    id: "lf-pine-sand",
    name: "Pin & Sable Doré",
    description:
      "Nature et durabilité luxueuse. Éco-construction, matériaux bio-sourcés, charpentiers haut de gamme.",
    targetSectors: ["construction", "éco-habitat", "artisanat bois"],
    mood: ["calm", "artisan", "organic", "textured", "clean", "timeless"],
    colors: {
      primary: "#3A5A38",
      secondary: "#A08050",
      surface: "#F5F3EA",
      text: "#101A0E",
      textLight: "#3A5A38",
    },
    wcagAA: true,
  },

  {
    id: "lf-indigo-cream",
    name: "Indigo & Crème",
    description:
      "Profondeur intellectuelle et précision. Éditeurs, avocats d'affaires, think tanks, formation professionnelle.",
    targetSectors: ["édition", "formation", "think tank"],
    mood: ["subtle", "luxury", "editorial", "typographic", "bare", "classic"],
    colors: {
      primary: "#2A2A7A",
      secondary: "#5A5AAA",
      surface: "#F4F4F8",
      text: "#0A0A20",
      textLight: "#2A2A7A",
    },
    wcagAA: true,
  },

  {
    id: "lf-copper-fog",
    name: "Cuivre & Brume",
    description:
      "Artisanat d'exception et modernité poétique. Joailliers, orfèvres, studios de création sur mesure.",
    targetSectors: ["joaillerie", "orfèvrerie", "luxe artisanal"],
    mood: ["subtle", "luxury", "organic", "curved", "decorated", "timeless"],
    colors: {
      primary: "#A0622A",
      secondary: "#7A8A92",
      surface: "#F6F3EE",
      text: "#1E1208",
      textLight: "#6A5A4A",
    },
    wcagAA: true,
  },
];

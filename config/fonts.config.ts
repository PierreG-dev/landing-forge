import type { FontCombo } from "./types";

export const fontCombos: FontCombo[] = [
  {
    id: "forge-001",
    name: "Obsidian Editorial",
    description:
      "Un serif à forte personnalité en display, ancré par un sans-serif neutre et lisible. Autorité sans rigidité.",
    targetSectors: [
      "conseil",
      "finance",
      "cabinet d'avocats",
      "immobilier haut de gamme",
    ],

    mood: ["luxury", "editorial", "bold", "classic", "angular", "clean"],

    fonts: {
      display: {
        family: "Playfair Display",
        weights: [700, 900],
        variable: "--font-display",
      },
      body: {
        family: "Inter",
        weights: [400, 500],
        variable: "--font-body",
      },
      accent: {
        family: "Inter",
        weights: [600],
        variable: "--font-accent",
      },
    },

    pairing: {
      contrast: "high",
      style: "serif-sans",
      mood: ["luxury", "editorial", "bold", "classic", "angular", "clean"],
    },

    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@400;500;600&display=swap",
  },

  {
    id: "forge-002",
    name: "Atelier Vivant",
    description:
      "Display humaniste aux courbes généreuses, corps texte géométrique précis. Chaleur artisanale avec une finition moderne.",
    targetSectors: [
      "artisan",
      "restauration gastronomique",
      "décoration intérieure",
      "mode indépendante",
    ],

    mood: ["artisan", "friendly", "organic", "warm", "curved", "timeless"],

    fonts: {
      display: {
        family: "Cormorant Garamond",
        weights: [600, 700],
        variable: "--font-display",
      },
      body: {
        family: "DM Sans",
        weights: [400, 500],
        variable: "--font-body",
      },
      accent: {
        family: "DM Sans",
        weights: [600, 700],
        variable: "--font-accent",
      },
    },

    pairing: {
      contrast: "high",
      style: "serif-sans",
      mood: ["artisan", "friendly", "organic", "warm", "curved", "timeless"],
    },

    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=DM+Sans:wght@400;500;600;700&display=swap",
  },

  {
    id: "forge-003",
    name: "Signal Propre",
    description:
      "Deux sans-serif de la même famille de pensée mais de caractères distincts. Efficacité technique, lisibilité maximale, confiance immédiate.",
    targetSectors: ["SaaS", "tech PME", "cabinet comptable", "services B2B"],

    mood: ["corporate", "technical", "minimal", "geometric", "flat", "modern"],

    fonts: {
      display: {
        family: "Space Grotesk",
        weights: [600, 700],
        variable: "--font-display",
      },
      body: {
        family: "Nunito Sans",
        weights: [400, 500],
        variable: "--font-body",
      },
      accent: {
        family: "Space Grotesk",
        weights: [500],
        variable: "--font-accent",
      },
    },

    pairing: {
      contrast: "medium",
      style: "sans-sans",
      mood: [
        "corporate",
        "technical",
        "minimal",
        "geometric",
        "flat",
        "modern",
      ],
    },

    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Nunito+Sans:wght@400;500&display=swap",
  },

  {
    id: "forge-004",
    name: "Terroir Signature",
    description:
      "Display script élégant tempéré par un serif de labeur irréprochable. Signature visible, lecture confortable.",
    targetSectors: [
      "domaine viticole",
      "épicerie fine",
      "hôtellerie boutique",
      "cosmétique naturel",
    ],

    mood: ["luxury", "artisan", "organic", "ornate", "classic", "layered"],

    fonts: {
      display: {
        family: "Satisfy",
        weights: [400],
        variable: "--font-display",
      },
      body: {
        family: "Lora",
        weights: [400, 500],
        variable: "--font-body",
      },
      accent: {
        family: "Lora",
        weights: [600, 700],
        variable: "--font-accent",
      },
    },

    pairing: {
      contrast: "high",
      style: "display-sans",
      mood: ["luxury", "artisan", "organic", "ornate", "classic", "layered"],
    },

    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Satisfy&family=Lora:wght@400;500;600;700&display=swap",
  },

  {
    id: "forge-005",
    name: "Bureau Moderne",
    description:
      "Display condensé au caractère affirmé, corps texte géométrique aéré. Énergie éditoriale au service d'une identité PME ambitieuse.",
    targetSectors: [
      "agence créative",
      "marketing digital",
      "communication",
      "studio photo/vidéo",
    ],

    mood: ["creative", "bold", "editorial", "energetic", "angular", "modern"],

    fonts: {
      display: {
        family: "Barlow Condensed",
        weights: [700, 800],
        variable: "--font-display",
      },
      body: {
        family: "Jost",
        weights: [400, 500],
        variable: "--font-body",
      },
      accent: {
        family: "Jost",
        weights: [600, 700],
        variable: "--font-accent",
      },
    },

    pairing: {
      contrast: "medium",
      style: "sans-sans",
      mood: ["creative", "bold", "editorial", "energetic", "angular", "modern"],
    },

    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800&family=Jost:wght@400;500;600;700&display=swap",
  },
  {
    id: "forge-001",
    name: "Sovereign Editorial",
    description:
      "Playfair Display s'impose avec autorité, Inter assure une lisibilité irréprochable. Un classique du haut de gamme éditorial.",
    targetSectors: [
      "cabinet conseil",
      "immobilier prestige",
      "finance",
      "juridique",
    ],

    mood: ["luxury", "editorial", "classic", "bold", "timeless", "clean"],

    fonts: {
      display: {
        family: "Playfair Display",
        weights: [400, 700, 900],
        variable: "--font-display",
      },
      body: {
        family: "Inter",
        weights: [400, 500, 600],
        variable: "--font-body",
      },
      accent: {
        family: "Inter",
        weights: [300, 400],
        variable: "--font-accent",
      },
    },

    pairing: {
      contrast: "high",
      style: "serif-sans",
      mood: ["luxury", "editorial", "classic", "bold", "timeless", "clean"],
    },

    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@300;400;500;600&display=swap",
  },

  {
    id: "forge-002",
    name: "Atelier Vivant",
    description:
      "Cormorant Garamond apporte une élégance manuscrite et fragile, DM Sans la stabilise avec douceur. Pour les créatifs qui veulent du caractère sans l'arrogance.",
    targetSectors: [
      "studio design",
      "artisanat premium",
      "mode",
      "décoration intérieure",
    ],

    mood: [
      "artisan",
      "organic",
      "editorial",
      "subtle",
      "timeless",
      "decorated",
    ],

    fonts: {
      display: {
        family: "Cormorant Garamond",
        weights: [300, 400, 600],
        variable: "--font-display",
      },
      body: {
        family: "DM Sans",
        weights: [400, 500],
        variable: "--font-body",
      },
      accent: {
        family: "Cormorant Garamond",
        weights: [300, 400],
        variable: "--font-accent",
      },
    },

    pairing: {
      contrast: "high",
      style: "serif-sans",
      mood: [
        "artisan",
        "organic",
        "editorial",
        "subtle",
        "timeless",
        "decorated",
      ],
    },

    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=DM+Sans:wght@400;500&display=swap",
  },

  {
    id: "forge-003",
    name: "Signal Fort",
    description:
      "Syne s'impose en display géométrique avec une énergie presque brutale, Nunito l'adoucit en body pour rester accessible. Idéal pour les marques tech qui veulent paraître humaines.",
    targetSectors: ["startup tech", "SaaS", "agence digitale", "formation"],

    mood: ["energetic", "geometric", "modern", "bold", "friendly", "flat"],

    fonts: {
      display: {
        family: "Syne",
        weights: [700, 800],
        variable: "--font-display",
      },
      body: {
        family: "Nunito",
        weights: [400, 500, 600],
        variable: "--font-body",
      },
      accent: {
        family: "Nunito",
        weights: [700],
        variable: "--font-accent",
      },
    },

    pairing: {
      contrast: "medium",
      style: "sans-sans",
      mood: ["energetic", "geometric", "modern", "bold", "friendly", "flat"],
    },

    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Nunito:wght@400;500;600;700&display=swap",
  },

  {
    id: "forge-004",
    name: "Terroir Robuste",
    description:
      "Libre Baskerville impose une dignité de presse régionale, Source Sans 3 assure un confort de lecture long. Un pairing ancré, sincère, qui inspire confiance immédiatement.",
    targetSectors: [
      "restauration",
      "producteurs locaux",
      "vin & gastronomie",
      "tourisme rural",
    ],

    mood: ["artisan", "classic", "calm", "organic", "textured", "friendly"],

    fonts: {
      display: {
        family: "Libre Baskerville",
        weights: [400, 700],
        variable: "--font-display",
      },
      body: {
        family: "Source Sans 3",
        weights: [400, 600],
        variable: "--font-body",
      },
      accent: {
        family: "Source Sans 3",
        weights: [300, 400],
        variable: "--font-accent",
      },
    },

    pairing: {
      contrast: "medium",
      style: "serif-sans",
      mood: ["artisan", "classic", "calm", "organic", "textured", "friendly"],
    },

    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Source+Sans+3:wght@300;400;600&display=swap",
  },

  {
    id: "forge-005",
    name: "Precision Noire",
    description:
      "Space Grotesk tranche avec une géométrie technique et confiante, Literata offre un corps de texte optimisé pour l'écran avec une légère chaleur. Pour les experts qui ne veulent pas paraître froids.",
    targetSectors: [
      "ingénierie",
      "cabinet architecture",
      "conseil IT",
      "santé premium",
    ],

    mood: [
      "technical",
      "geometric",
      "modern",
      "corporate",
      "minimal",
      "angular",
    ],

    fonts: {
      display: {
        family: "Space Grotesk",
        weights: [500, 700],
        variable: "--font-display",
      },
      body: {
        family: "Literata",
        weights: [400, 500],
        variable: "--font-body",
      },
      accent: {
        family: "Space Grotesk",
        weights: [300, 400],
        variable: "--font-accent",
      },
    },

    pairing: {
      contrast: "high",
      style: "display-sans",
      mood: [
        "technical",
        "geometric",
        "modern",
        "corporate",
        "minimal",
        "angular",
      ],
    },

    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;700&family=Literata:wght@400;500&display=swap",
  },
  {
    id: "forge-001",
    name: "Magistral",
    description:
      "Sérif classique en display, sans-serif neutre en corps. Alliance entre autorité éditoriale et lisibilité moderne. Idéal pour les marques qui veulent inspirer confiance sans paraître froides.",
    targetSectors: ["conseil", "finance", "immobilier", "expertise-comptable"],

    mood: ["luxury", "corporate", "editorial", "timeless"],

    fonts: {
      display: {
        family: "Playfair Display",
        weights: [400, 700, 900],
        variable: "--font-display",
      },
      body: {
        family: "Inter",
        weights: [400, 500, 600],
        variable: "--font-body",
      },
      accent: {
        family: "Inter",
        weights: [500, 700],
        variable: "--font-accent",
      },
    },

    pairing: {
      contrast: "high",
      style: "serif-sans",
      mood: ["luxury", "corporate", "editorial", "timeless"],
    },

    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@400;500;600;700&display=swap",
  },

  {
    id: "forge-002",
    name: "Atelier Sud",
    description:
      "Display manuscrit chaleureux couplé à un sans-serif humaniste aéré. Évoque le savoir-faire artisanal et la proximité. Pour les marques qui veulent de la chaleur sans perdre en crédibilité.",
    targetSectors: [
      "restauration",
      "artisanat",
      "cosmétique-naturel",
      "traiteur",
      "décoration-intérieure",
    ],

    mood: ["artisan", "friendly", "organic", "warm"],

    fonts: {
      display: {
        family: "Cormorant Garamond",
        weights: [300, 600, 700],
        variable: "--font-display",
      },
      body: {
        family: "Nunito Sans",
        weights: [400, 600],
        variable: "--font-body",
      },
      accent: {
        family: "Dancing Script",
        weights: [600, 700],
        variable: "--font-accent",
      },
    },

    pairing: {
      contrast: "high",
      style: "serif-sans",
      mood: ["artisan", "friendly", "organic", "warm"],
    },

    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;600;700&family=Nunito+Sans:wght@400;600&family=Dancing+Script:wght@600;700&display=swap",
  },

  {
    id: "forge-003",
    name: "Voltage",
    description:
      "Deux sans-serif géométriques à forte personnalité : un display condensé percutant, un corps sobre et fonctionnel. Énergie concentrée, impact immédiat. Pour les marques qui veulent dominer leur espace.",
    targetSectors: [
      "sport",
      "tech-startup",
      "agence-marketing",
      "coaching",
      "sécurité",
    ],

    mood: ["energetic", "bold", "geometric", "modern"],

    fonts: {
      display: {
        family: "Barlow Condensed",
        weights: [600, 700, 800],
        variable: "--font-display",
      },
      body: {
        family: "DM Sans",
        weights: [400, 500, 600],
        variable: "--font-body",
      },
      accent: {
        family: "Barlow Condensed",
        weights: [800],
        variable: "--font-accent",
      },
    },

    pairing: {
      contrast: "medium",
      style: "sans-sans",
      mood: ["energetic", "bold", "geometric", "modern"],
    },

    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=DM+Sans:wght@400;500;600&display=swap",
  },

  {
    id: "forge-004",
    name: "Studio Blanc",
    description:
      "Display sérif élégant à empattements fins, corps sans-serif minimaliste. Espace blanc généreux suggéré par la typographie elle-même. Pour les marques qui font de l'épure un luxe.",
    targetSectors: [
      "architecture",
      "photographie",
      "mode",
      "galerie-art",
      "spa-luxe",
    ],

    mood: ["luxury", "minimal", "editorial", "clean"],

    fonts: {
      display: {
        family: "Libre Baskerville",
        weights: [400, 700],
        variable: "--font-display",
      },
      body: {
        family: "Jost",
        weights: [300, 400, 500],
        variable: "--font-body",
      },
      accent: {
        family: "Jost",
        weights: [300, 600],
        variable: "--font-accent",
      },
    },

    pairing: {
      contrast: "high",
      style: "serif-sans",
      mood: ["luxury", "minimal", "editorial", "clean"],
    },

    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Jost:wght@300;400;500;600&display=swap",
  },

  {
    id: "forge-005",
    name: "Terrain Commun",
    description:
      "Sérif slab solide en display, sans-serif humaniste chaleureux en corps. Ancrage, robustesse, accessibilité. Pour les TPE qui veulent paraître établies et de confiance sans être distantes.",
    targetSectors: [
      "BTP",
      "transport",
      "santé-libérale",
      "juridique-proximité",
      "formation",
    ],

    mood: ["corporate", "friendly", "bold", "timeless"],

    fonts: {
      display: {
        family: "Zilla Slab",
        weights: [400, 600, 700],
        variable: "--font-display",
      },
      body: {
        family: "Source Sans 3",
        weights: [400, 600],
        variable: "--font-body",
      },
      accent: {
        family: "Zilla Slab",
        weights: [600],
        variable: "--font-accent",
      },
    },

    pairing: {
      contrast: "medium",
      style: "serif-sans",
      mood: ["corporate", "friendly", "bold", "timeless"],
    },

    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@400;600;700&family=Source+Sans+3:wght@400;600&display=swap",
  },
  {
    id: "forge-001",
    name: "Sovereign",
    description:
      "Sérif monumental en display, sans-serif neutre en corps. Alliance du prestige classique et de la clarté moderne.",
    targetSectors: ["conseil", "finance", "immobilier", "luxe"],

    mood: ["luxury", "timeless", "editorial", "clean"],

    fonts: {
      display: {
        family: "Playfair Display",
        weights: [400, 700, 900],
        variable: "--font-display",
      },
      body: {
        family: "Inter",
        weights: [400, 500, 600],
        variable: "--font-body",
      },
      accent: {
        family: "Inter",
        weights: [300, 400],
        variable: "--font-accent",
      },
    },

    pairing: {
      contrast: "high",
      style: "serif-sans",
      mood: ["luxury", "timeless", "editorial", "clean"],
    },

    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@300;400;500;600&display=swap",
  },

  {
    id: "forge-002",
    name: "Atelier",
    description:
      "Display expressif aux contrastes marqués, corps humaniste chaleureux. Idéal pour les métiers manuels et créatifs qui veulent du caractère.",
    targetSectors: [
      "artisanat",
      "décoration",
      "gastronomie",
      "architecture d'intérieur",
    ],

    mood: ["artisan", "organic", "timeless", "decorated"],

    fonts: {
      display: {
        family: "Cormorant Garamond",
        weights: [300, 600, 700],
        variable: "--font-display",
      },
      body: {
        family: "Source Sans 3",
        weights: [400, 600],
        variable: "--font-body",
      },
      accent: {
        family: "Cormorant Garamond",
        weights: [300, 400],
        variable: "--font-accent",
      },
    },

    pairing: {
      contrast: "high",
      style: "serif-sans",
      mood: ["artisan", "organic", "timeless", "decorated"],
    },

    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;600;700&family=Source+Sans+3:wght@400;600&display=swap",
  },

  {
    id: "forge-003",
    name: "Circuit",
    description:
      "Duo 100% géométrique à deux graisses. La rigueur du monde tech sans la froideur. Corps mono en accent pour les données et snippets.",
    targetSectors: ["tech", "SaaS", "cabinet IT", "ingénierie"],

    mood: ["technical", "geometric", "modern", "minimal"],

    fonts: {
      display: {
        family: "DM Sans",
        weights: [500, 700],
        variable: "--font-display",
      },
      body: {
        family: "DM Sans",
        weights: [400, 500],
        variable: "--font-body",
      },
      accent: {
        family: "DM Mono",
        weights: [400, 500],
        variable: "--font-accent",
      },
    },

    pairing: {
      contrast: "low",
      style: "mono-accent",
      mood: ["technical", "geometric", "modern", "minimal"],
    },

    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=DM+Mono:wght@400;500&display=swap",
  },

  {
    id: "forge-004",
    name: "Meridian",
    description:
      "Slab sérif affirmé en display, grotesque sobre en corps. Le combo des marques qui veulent inspirer la confiance sans paraître rigides.",
    targetSectors: ["BTP", "logistique", "industrie", "services B2B"],

    mood: ["corporate", "bold", "angular", "flat"],

    fonts: {
      display: {
        family: "Zilla Slab",
        weights: [500, 700],
        variable: "--font-display",
      },
      body: {
        family: "Nunito Sans",
        weights: [400, 600],
        variable: "--font-body",
      },
      accent: {
        family: "Nunito Sans",
        weights: [300, 400],
        variable: "--font-accent",
      },
    },

    pairing: {
      contrast: "medium",
      style: "serif-sans",
      mood: ["corporate", "bold", "angular", "flat"],
    },

    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@500;700&family=Nunito+Sans:wght@300;400;600&display=swap",
  },

  {
    id: "forge-005",
    name: "Véloce",
    description:
      "Display condensé dynamique, corps arrondi accessible. Énergie et proximité — pour les marques qui bougent vite et parlent humain.",
    targetSectors: ["sport", "coaching", "formation", "événementiel"],

    mood: ["energetic", "friendly", "curved", "bold"],

    fonts: {
      display: {
        family: "Barlow Condensed",
        weights: [600, 700, 800],
        variable: "--font-display",
      },
      body: {
        family: "Nunito",
        weights: [400, 600, 700],
        variable: "--font-body",
      },
      accent: {
        family: "Barlow Condensed",
        weights: [400, 500],
        variable: "--font-accent",
      },
    },

    pairing: {
      contrast: "medium",
      style: "display-sans",
      mood: ["energetic", "friendly", "curved", "bold"],
    },

    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800&family=Nunito:wght@400;600;700&display=swap",
  },
  {
    id: "forge-001",
    name: "Cabinet & Craft",
    description:
      "Slab serif autoritaire pour les titres, humaniste neutre pour le corps. Évoque le savoir-faire haut de gamme et la confiance immédiate.",
    targetSectors: [
      "menuiserie",
      "architecture intérieure",
      "conseil",
      "artisanat premium",
    ],

    mood: ["bold", "artisan", "organic", "timeless"],

    fonts: {
      display: {
        family: "Zilla Slab",
        weights: [500, 600, 700],
        variable: "--font-display",
      },
      body: {
        family: "Source Sans 3",
        weights: [400, 500, 600],
        variable: "--font-body",
      },
      accent: {
        family: "Source Sans 3",
        weights: [400, 600],
        variable: "--font-accent",
      },
    },

    pairing: {
      contrast: "high",
      style: "serif-sans",
      mood: ["bold", "artisan", "organic", "timeless"],
    },

    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@500;600;700&family=Source+Sans+3:wght@400;500;600&display=swap",
  },

  {
    id: "forge-002",
    name: "Prestige Editorial",
    description:
      "Didone contemporain pour les titres, Grotesk étroit pour le corps. Rigueur de la presse magazine haut de gamme transposée au web TPE.",
    targetSectors: [
      "agence immobilière",
      "cabinet juridique",
      "luxe accessible",
      "conseil en image",
    ],

    mood: ["luxury", "editorial", "minimal", "modern"],

    fonts: {
      display: {
        family: "Playfair Display",
        weights: [600, 700, 800],
        variable: "--font-display",
      },
      body: {
        family: "DM Sans",
        weights: [400, 500, 600],
        variable: "--font-body",
      },
      accent: {
        family: "DM Sans",
        weights: [300, 500],
        variable: "--font-accent",
      },
    },

    pairing: {
      contrast: "high",
      style: "serif-sans",
      mood: ["luxury", "editorial", "minimal", "modern"],
    },

    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap",
  },

  {
    id: "forge-003",
    name: "Studio Géométrique",
    description:
      "Geometric sans en display avec une forte personnalité de forme, paired avec un humaniste chaud. Tension productive entre froid et accessible.",
    targetSectors: [
      "agence digitale",
      "studio photo",
      "startup B2B",
      "formation professionnelle",
    ],

    mood: ["energetic", "geometric", "corporate", "flat"],

    fonts: {
      display: {
        family: "Syne",
        weights: [600, 700, 800],
        variable: "--font-display",
      },
      body: {
        family: "Nunito Sans",
        weights: [400, 500, 600],
        variable: "--font-body",
      },
      accent: {
        family: "Nunito Sans",
        weights: [600, 700],
        variable: "--font-accent",
      },
    },

    pairing: {
      contrast: "medium",
      style: "sans-sans",
      mood: ["energetic", "geometric", "corporate", "flat"],
    },

    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Nunito+Sans:wght@400;500;600;700&display=swap",
  },

  {
    id: "forge-004",
    name: "Terroir & Confiance",
    description:
      "Serif doux à empattements arrondis pour les titres, sans-serif neutre et chaleureux pour le corps. Sérieux sans distance, local sans folklorisme.",
    targetSectors: [
      "agriculture raisonnée",
      "épicerie fine",
      "restauration",
      "tourisme local",
    ],

    mood: ["calm", "artisan", "curved", "friendly"],

    fonts: {
      display: {
        family: "Lora",
        weights: [500, 600, 700],
        variable: "--font-display",
      },
      body: {
        family: "Mulish",
        weights: [400, 500, 600],
        variable: "--font-body",
      },
      accent: {
        family: "Mulish",
        weights: [400, 700],
        variable: "--font-accent",
      },
    },

    pairing: {
      contrast: "medium",
      style: "serif-sans",
      mood: ["calm", "artisan", "curved", "friendly"],
    },

    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Lora:wght@500;600;700&family=Mulish:wght@400;500;600;700&display=swap",
  },

  {
    id: "forge-005",
    name: "Signal Technique",
    description:
      "Display condensé à fort impact pour les titres, monospace élégant en accent, sans-serif propre pour le corps. Clarté d'ingénieur, lisibilité maximale.",
    targetSectors: [
      "bureau d'études",
      "électricien",
      "maintenance industrielle",
      "ESN PME",
    ],

    mood: ["technical", "angular", "bold", "clean"],

    fonts: {
      display: {
        family: "Barlow Condensed",
        weights: [600, 700, 800],
        variable: "--font-display",
      },
      body: {
        family: "Inter",
        weights: [400, 500, 600],
        variable: "--font-body",
      },
      accent: {
        family: "JetBrains Mono",
        weights: [400, 500],
        variable: "--font-accent",
      },
    },

    pairing: {
      contrast: "high",
      style: "display-sans",
      mood: ["technical", "angular", "bold", "clean"],
    },

    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
  },
];

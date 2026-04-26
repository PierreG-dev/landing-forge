import type { FontCombo } from "./types";

export const fontCombos: FontCombo[] = [
  {
    id: "forge-001",
    name: "Regal Authority",
    description:
      "Playfair Display s'impose avec noblesse, IBM Plex Sans ancre la lecture dans la clarté moderne. Un duo qui respire la crédibilité institutionnelle.",
    targetSectors: [
      "cabinet conseil",
      "notariat",
      "finance",
      "immobilier haut de gamme",
    ],
    mood: ["luxury", "classic", "editorial", "clean", "timeless", "corporate"],
    fonts: {
      display: {
        family: "Playfair Display",
        weights: [700, 900],
        variable: "--font-display",
      },
      body: {
        family: "IBM Plex Sans",
        weights: [400, 500, 600],
        variable: "--font-body",
      },
      accent: {
        family: "IBM Plex Sans",
        weights: [500, 700],
        variable: "--font-accent",
      },
    },
    pairing: {
      contrast: "high",
      style: "serif-sans",
      mood: [
        "luxury",
        "classic",
        "editorial",
        "clean",
        "timeless",
        "corporate",
      ],
    },
    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap",
  },

  {
    id: "forge-002",
    name: "Craft & Precision",
    description:
      "Cormorant Garamond exhale l'artisanat d'antan, DM Sans lui offre une modernité sans artifice. Le mariage du savoir-faire et de l'efficacité.",
    targetSectors: [
      "artisan créateur",
      "maroquinerie",
      "restauration gastronomique",
      "épicerie fine",
    ],
    mood: ["artisan", "timeless", "organic", "clean", "subtle", "decorated"],
    fonts: {
      display: {
        family: "Cormorant Garamond",
        weights: [600, 700],
        variable: "--font-display",
      },
      body: { family: "DM Sans", weights: [400, 500], variable: "--font-body" },
      accent: {
        family: "Cormorant Garamond",
        weights: [400, 600],
        variable: "--font-accent",
      },
    },
    pairing: {
      contrast: "high",
      style: "serif-sans",
      mood: ["artisan", "timeless", "organic", "clean", "subtle", "decorated"],
    },
    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=DM+Sans:wght@400;500&display=swap",
  },

  {
    id: "forge-003",
    name: "Signal & Structure",
    description:
      "Space Grotesk apporte une énergie tech sans froideur, Inter assure une lisibilité irréprochable. Un duo SaaS qui inspire confiance et modernité.",
    targetSectors: ["SaaS", "tech startup", "agence digitale", "cybersécurité"],
    mood: ["technical", "modern", "geometric", "bold", "flat", "corporate"],
    fonts: {
      display: {
        family: "Space Grotesk",
        weights: [600, 700],
        variable: "--font-display",
      },
      body: {
        family: "Inter",
        weights: [400, 500, 600],
        variable: "--font-body",
      },
      accent: {
        family: "Space Grotesk",
        weights: [500, 700],
        variable: "--font-accent",
      },
    },
    pairing: {
      contrast: "medium",
      style: "sans-sans",
      mood: ["technical", "modern", "geometric", "bold", "flat", "corporate"],
    },
    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap",
  },

  {
    id: "forge-004",
    name: "Warm Authority",
    description:
      "Fraunces saisit l'attention avec ses formes optiques expressives, Nunito Sans crée une chaleur conversationnelle rare dans le corps de texte.",
    targetSectors: ["santé bien-être", "coaching", "RH", "formation"],
    mood: ["friendly", "modern", "organic", "curved", "calm", "timeless"],
    fonts: {
      display: {
        family: "Fraunces",
        weights: [700, 900],
        variable: "--font-display",
      },
      body: {
        family: "Nunito Sans",
        weights: [400, 600],
        variable: "--font-body",
      },
      accent: {
        family: "Nunito Sans",
        weights: [700],
        variable: "--font-accent",
      },
    },
    pairing: {
      contrast: "high",
      style: "serif-sans",
      mood: ["friendly", "modern", "organic", "curved", "calm", "timeless"],
    },
    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700;9..144,900&family=Nunito+Sans:wght@400;600;700&display=swap",
  },

  {
    id: "forge-005",
    name: "The Editorial",
    description:
      "Libre Baskerville pose une autorité journalistique, Source Sans 3 tient la cadence de lecture sans jamais fléchir. La presse de qualité, version web.",
    targetSectors: ["média", "agence de presse", "blog premium", "éditeur"],
    mood: ["editorial", "classic", "layered", "corporate", "calm", "timeless"],
    fonts: {
      display: {
        family: "Libre Baskerville",
        weights: [700],
        variable: "--font-display",
      },
      body: {
        family: "Source Sans 3",
        weights: [400, 600],
        variable: "--font-body",
      },
      accent: {
        family: "Libre Baskerville",
        weights: [400, 700],
        variable: "--font-accent",
      },
    },
    pairing: {
      contrast: "high",
      style: "serif-sans",
      mood: [
        "editorial",
        "classic",
        "layered",
        "corporate",
        "calm",
        "timeless",
      ],
    },
    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Source+Sans+3:wght@400;600&display=swap",
  },

  {
    id: "forge-006",
    name: "Geometric Power",
    description:
      "Outfit donne un souffle contemporain aux titres, Manrope tisse un corps de texte d'une régularité géométrique apaisante. Minimalisme à fort coefficient de confiance.",
    targetSectors: [
      "architecture",
      "design d'intérieur",
      "mobilier premium",
      "promotion immobilière",
    ],
    mood: ["minimal", "modern", "geometric", "clean", "calm", "corporate"],
    fonts: {
      display: {
        family: "Outfit",
        weights: [700, 800],
        variable: "--font-display",
      },
      body: {
        family: "Manrope",
        weights: [400, 500, 600],
        variable: "--font-body",
      },
      accent: {
        family: "Manrope",
        weights: [700, 800],
        variable: "--font-accent",
      },
    },
    pairing: {
      contrast: "low",
      style: "sans-sans",
      mood: ["minimal", "modern", "geometric", "clean", "calm", "corporate"],
    },
    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Outfit:wght@700;800&family=Manrope:wght@400;500;600;700;800&display=swap",
  },

  {
    id: "forge-007",
    name: "Velvet & Steel",
    description:
      "Abril Fatface frappe fort avec ses empattements vertigineux, Lato absorbe le choc avec une souplesse athlétique. Contraste maximum, élégance assurée.",
    targetSectors: ["mode", "beauté", "cosmétiques", "lifestyle premium"],
    mood: ["bold", "luxury", "editorial", "ornate", "typographic", "creative"],
    fonts: {
      display: {
        family: "Abril Fatface",
        weights: [400],
        variable: "--font-display",
      },
      body: {
        family: "Lato",
        weights: [300, 400, 700],
        variable: "--font-body",
      },
      accent: { family: "Lato", weights: [700], variable: "--font-accent" },
    },
    pairing: {
      contrast: "high",
      style: "display-sans",
      mood: [
        "bold",
        "luxury",
        "editorial",
        "ornate",
        "typographic",
        "creative",
      ],
    },
    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Lato:wght@300;400;700&display=swap",
  },

  {
    id: "forge-008",
    name: "Green Roots",
    description:
      "Josefin Sans trace des lignes géométriques et sincères, Karla accompagne en toute discrétion. Un pairing qui sent la sève et l'engagement.",
    targetSectors: [
      "agriculture bio",
      "alimentation responsable",
      "RSE",
      "éco-construction",
    ],
    mood: ["artisan", "calm", "geometric", "clean", "friendly", "modern"],
    fonts: {
      display: {
        family: "Josefin Sans",
        weights: [600, 700],
        variable: "--font-display",
      },
      body: { family: "Karla", weights: [400, 500], variable: "--font-body" },
      accent: { family: "Karla", weights: [700], variable: "--font-accent" },
    },
    pairing: {
      contrast: "medium",
      style: "sans-sans",
      mood: ["artisan", "calm", "geometric", "clean", "friendly", "modern"],
    },
    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@600;700&family=Karla:wght@400;500;700&display=swap",
  },

  {
    id: "forge-009",
    name: "Old Money New Media",
    description:
      "EB Garamond convoque cinq siècles d'autorité typographique, Figtree l'ancre dans le présent avec vivacité. Le prestige qui ne se prend pas trop au sérieux.",
    targetSectors: [
      "cabinet d'avocats",
      "patrimoine",
      "family office",
      "expertise comptable",
    ],
    mood: ["luxury", "classic", "editorial", "subtle", "timeless", "layered"],
    fonts: {
      display: {
        family: "EB Garamond",
        weights: [600, 800],
        variable: "--font-display",
      },
      body: {
        family: "Figtree",
        weights: [400, 500, 600],
        variable: "--font-body",
      },
      accent: {
        family: "EB Garamond",
        weights: [400, 600],
        variable: "--font-accent",
      },
    },
    pairing: {
      contrast: "high",
      style: "serif-sans",
      mood: ["luxury", "classic", "editorial", "subtle", "timeless", "layered"],
    },
    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;600;800&family=Figtree:wght@400;500;600&display=swap",
  },

  {
    id: "forge-010",
    name: "Studio Vivant",
    description:
      "Syne déborde d'une personnalité créative affirmée, Work Sans tient le fond avec rigueur. Le duo des agences créatives qui livrent à l'heure.",
    targetSectors: [
      "agence créative",
      "studio graphique",
      "production vidéo",
      "communication",
    ],
    mood: ["creative", "bold", "modern", "geometric", "energetic", "flat"],
    fonts: {
      display: {
        family: "Syne",
        weights: [700, 800],
        variable: "--font-display",
      },
      body: {
        family: "Work Sans",
        weights: [400, 500, 600],
        variable: "--font-body",
      },
      accent: {
        family: "Syne",
        weights: [600, 800],
        variable: "--font-accent",
      },
    },
    pairing: {
      contrast: "medium",
      style: "sans-sans",
      mood: ["creative", "bold", "modern", "geometric", "energetic", "flat"],
    },
    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Work+Sans:wght@400;500;600&display=swap",
  },

  {
    id: "forge-011",
    name: "Monolith",
    description:
      "Barlow Condensed structure la hiérarchie avec une puissance industrielle, Barlow Regular assure la continuité dans le corps. Un univers cohérent, fort et maîtrisé.",
    targetSectors: ["industrie", "BTP", "logistique", "énergie"],
    mood: ["bold", "technical", "angular", "corporate", "energetic", "flat"],
    fonts: {
      display: {
        family: "Barlow Condensed",
        weights: [700, 800],
        variable: "--font-display",
      },
      body: {
        family: "Barlow",
        weights: [400, 500, 600],
        variable: "--font-body",
      },
      accent: {
        family: "Barlow Condensed",
        weights: [600, 800],
        variable: "--font-accent",
      },
    },
    pairing: {
      contrast: "medium",
      style: "sans-sans",
      mood: ["bold", "technical", "angular", "corporate", "energetic", "flat"],
    },
    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Barlow:wght@400;500;600&display=swap",
  },

  {
    id: "forge-012",
    name: "Quiet Confidence",
    description:
      "Spectral murmure avec une élégance discrète et des graisses subtiles, Plus Jakarta Sans complète sans jamais s'imposer. Pour les marques qui n'ont rien à prouver.",
    targetSectors: [
      "spa",
      "hôtellerie boutique",
      "centres de retraite",
      "médecine esthétique",
    ],
    mood: ["luxury", "calm", "subtle", "organic", "timeless", "minimal"],
    fonts: {
      display: {
        family: "Spectral",
        weights: [600, 700],
        variable: "--font-display",
      },
      body: {
        family: "Plus Jakarta Sans",
        weights: [400, 500],
        variable: "--font-body",
      },
      accent: {
        family: "Spectral",
        weights: [400, 600],
        variable: "--font-accent",
      },
    },
    pairing: {
      contrast: "high",
      style: "serif-sans",
      mood: ["luxury", "calm", "subtle", "organic", "timeless", "minimal"],
    },
    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Spectral:wght@400;600;700&family=Plus+Jakarta+Sans:wght@400;500&display=swap",
  },

  {
    id: "forge-013",
    name: "Hacker Friendly",
    description:
      "Fira Code installe immédiatement le registre technique, Fira Sans assure la transition vers la prose sans rupture d'univers. Pour les produits qui parlent aux développeurs.",
    targetSectors: [
      "DevTools",
      "API-first",
      "infra cloud",
      "open source commercialisé",
    ],
    mood: ["technical", "creative", "minimal", "flat", "modern", "bare"],
    fonts: {
      display: {
        family: "Fira Code",
        weights: [600, 700],
        variable: "--font-display",
      },
      body: {
        family: "Fira Sans",
        weights: [400, 500],
        variable: "--font-body",
      },
      accent: {
        family: "Fira Code",
        weights: [400, 700],
        variable: "--font-accent",
      },
    },
    pairing: {
      contrast: "medium",
      style: "mono-accent",
      mood: ["technical", "creative", "minimal", "flat", "modern", "bare"],
    },
    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600;700&family=Fira+Sans:wght@400;500&display=swap",
  },

  {
    id: "forge-014",
    name: "Warm Commerce",
    description:
      "Raleway apporte une touche de raffinement accessible, Open Sans tisse le filet de sécurité de la lisibilité universelle. Le duo e-commerce qui convertit et fidélise.",
    targetSectors: [
      "e-commerce",
      "retail",
      "marketplace",
      "abonnement consommateur",
    ],
    mood: ["friendly", "modern", "clean", "flat", "calm", "corporate"],
    fonts: {
      display: {
        family: "Raleway",
        weights: [700, 800],
        variable: "--font-display",
      },
      body: {
        family: "Open Sans",
        weights: [400, 600],
        variable: "--font-body",
      },
      accent: {
        family: "Raleway",
        weights: [500, 700],
        variable: "--font-accent",
      },
    },
    pairing: {
      contrast: "medium",
      style: "sans-sans",
      mood: ["friendly", "modern", "clean", "flat", "calm", "corporate"],
    },
    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Raleway:wght@500;700;800&family=Open+Sans:wght@400;600&display=swap",
  },

  {
    id: "forge-015",
    name: "Atelier Couture",
    description:
      "Bodoni Moda déploie ses contrastes de pleins et de déliés avec une grâce absolue, Mulish accompagne sans jamais voler la vedette. Haute couture typographique.",
    targetSectors: [
      "joaillerie",
      "horlogerie",
      "maison de couture",
      "art de la table",
    ],
    mood: ["luxury", "editorial", "ornate", "classic", "bold", "timeless"],
    fonts: {
      display: {
        family: "Bodoni Moda",
        weights: [700, 900],
        variable: "--font-display",
      },
      body: {
        family: "Mulish",
        weights: [300, 400, 600],
        variable: "--font-body",
      },
      accent: {
        family: "Bodoni Moda",
        weights: [400, 700],
        variable: "--font-accent",
      },
    },
    pairing: {
      contrast: "high",
      style: "serif-sans",
      mood: ["luxury", "editorial", "ornate", "classic", "bold", "timeless"],
    },
    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,400;6..96,700;6..96,900&family=Mulish:wght@300;400;600&display=swap",
  },

  {
    id: "forge-016",
    name: "Civic Trust",
    description:
      "Merriweather impose sa solidité de roc, Roboto tient le pavé numérique depuis quinze ans. Un duo institutionnel qui rassure sans endormir.",
    targetSectors: [
      "collectivité",
      "association loi 1901",
      "mutuelle",
      "assurance",
    ],
    mood: ["corporate", "classic", "calm", "angular", "clean", "timeless"],
    fonts: {
      display: {
        family: "Merriweather",
        weights: [700, 900],
        variable: "--font-display",
      },
      body: {
        family: "Roboto",
        weights: [400, 500, 700],
        variable: "--font-body",
      },
      accent: {
        family: "Roboto",
        weights: [500, 700],
        variable: "--font-accent",
      },
    },
    pairing: {
      contrast: "high",
      style: "serif-sans",
      mood: ["corporate", "classic", "calm", "angular", "clean", "timeless"],
    },
    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Merriweather:wght@700;900&family=Roboto:wght@400;500;700&display=swap",
  },

  {
    id: "forge-017",
    name: "Forest Digital",
    description:
      "Unbounded impose ses formes carrées et futuristes, DM Mono assure en mode terminal épuré. Pour les marques tech qui ont une conscience environnementale.",
    targetSectors: [
      "greentech",
      "cleantech",
      "mobilité durable",
      "financement vert",
    ],
    mood: ["technical", "bold", "geometric", "angular", "modern", "energetic"],
    fonts: {
      display: {
        family: "Unbounded",
        weights: [700, 900],
        variable: "--font-display",
      },
      body: { family: "DM Sans", weights: [400, 500], variable: "--font-body" },
      accent: {
        family: "DM Mono",
        weights: [400, 500],
        variable: "--font-accent",
      },
    },
    pairing: {
      contrast: "high",
      style: "display-sans",
      mood: [
        "technical",
        "bold",
        "geometric",
        "angular",
        "modern",
        "energetic",
      ],
    },
    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Unbounded:wght@700;900&family=DM+Sans:wght@400;500&family=DM+Mono:wght@400;500&display=swap",
  },

  {
    id: "forge-018",
    name: "Serif Harmony",
    description:
      "Gilda Display pose une noblesse italienne intemporelle, Crimson Pro file une prose élégante aux corps de texte. Quand le tout-serif est une déclaration d'intention.",
    targetSectors: [
      "éditeur littéraire",
      "académie",
      "fondation culturelle",
      "musée",
    ],
    mood: ["classic", "luxury", "editorial", "decorated", "calm", "timeless"],
    fonts: {
      display: {
        family: "Gilda Display",
        weights: [400],
        variable: "--font-display",
      },
      body: {
        family: "Crimson Pro",
        weights: [400, 600],
        variable: "--font-body",
      },
      accent: {
        family: "Crimson Pro",
        weights: [400, 600],
        variable: "--font-accent",
      },
    },
    pairing: {
      contrast: "low",
      style: "serif-serif",
      mood: ["classic", "luxury", "editorial", "decorated", "calm", "timeless"],
    },
    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Gilda+Display&family=Crimson+Pro:wght@400;600&display=swap",
  },

  {
    id: "forge-019",
    name: "Kinetic Santé",
    description:
      "Lexend Deca est conçu scientifiquement pour réduire la fatigue de lecture, Poppins apporte sa rondeur optimiste en accent. Accessibilité et bienveillance comme fondamentaux.",
    targetSectors: ["paramédical", "orthophonie", "handicap", "pédiatrie"],
    mood: ["friendly", "calm", "curved", "clean", "minimal", "modern"],
    fonts: {
      display: {
        family: "Lexend Deca",
        weights: [600, 700],
        variable: "--font-display",
      },
      body: {
        family: "Lexend Deca",
        weights: [400, 500],
        variable: "--font-body",
      },
      accent: {
        family: "Poppins",
        weights: [500, 700],
        variable: "--font-accent",
      },
    },
    pairing: {
      contrast: "low",
      style: "sans-sans",
      mood: ["friendly", "calm", "curved", "clean", "minimal", "modern"],
    },
    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@400;500;600;700&family=Poppins:wght@500;700&display=swap",
  },

  {
    id: "forge-020",
    name: "Terroir & Expertise",
    description:
      "Playfair Display SC cisèle les petites capitales avec une prestance de domaine viticole, Quattrocento Sans ancre le contenu dans une lisibilité méditerranéenne et chaleureuse.",
    targetSectors: [
      "viticulture",
      "oenotourisme",
      "gastronomie régionale",
      "terroir premium",
    ],
    mood: ["artisan", "classic", "organic", "decorated", "subtle", "timeless"],
    fonts: {
      display: {
        family: "Playfair Display SC",
        weights: [700],
        variable: "--font-display",
      },
      body: {
        family: "Quattrocento Sans",
        weights: [400, 700],
        variable: "--font-body",
      },
      accent: {
        family: "Playfair Display SC",
        weights: [400, 700],
        variable: "--font-accent",
      },
    },
    pairing: {
      contrast: "high",
      style: "serif-sans",
      mood: [
        "artisan",
        "classic",
        "organic",
        "decorated",
        "subtle",
        "timeless",
      ],
    },
    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Playfair+Display+SC:wght@400;700&family=Quattrocento+Sans:wght@400;700&display=swap",
  },
];

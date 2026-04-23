import type { Sector } from '@/config/types'

export const juridique: Sector = {
  id: 'juridique',
  label: 'Avocat / Notaire',
  icons: ['Scale', 'BookOpen', 'Shield'],
  images: {
    hero: [],
    gallery: [],
    about: [],
  },
  corpus: {
    taglines: [
      'Votre droit, défendu avec rigueur à {{city}}',
      'L\'expertise juridique au service de vos intérêts',
      'Conseil, défense, résultats — à {{city}}',
    ],
    descriptions: [
      '{{company}} est un cabinet juridique reconnu à {{city}} pour son expertise et son engagement envers ses clients. Nous mettons notre maîtrise du droit au service de vos projets et de votre défense.',
      'Depuis notre installation à {{city}}, {{company}} accompagne particuliers et entreprises dans toutes leurs démarches juridiques. Écoute, rigueur et résultats concrets sont notre signature.',
    ],
    services: [
      ['Droit des Affaires', 'Droit de la Famille', 'Contentieux Civil'],
      ['Droit Immobilier', 'Droit du Travail', 'Succession & Patrimoine'],
    ],
    stats: [
      [
        { value: '20 ans', label: 'D\'expérience' },
        { value: '1500+', label: 'Dossiers traités' },
        { value: '94%', label: 'Taux de succès' },
      ],
      [
        { value: '48h', label: 'Premier RDV' },
        { value: '4', label: 'Avocats associés' },
        { value: '100%', label: 'Confidentialité' },
      ],
    ],
    testimonials: [
      { name: 'Michel F.', role: 'Chef d\'entreprise', text: '{{company}} gère le droit social de notre PME depuis 5 ans. Réactivité exemplaire, conseils toujours adaptés à notre réalité. Un partenaire de confiance à {{city}}.', rating: 5 },
      { name: 'Sylvie R.', role: 'Cliente', text: 'Divorce difficile géré avec beaucoup d\'humanité et de compétence. J\'ai été défendue et conseillée à chaque étape. Merci pour votre accompagnement.', rating: 5 },
      { name: 'Groupe Batim', role: 'Promoteur immobilier', text: '{{company}} sécurise nos transactions immobilières avec une expertise pointue. Leur rigueur nous a évité plusieurs litiges coûteux.', rating: 5 },
    ],
    faqs: [
      [
        { question: 'Comment se déroule une première consultation ?', answer: 'La première consultation dure 1h. Nous analysons votre situation, exposons vos droits et options, et vous proposons un plan d\'action. Appelez le {{phone}}.' },
        { question: 'Vos honoraires sont-ils prévisibles ?', answer: 'Oui. Nous établissons une convention d\'honoraires claire dès le départ. Forfaits ou taux horaire selon la nature du dossier.' },
        { question: 'Intervenez-vous en urgence ?', answer: 'Oui, pour les gardes à vue, référés ou mesures conservatoires urgentes, notre cabinet est joignable 7j/7 au {{phone}}.' },
      ],
      [
        { question: 'Êtes-vous spécialisé dans un domaine ?', answer: 'Notre cabinet couvre le droit des affaires, de la famille et l\'immobilier. Chaque associé est expert dans son domaine.' },
        { question: 'Travaillez-vous avec des entreprises ?', answer: 'Oui, nous assistons PME, startups et groupes dans leurs contrats, contentieux et restructurations. Contact : {{email}}.' },
        { question: 'La consultation initiale est-elle gratuite ?', answer: 'La première consultation de 30 minutes est offerte pour évaluer votre dossier. Au-delà, nos honoraires sont transparents et convenus à l\'avance.' },
      ],
    ],
    trustItems: [
      [
        { icon: 'Scale', label: 'Barreau de {{city}}', subtitle: 'Avocats inscrits' },
        { icon: 'Shield', label: 'Confidentialité totale', subtitle: 'Secret professionnel' },
        { icon: 'Award', label: '20 ans d\'expertise', subtitle: 'Résultats prouvés' },
      ],
      [
        { icon: 'Clock', label: 'RDV sous 48h', subtitle: 'Urgences traitées' },
        { icon: 'FileText', label: 'Honoraires clairs', subtitle: 'Convention signée' },
        { icon: 'Users', label: '1500+ clients', subtitle: 'Particuliers & Pros' },
      ],
    ],
  },
}

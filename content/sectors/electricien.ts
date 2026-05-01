import type { Sector } from '@/config/types'

export const electricien: Sector = {
  id: 'electricien',
  label: 'Électricien / Dépannage électrique',
  icons: ['Zap', 'Plug', 'ShieldCheck'],
  images: {
    hero: [],
    gallery: [],
    about: [],
  },
  corpus: {
    taglines: [
      'L\'électricien de confiance à {{city}} — réactif, certifié, garanti',
      'Votre installation électrique entre de bonnes mains à {{city}}',
      'Dépannage, mise aux normes, domotique — {{company}} intervient vite',
    ],
    descriptions: [
      '{{company}} est votre électricien agréé à {{city}}. Dépannage d\'urgence, mise aux normes NF C 15-100, installation de tableaux électriques ou projets domotiques : nous intervenons avec rapidité et rigueur, avec une garantie sur tous nos travaux.',
      'Depuis plusieurs années, {{company}} accompagne les particuliers et professionnels de {{city}} pour tous leurs besoins en électricité. Habilitation électrique, assurance RC pro, devis gratuit — la qualité et la sécurité au cœur de chaque intervention.',
    ],
    services: [
      ['Mise aux normes NF C 15-100', 'Tableau électrique & disjoncteurs', 'Domotique & éclairage connecté'],
      ['Dépannage électrique urgent', 'Installation complète neuf & rénovation', 'Prises, interrupteurs & câblage'],
    ],
    stats: [
      [
        { value: '8 ans', label: 'D\'expérience' },
        { value: '1 200+', label: 'Interventions réalisées' },
        { value: '4.9/5', label: 'Satisfaction client' },
      ],
      [
        { value: '2h', label: 'Délai d\'intervention' },
        { value: '100%', label: 'Habilités électriques' },
        { value: '20km', label: 'Rayon d\'intervention' },
      ],
    ],
    testimonials: [
      { name: 'Thomas R.', role: 'Propriétaire', text: '{{company}} est intervenu le jour même pour un court-circuit. Travail soigné, tarif clair, aucune mauvaise surprise. Je recommande à tous les habitants de {{city}}.', rating: 5 },
      { name: 'Isabelle M.', role: 'Cliente', text: 'Mise aux normes complète de notre maison réalisée en 2 jours. Équipe sérieuse, proprette et très professionnelle. Merci {{company}} !', rating: 5 },
      { name: 'Julien F.', text: 'Devis précis, installation domotique impeccable. Enfin un électricien fiable sur {{city}} qui respecte ses engagements.', rating: 5 },
    ],
    faqs: [
      [
        { question: 'Intervenez-vous en urgence sur {{city}} ?', answer: 'Oui, {{company}} propose un service de dépannage rapide. Appelez le {{phone}} — nous intervenons en général sous 2 heures.' },
        { question: 'Réalisez-vous des devis gratuits ?', answer: 'Oui, tous nos devis sont gratuits et sans engagement. Contactez-nous au {{phone}} ou par email à {{email}}.' },
        { question: 'Êtes-vous certifiés pour les mises aux normes ?', answer: 'Oui, {{company}} est habilité électriquement et réalise toutes les mises aux normes NF C 15-100 avec attestation Consuel.' },
      ],
      [
        { question: 'Quels types de travaux prenez-vous en charge ?', answer: 'Dépannage, tableau électrique, mise aux normes, domotique, installation neuve ou rénovation — nous couvrons l\'ensemble des prestations électriques.' },
        { question: 'Proposez-vous la domotique ?', answer: 'Oui, nous installons des systèmes domotiques (éclairage connecté, volets, alarmes) adaptés à votre budget et votre logement.' },
        { question: 'Votre travail est-il garanti ?', answer: 'Tous nos travaux sont couverts par notre assurance responsabilité civile professionnelle. Nous fournissons une attestation à la fin de chaque chantier.' },
      ],
    ],
    trustItems: [
      [
        { icon: 'ShieldCheck', label: 'Habilitation électrique', subtitle: 'Certifié & assuré' },
        { icon: 'FileCheck', label: 'Attestation Consuel', subtitle: 'Mise aux normes officielle' },
        { icon: 'Clock', label: 'Intervention rapide', subtitle: 'Sous 2 heures' },
      ],
      [
        { icon: 'Award', label: 'RC Pro', subtitle: 'Assurance professionnelle' },
        { icon: 'FileText', label: 'Devis gratuit', subtitle: 'Sans engagement' },
        { icon: 'ThumbsUp', label: '4.9/5 clients', subtitle: 'Satisfaction garantie' },
      ],
    ],
  },
}

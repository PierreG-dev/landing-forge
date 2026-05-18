import type { Sector } from '@/config/types'

export const garage: Sector = {
  id: 'garage',
  label: 'Garage / Réparation auto',
  icons: ['Car', 'Wrench', 'Settings'],
  images: {
    hero: [],
    gallery: [],
    about: [],
  },
  corpus: {
    taglines: [
      'Votre garage de confiance à {{city}} — entretien, réparation, diagnostic',
      '{{company}} : techniciens agréés pour tous véhicules à {{city}}',
      'Révision, freinage, carrosserie — tout pour votre voiture à {{city}}',
    ],
    descriptions: [
      '{{company}} est votre garage automobile de proximité à {{city}}. Révision, remplacement de pneus, freinage, diagnostic électronique ou carrosserie : nos techniciens agréés prennent en charge tous types de véhicules avec sérieux et transparence.',
      'Installé à {{city}}, {{company}} accompagne les automobilistes avec des prestations complètes d\'entretien et de réparation. Devis gratuit, pièces d\'origine, délais respectés — votre voiture est entre de bonnes mains.',
    ],
    services: [
      ['Révision & entretien courant', 'Freinage & pneumatiques', 'Diagnostic électronique'],
      ['Carrosserie & peinture', 'Contrôle technique préparatoire', 'Climatisation & vidange'],
    ],
    stats: [
      [
        { value: '15 ans', label: 'D\'expérience' },
        { value: '5 000+', label: 'Véhicules entretenus' },
        { value: '4.8/5', label: 'Satisfaction client' },
      ],
      [
        { value: '24h', label: 'Délai moyen de réparation' },
        { value: '100%', label: 'Pièces certifiées' },
        { value: 'Agréé', label: 'Toutes assurances' },
      ],
    ],
    testimonials: [
      { name: 'Cédric M.', role: 'Client fidèle', text: '{{company}} entretient mes voitures depuis des années. Toujours honnêtes sur les réparations nécessaires, prix justes et travail impeccable. Le meilleur garage de {{city}} !', rating: 5 },
      { name: 'Aurélie T.', role: 'Cliente', text: 'Prise en charge rapide après une panne, voiture rendue le lendemain. Devis clair, aucune mauvaise surprise. Je ne vais plus chez personne d\'autre à {{city}}.', rating: 5 },
      { name: 'Bruno S.', text: 'Carrosserie refaite après un accrochage. Résultat parfait, vous ne devinez plus rien. Équipe sympathique et professionnelle. Merci {{company}} !', rating: 5 },
    ],
    faqs: [
      [
        { question: 'Acceptez-vous tous types de véhicules ?', answer: 'Oui, {{company}} prend en charge les véhicules particuliers, utilitaires et 4x4 de toutes marques. Appelez le {{phone}} pour vérifier votre modèle.' },
        { question: 'Proposez-vous des devis gratuits ?', answer: 'Oui, tous nos diagnostics et devis sont gratuits et sans engagement. Contactez-nous au {{phone}} ou à {{email}}.' },
        { question: 'Êtes-vous agréés par les assurances ?', answer: 'Oui, {{company}} est agréé par l\'ensemble des compagnies d\'assurance pour les réparations suite à sinistre.' },
      ],
      [
        { question: 'Proposez-vous un véhicule de remplacement ?', answer: 'Oui, sous réserve de disponibilité, nous pouvons mettre à disposition un véhicule de courtoisie pendant la durée des travaux. Renseignez-vous au {{phone}}.' },
        { question: 'Utilisez-vous des pièces d\'origine ?', answer: 'Nous utilisons des pièces d\'origine ou équivalentes certifiées, adaptées à chaque véhicule et garanties.' },
        { question: 'Préparez-vous au contrôle technique ?', answer: 'Oui, nous réalisons une inspection complète avant contrôle technique et effectuons les réparations nécessaires pour vous garantir le passage.' },
      ],
    ],
    trustItems: [
      [
        { icon: 'ShieldCheck', label: 'Agréé toutes assurances', subtitle: 'Prise en charge directe' },
        { icon: 'Award', label: 'Techniciens certifiés', subtitle: 'Formation constructeurs' },
        { icon: 'FileText', label: 'Devis gratuit', subtitle: 'Transparent & détaillé' },
      ],
      [
        { icon: 'Clock', label: 'Délai 24h', subtitle: 'Réparations courantes' },
        { icon: 'Car', label: 'Véhicule de remplacement', subtitle: 'Sur demande' },
        { icon: 'ThumbsUp', label: '4.8/5 clients', subtitle: 'Satisfaction garantie' },
      ],
    ],
  },
  blockConfig: {
    mandatory: ['services', 'trust'],
    preferred: ['stats', 'testimonials'],
    excluded: ['gallery'],
    optionalCount: [2, 4],
  },
}

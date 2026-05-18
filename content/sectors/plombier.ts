import type { Sector } from '@/config/types'

export const plombier: Sector = {
  id: 'plombier',
  label: 'Plombier / Chauffagiste',
  icons: ['Droplets', 'Wrench', 'Thermometer'],
  images: {
    hero: [],
    gallery: [],
    about: [],
  },
  corpus: {
    taglines: [
      'Plombier & chauffagiste à {{city}} — urgences, rénovation, chauffage',
      '{{company}} : votre plombier de confiance à {{city}}, disponible 7j/7',
      'Fuite, chauffe-eau, salle de bain — on s\'en occupe à {{city}}',
    ],
    descriptions: [
      '{{company}} intervient à {{city}} et ses alentours pour tous vos travaux de plomberie et chauffage. Dépannage d\'urgence, installation de chauffe-eau, rénovation de salle de bain ou mise en place d\'un système de chauffage : nous répondons présent avec le sérieux d\'un artisan qualifié.',
      'Artisan plombier-chauffagiste installé à {{city}}, {{company}} accompagne particuliers et professionnels de la détection de fuite jusqu\'à la rénovation complète. Devis gratuit, délais respectés, garantie décennale sur tous les travaux.',
    ],
    services: [
      ['Dépannage fuite & urgence', 'Rénovation salle de bain', 'Chauffe-eau & ballon thermodynamique'],
      ['Chauffage central & radiateurs', 'Plomberie neuve & rénovation', 'Débouchage & assainissement'],
    ],
    stats: [
      [
        { value: '12 ans', label: 'D\'expérience' },
        { value: '900+', label: 'Interventions réalisées' },
        { value: '4.8/5', label: 'Satisfaction client' },
      ],
      [
        { value: '24h/7j', label: 'Disponible pour urgences' },
        { value: '48h', label: 'Délai devis travaux' },
        { value: '25km', label: 'Zone d\'intervention' },
      ],
    ],
    testimonials: [
      { name: 'Marc D.', role: 'Propriétaire', text: '{{company}} est venu en urgence pour une fuite importante. Intervention rapide, problème réglé en 1h. Équipe professionnelle et rassurante. Bravo !', rating: 5 },
      { name: 'Sophie L.', role: 'Cliente', text: 'Rénovation complète de notre salle de bain en 4 jours. Résultat magnifique, délais tenus, équipe discrète et propre. Je recommande sans hésiter à {{city}}.', rating: 5 },
      { name: 'Patrick V.', text: 'Remplacement de notre chaudière réalisé proprement et rapidement. Devis clair, pas de surprise sur la facture. Merci {{company}} !', rating: 5 },
    ],
    faqs: [
      [
        { question: 'Intervenez-vous en urgence pour les fuites ?', answer: 'Oui, {{company}} est disponible 24h/24 et 7j/7 pour les urgences plomberie. Appelez le {{phone}} — nous intervenons le plus rapidement possible.' },
        { question: 'Proposez-vous des devis gratuits ?', answer: 'Oui, tous nos devis sont gratuits et sans engagement. Contactez-nous au {{phone}} ou à {{email}} pour programmer une visite.' },
        { question: 'Êtes-vous couverts pour les gros travaux ?', answer: 'Oui, {{company}} dispose d\'une assurance décennale et responsabilité civile professionnelle couvrant l\'ensemble de nos prestations.' },
      ],
      [
        { question: 'Quelle zone géographique couvrez-vous ?', answer: 'Nous intervenons à {{city}} et dans un rayon de 25 km. Appelez le {{phone}} pour vérifier votre commune.' },
        { question: 'Installez-vous des chauffe-eaux thermodynamiques ?', answer: 'Oui, nous installons et entretenons tous types de chauffe-eaux (électrique, gaz, thermodynamique, solaire) selon votre configuration.' },
        { question: 'Prenez-vous en charge la rénovation de salle de bain ?', answer: 'Oui, de la plomberie au carrelage, nous gérons la rénovation complète ou partielle de votre salle de bain.' },
      ],
    ],
    trustItems: [
      [
        { icon: 'ShieldCheck', label: 'Assurance décennale', subtitle: 'Garantie 10 ans' },
        { icon: 'Clock', label: 'Urgence 24h/7j', subtitle: 'Toujours disponible' },
        { icon: 'Award', label: 'Qualibat certifié', subtitle: 'Artisan qualifié' },
      ],
      [
        { icon: 'FileText', label: 'Devis gratuit', subtitle: 'Sous 48h' },
        { icon: 'Leaf', label: 'Label RGE', subtitle: 'Travaux éco-efficaces' },
        { icon: 'ThumbsUp', label: '4.8/5 clients', subtitle: 'Satisfaction garantie' },
      ],
    ],
  },
  blockConfig: {
    mandatory: ['services', 'trust'],
    preferred: ['faq', 'stats'],
    excluded: ['gallery'],
    optionalCount: [2, 4],
  },
}

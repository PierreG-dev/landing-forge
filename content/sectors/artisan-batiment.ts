import type { Sector } from '@/config/types'

export const artisanBatiment: Sector = {
  id: 'artisan-batiment',
  label: 'Artisan BTP / Rénovation',
  icons: ['Hammer', 'HardHat', 'Wrench'],
  images: {
    hero: [],
    gallery: [],
    about: [],
  },
  corpus: {
    taglines: [
      'Votre rénovation, notre fierté — à {{city}} et alentours',
      'L\'artisan de confiance qui transforme votre habitat',
      'Devis gratuit, travaux soignés, délais tenus',
    ],
    descriptions: [
      '{{company}} intervient sur {{city}} et sa région pour tous vos travaux de rénovation, maçonnerie et second œuvre. Artisan qualifié, assuré décennale, nous respectons vos délais et votre budget.',
      'Spécialiste des travaux de rénovation depuis plus de 10 ans à {{city}}, {{company}} accompagne particuliers et professionnels de la conception au chantier fini, avec le sérieux d\'un artisan passionné.',
    ],
    services: [
      ['Maçonnerie & Gros Œuvre', 'Rénovation Intérieure', 'Isolation & Façades'],
      ['Rénovation Complète', 'Extension & Surélévation', 'Carrelage & Revêtements'],
    ],
    stats: [
      [
        { value: '10 ans', label: 'D\'expérience' },
        { value: '350+', label: 'Chantiers réalisés' },
        { value: '100%', label: 'Assurés décennale' },
      ],
      [
        { value: '48h', label: 'Délai devis' },
        { value: '4.9/5', label: 'Satisfaction client' },
        { value: '30km', label: 'Rayon d\'intervention' },
      ],
    ],
    testimonials: [
      { name: 'Laurent B.', role: 'Propriétaire', text: '{{company}} a rénové entièrement notre salle de bain en 8 jours. Travail impeccable, équipe propre et sérieuse. Je recommande sans hésiter à tous les habitants de {{city}}.', rating: 5 },
      { name: 'Nathalie P.', role: 'Cliente', text: 'Devis précis, délais respectés, finitions parfaites. Ça fait du bien de trouver un artisan fiable sur {{city}}. Merci à toute l\'équipe !', rating: 5 },
      { name: 'Christophe V.', text: 'Rénovation complète de notre appartement en 3 semaines. Résultat au-delà de nos espérances. Professionnalisme du début à la fin.', rating: 5 },
    ],
    faqs: [
      [
        { question: 'Intervenez-vous uniquement sur {{city}} ?', answer: 'Nous couvrons {{city}} et un rayon de 30 km. Contactez-nous au {{phone}} pour vérifier votre zone.' },
        { question: 'Proposez-vous des devis gratuits ?', answer: 'Oui, tous nos devis sont gratuits et sans engagement. Réponse sous 48h. Appelez le {{phone}} ou écrivez à {{email}}.' },
        { question: 'Êtes-vous assurés pour les gros travaux ?', answer: 'Oui, {{company}} dispose d\'une assurance décennale et responsabilité civile professionnelle couvrant tous nos chantiers.' },
      ],
      [
        { question: 'Quels travaux prenez-vous en charge ?', answer: 'Maçonnerie, rénovation intérieure, isolation, carrelage, peinture — nous gérons l\'ensemble du chantier.' },
        { question: 'Pouvez-vous aider aux démarches administratives ?', answer: 'Oui, nous vous accompagnons pour les demandes de permis de construire et déclarations préalables.' },
        { question: 'Quels labels possédez-vous ?', answer: 'Nous sommes qualifiés RGE pour les travaux d\'isolation et certifiés Qualibat pour l\'ensemble de nos prestations.' },
      ],
    ],
    trustItems: [
      [
        { icon: 'ShieldCheck', label: 'Assurance décennale', subtitle: 'Garantie 10 ans' },
        { icon: 'Award', label: 'Qualibat certifié', subtitle: 'Artisan qualifié' },
        { icon: 'Leaf', label: 'Label RGE', subtitle: 'Travaux éco-efficaces' },
      ],
      [
        { icon: 'Clock', label: 'Délais tenus', subtitle: 'Contractuellement' },
        { icon: 'FileText', label: 'Devis détaillé', subtitle: 'Gratuit sous 48h' },
        { icon: 'ThumbsUp', label: '4.9/5 clients', subtitle: 'Satisfaction garantie' },
      ],
    ],
  },
}

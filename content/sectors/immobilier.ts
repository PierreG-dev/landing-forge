import type { Sector } from '@/config/types'

export const immobilier: Sector = {
  id: 'immobilier',
  label: 'Agence immobilière',
  icons: ['Home', 'Key', 'Building'],
  images: {
    hero: [],
    gallery: [],
    about: [],
  },
  corpus: {
    taglines: [
      'Votre projet immobilier réalisé à {{city}}',
      'Acheter, vendre, louer — {{company}} vous guide',
      'L\'agence qui connaît {{city}} mieux que personne',
    ],
    descriptions: [
      '{{company}} est l\'agence immobilière de référence à {{city}}. Forts d\'une connaissance approfondie du marché local, nos conseillers vous accompagnent dans chaque étape de votre projet, de la recherche à la signature.',
      'Implantée à {{city}} depuis plus de 12 ans, {{company}} vous propose un accompagnement personnalisé pour acheter, vendre ou louer votre bien. Réactivité, transparence et résultats : voilà notre promesse.',
    ],
    services: [
      ['Vente Immobilière', 'Location & Gestion', 'Estimation Gratuite'],
      ['Achat Accompagné', 'Immobilier Neuf', 'Investissement Locatif'],
    ],
    stats: [
      [
        { value: '12 ans', label: 'Sur le marché de {{city}}' },
        { value: '850+', label: 'Biens vendus' },
        { value: '28j', label: 'Délai moyen vente' },
      ],
      [
        { value: '98%', label: 'Prix vendus au tarif' },
        { value: '4.8/5', label: 'Satisfaction client' },
        { value: '150+', label: 'Biens en gestion' },
      ],
    ],
    testimonials: [
      { name: 'Julien & Sara M.', role: 'Acheteurs', text: '{{company}} nous a trouvé notre appartement de rêve à {{city}} en 3 semaines. Écoute parfaite de nos critères, accompagnement jusqu\'à la remise des clés. Merci !', rating: 5 },
      { name: 'Patricia L.', role: 'Vendeuse', text: 'Mon appartement vendu en 18 jours au prix demandé. L\'agence connaît vraiment son marché. Suivi régulier et communication transparente.', rating: 5 },
      { name: 'Investisseurs Nord', role: 'SCI', text: '{{company}} gère notre parc de 8 appartements à {{city}} depuis 4 ans. Zéro vacance locative, locataires sélectionnés avec soin. Partenaire de choix.', rating: 5 },
    ],
    faqs: [
      [
        { question: 'L\'estimation de mon bien est-elle gratuite ?', answer: 'Oui, l\'estimation est entièrement gratuite et sans engagement. Contactez-nous au {{phone}} pour planifier une visite.' },
        { question: 'Quels sont vos honoraires de vente ?', answer: 'Nos honoraires sont transparents et affichés obligatoirement. Nous vous les présentons dès le premier rendez-vous. Écrivez à {{email}}.' },
        { question: 'Couvrez-vous tout le département ?', answer: '{{company}} est spécialisé sur {{city}} et les communes environnantes. Notre connaissance locale est notre plus grand atout.' },
      ],
      [
        { question: 'Comment se passe la gestion locative ?', answer: 'Nous prenons en charge tout : sélection locataires, état des lieux, quittances, révision de loyer, déclarations fiscales si souhaité.' },
        { question: 'Travaillez-vous avec les primo-accédants ?', answer: 'Oui, nous accompagnons les primo-accédants avec un suivi dédié : simulation de prêt, PTZ, dispositifs d\'aide à l\'achat.' },
        { question: 'Combien de temps dure une transaction en moyenne ?', answer: 'De la signature du compromis à l\'acte authentique : environ 3 mois. Nous vous tenons informés à chaque étape.' },
      ],
    ],
    trustItems: [
      [
        { icon: 'Award', label: 'Carte professionnelle', subtitle: 'Agence certifiée' },
        { icon: 'Shield', label: 'Garantie financière', subtitle: 'Fonds sécurisés' },
        { icon: 'Home', label: '850+ ventes', subtitle: 'Depuis 12 ans' },
      ],
      [
        { icon: 'Star', label: '4.8/5 clients', subtitle: '400+ avis vérifiés' },
        { icon: 'Clock', label: '28j délai moyen', subtitle: 'Vente rapide' },
        { icon: 'Key', label: 'Estimation gratuite', subtitle: 'Sans engagement' },
      ],
    ],
  },
}

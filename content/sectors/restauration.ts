import type { Sector } from '@/config/types'

export const restauration: Sector = {
  id: 'restauration',
  label: 'Restaurant / Traiteur',
  icons: ['UtensilsCrossed', 'ChefHat', 'Star'],
  images: {
    hero: [],
    gallery: [],
    about: [],
  },
  corpus: {
    taglines: [
      'La cuisine qui fait parler de {{city}}',
      'Saveurs authentiques au cœur de {{city}}',
      'L\'art de recevoir, la passion de cuisiner',
    ],
    descriptions: [
      '{{company}} vous accueille dans une atmosphère chaleureuse au cœur de {{city}}. Chaque plat est préparé avec des produits frais sélectionnés chaque matin chez nos producteurs locaux.',
      'Depuis notre ouverture, {{company}} s\'est imposé comme l\'adresse incontournable de {{city}} pour savourer une cuisine du marché généreuse et sincère, dans un cadre convivial.',
    ],
    services: [
      ['Déjeuner & Dîner', 'Brunch du Dimanche', 'Privatisation'],
      ['Restaurant Gastronomique', 'Traiteur Événementiel', 'Cours de Cuisine'],
    ],
    stats: [
      [
        { value: '12 ans', label: 'D\'expérience' },
        { value: '4.8/5', label: 'Note Google' },
        { value: '200+', label: 'Couverts / semaine' },
      ],
      [
        { value: '100%', label: 'Produits locaux' },
        { value: '15', label: 'Tables' },
        { value: '500+', label: 'Avis positifs' },
      ],
    ],
    testimonials: [
      { name: 'Marie L.', role: 'Cliente régulière', text: 'Une table exceptionnelle à {{city}}. La cuisine est inventive sans être prétentieuse, le service attentionné. Je recommande les yeux fermés.', rating: 5 },
      { name: 'Thomas R.', role: 'Événement d\'entreprise', text: '{{company}} a géré notre dîner de 50 personnes avec une maîtrise parfaite. Les retours de nos équipes ont été unanimement enthousiastes.', rating: 5 },
      { name: 'Sophie M.', text: 'Le brunch du dimanche est un moment suspendu. Produits de qualité, ambiance apaisante, équipe adorable. On y revient sans hésiter.', rating: 5 },
    ],
    faqs: [
      [
        { question: 'Faut-il réserver à l\'avance ?', answer: 'Oui, nous recommandons de réserver surtout le week-end. Appelez le {{phone}} ou écrivez à {{email}}.' },
        { question: 'Proposez-vous des menus végétariens ?', answer: 'Absolument. Notre carte évolue chaque semaine et propose systématiquement des options végétariennes et véganes.' },
        { question: 'Organisez-vous des événements privés ?', answer: 'Oui, notre salle peut être privatisée jusqu\'à 80 personnes. Contactez-nous pour un devis personnalisé.' },
      ],
      [
        { question: 'Livrez-vous à domicile ?', answer: 'Nous livrons sur {{city}} et les communes proches. Commandez via notre formulaire ou appelez le {{phone}}.' },
        { question: 'Quels sont vos horaires ?', answer: 'Nous sommes ouverts du mardi au dimanche. Déjeuner de 12h à 14h30, dîner de 19h à 22h30.' },
        { question: 'Acceptez-vous les chèques cadeaux ?', answer: 'Oui, nous acceptons les chèques cadeaux Cadhoc, Chèque Déjeuner et nos propres bons cadeaux.' },
      ],
    ],
    trustItems: [
      [
        { icon: 'Award', label: 'Maître Restaurateur', subtitle: 'Label officiel qualité' },
        { icon: 'Leaf', label: 'Produits locaux', subtitle: 'Circuit court garanti' },
        { icon: 'Clock', label: 'Ouvert 7j/7', subtitle: 'Midi et soir' },
      ],
      [
        { icon: 'Star', label: '4.8 sur Google', subtitle: '200+ avis vérifiés' },
        { icon: 'Users', label: 'Privatisation', subtitle: 'Jusqu\'à 80 personnes' },
        { icon: 'Truck', label: 'Livraison', subtitle: 'Sur {{city}} et alentours' },
      ],
    ],
  },
}

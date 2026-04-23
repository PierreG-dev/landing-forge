import type { Sector } from '@/config/types'

export const beaute: Sector = {
  id: 'beaute',
  label: 'Coiffure / Esthétique',
  icons: ['Scissors', 'Sparkles', 'Heart'],
  images: {
    hero: [],
    gallery: [],
    about: [],
  },
  corpus: {
    taglines: [
      'Révélez votre beauté naturelle à {{city}}',
      'Le salon qui prend soin de vous, vraiment',
      'Expertise & douceur au cœur de {{city}}',
    ],
    descriptions: [
      '{{company}} est un salon de beauté installé à {{city}} où chaque cliente est reçue comme une invitée. Coiffure, soins du visage, manucure — notre équipe passionnée met son expertise à votre service.',
      'Chez {{company}}, nous croyons que se sentir bien dans sa peau commence par être bien entouré. À {{city}}, notre salon vous offre un moment de détente et de transformation dans un cadre chaleureux.',
    ],
    services: [
      ['Coiffure & Couleur', 'Soins Visage', 'Manucure & Pédicure'],
      ['Coupe & Brushing', 'Épilation & Sourcils', 'Maquillage Événement'],
    ],
    stats: [
      [
        { value: '8 ans', label: 'D\'expérience' },
        { value: '1200+', label: 'Clientes fidèles' },
        { value: '4.9/5', label: 'Note Google' },
      ],
      [
        { value: '100%', label: 'Produits premium' },
        { value: '6', label: 'Expertes beauté' },
        { value: '0', label: 'Compromis qualité' },
      ],
    ],
    testimonials: [
      { name: 'Isabelle M.', role: 'Cliente depuis 5 ans', text: 'Je viens chez {{company}} depuis l\'ouverture. L\'équipe est aux petits soins, les résultats toujours parfaits. L\'adresse beauté de {{city}} sans hésitation.', rating: 5 },
      { name: 'Emma D.', role: 'Cliente', text: 'Couleur superbe, tenue impeccable. J\'ai enfin trouvé le salon qui comprend ce que je veux sans que j\'aie à tout expliquer vingt fois. Merci !', rating: 5 },
      { name: 'Clara V.', text: 'Maquillage de mariée réalisé par {{company}}. Résultat splendide, tenu toute la journée. Professionnalisme et bienveillance au rendez-vous.', rating: 5 },
    ],
    faqs: [
      [
        { question: 'Faut-il prendre rendez-vous ?', answer: 'Oui, nous travaillons sur rendez-vous. Appelez le {{phone}} ou réservez en ligne via notre formulaire.' },
        { question: 'Utilisez-vous des produits sans ammoniaque ?', answer: 'Oui, nous proposons des colorations douces et des soins naturels respectueux de vos cheveux et de votre santé.' },
        { question: 'Faites-vous du maquillage pour les mariages ?', answer: 'Absolument ! Nous proposons des prestations beauté complètes pour les mariées et leurs témoins sur {{city}} et environs.' },
      ],
      [
        { question: 'Quels sont vos tarifs ?', answer: 'Nos tarifs commencent à partir de 35€ pour une coupe femme. Contactez-nous au {{phone}} pour un devis personnalisé.' },
        { question: 'Acceptez-vous les chèques cadeaux ?', answer: 'Oui, nous proposons nos propres cartes cadeaux et acceptons les chèques cadeaux multi-enseignes.' },
        { question: 'Êtes-vous ouverts le samedi ?', answer: 'Oui, nous sommes ouverts du mardi au samedi de 9h à 19h, et sur rendez-vous le dimanche pour les événements.' },
      ],
    ],
    trustItems: [
      [
        { icon: 'Award', label: 'Certifiées L\'Oréal', subtitle: 'Formation continue' },
        { icon: 'Leaf', label: 'Produits naturels', subtitle: 'Sans sulfate ni paraben' },
        { icon: 'Heart', label: 'Bienveillance', subtitle: 'Accueil personnalisé' },
      ],
      [
        { icon: 'Star', label: '4.9/5 clientes', subtitle: '300+ avis Google' },
        { icon: 'Sparkles', label: 'Couleurs express', subtitle: 'Résultat durable' },
        { icon: 'Clock', label: 'Horaires flexibles', subtitle: 'Mardi–Samedi' },
      ],
    ],
  },
}

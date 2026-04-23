import type { Sector } from '@/config/types'

export const sportCoaching: Sector = {
  id: 'sport-coaching',
  label: 'Salle de sport / Coach',
  icons: ['Dumbbell', 'Zap', 'Trophy'],
  images: {
    hero: [],
    gallery: [],
    about: [],
  },
  corpus: {
    taglines: [
      'Dépassez vos limites avec {{company}} à {{city}}',
      'Le coaching qui transforme, pas juste qui entraîne',
      'Votre meilleure forme à {{city}} — on s\'en charge',
    ],
    descriptions: [
      '{{company}} est votre partenaire sportif à {{city}}. Salle équipée dernière génération, coachs diplômés d\'État, programmes personnalisés — tout est réuni pour vous aider à atteindre vos objectifs, quelle que soit votre condition initiale.',
      'Chez {{company}}, à {{city}}, on croit que chacun mérite un accompagnement sur mesure. Nos coachs certifiés créent des programmes adaptés à votre corps, vos contraintes et vos ambitions. Résultats garantis en 3 mois.',
    ],
    services: [
      ['Coaching Individuel', 'Cours Collectifs', 'Bilan Forme Offert'],
      ['Musculation & Cardio', 'Nutrition Sportive', 'Préparation Physique'],
    ],
    stats: [
      [
        { value: '500+', label: 'Membres actifs' },
        { value: '8', label: 'Coachs diplômés' },
        { value: '93%', label: 'Objectifs atteints' },
      ],
      [
        { value: '3 mois', label: 'Pour des résultats' },
        { value: '4.9/5', label: 'Satisfaction membres' },
        { value: '7j/7', label: 'Accès salle' },
      ],
    ],
    testimonials: [
      { name: 'Antoine R.', role: 'Membre depuis 2 ans', text: 'J\'ai perdu 18kg en 6 mois avec {{company}}. Le suivi personnalisé fait toute la différence. Les coachs sont au top, la salle impeccable. Fier d\'être membre à {{city}} !', rating: 5 },
      { name: 'Camille T.', role: 'Coachée', text: 'Programme adapté à ma récupération post-op. Résultats bluffants en 3 mois. L\'équipe de {{company}} est bienveillante et très professionnelle.', rating: 5 },
      { name: 'Marc D.', text: 'Meilleure salle de sport de {{city}}. Équipements modernes, cours variés, coachs disponibles. Je recommande à tous ceux qui veulent vraiment progresser.', rating: 5 },
    ],
    faqs: [
      [
        { question: 'Je suis débutant, puis-je venir ?', answer: 'Absolument ! Nous accueillons tous les niveaux. Un bilan forme offert est prévu à votre arrivée pour créer votre programme. Appelez le {{phone}}.' },
        { question: 'Y a-t-il un engagement minimum ?', answer: 'Non, nous proposons des abonnements sans engagement mensuel ainsi que des formules trimestrielles et annuelles avec des tarifs préférentiels.' },
        { question: 'Les coachs sont-ils diplômés d\'État ?', answer: 'Oui, tous nos coachs sont titulaires d\'un BPJEPS ou d\'un Master STAPS. Votre sécurité et votre progression sont notre priorité.' },
      ],
      [
        { question: 'La salle est-elle ouverte le week-end ?', answer: 'Oui, 7j/7 de 6h à 23h. Certains cours collectifs ont lieu le samedi matin et dimanche après-midi.' },
        { question: 'Proposez-vous un suivi nutritionnel ?', answer: 'Oui, nos coachs peuvent établir un plan alimentaire adapté à vos objectifs sportifs, en complément de votre programme d\'entraînement.' },
        { question: 'Comment réserver une séance de coaching ?', answer: 'Via notre app, au {{phone}} ou à {{email}}. Les créneaux sont visibles en temps réel et confirmés par SMS.' },
      ],
    ],
    trustItems: [
      [
        { icon: 'Award', label: 'Coachs certifiés', subtitle: 'BPJEPS & Master STAPS' },
        { icon: 'Dumbbell', label: 'Équipement premium', subtitle: 'Renouvelé 2023' },
        { icon: 'Zap', label: 'Résultats en 3 mois', subtitle: 'Garanti ou remboursé' },
      ],
      [
        { icon: 'Clock', label: 'Ouvert 7j/7', subtitle: '6h – 23h' },
        { icon: 'Users', label: '500+ membres', subtitle: 'Communauté active' },
        { icon: 'Star', label: '4.9/5', subtitle: '350+ avis Google' },
      ],
    ],
  },
}

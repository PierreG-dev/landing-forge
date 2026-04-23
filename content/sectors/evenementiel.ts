import type { Sector } from '@/config/types'

export const evenementiel: Sector = {
  id: 'evenementiel',
  label: 'Événementiel / Photo / DJ',
  icons: ['Camera', 'Music', 'PartyPopper'],
  images: {
    hero: [],
    gallery: [],
    about: [],
  },
  corpus: {
    taglines: [
      'Vos plus beaux moments immortalisés à {{city}}',
      '{{company}} — l\'émotion, capturée pour toujours',
      'Chaque événement mérite d\'être inoubliable',
    ],
    descriptions: [
      '{{company}} est le prestataire événementiel de référence à {{city}}. Photographe, DJ, coordinateur — nous créons des moments uniques pour vos mariages, soirées d\'entreprise et événements privés. Chaque détail compte.',
      'Depuis {{city}}, {{company}} accompagne vos plus grands moments avec passion et professionnalisme. Notre équipe créative capture l\'émotion, crée l\'ambiance et coordonne chaque instant pour que votre événement reste gravé dans les mémoires.',
    ],
    services: [
      ['Photographie Mariage', 'Animation DJ', 'Coordination Événement'],
      ['Reportage Corporate', 'Vidéo & Montage', 'Location Matériel Son/Lumière'],
    ],
    stats: [
      [
        { value: '9 ans', label: 'D\'expérience' },
        { value: '300+', label: 'Événements réalisés' },
        { value: '4.9/5', label: 'Note Google' },
      ],
      [
        { value: '100%', label: 'Photos livrées' },
        { value: '72h', label: 'Délai aperçu galerie' },
        { value: '0', label: 'Événement raté' },
      ],
    ],
    testimonials: [
      { name: 'Sophie & Paul R.', role: 'Mariés', text: '{{company}} a sublimé notre mariage à {{city}}. Les photos sont magnifiques, le DJ a mis l\'ambiance toute la soirée. On n\'aurait pas pu rêver mieux.', rating: 5 },
      { name: 'Delphine A.', role: 'Responsable événements', text: 'Soirée d\'entreprise de 150 personnes organisée avec {{company}}. Logistique impeccable, photos professionnelles, DJ qui tient la piste. Parfait du début à la fin.', rating: 5 },
      { name: 'Alexis M.', text: 'Reportage naissance réalisé avec beaucoup de sensibilité. Les photos sont un trésor. Merci pour votre discrétion et votre talent.', rating: 5 },
    ],
    faqs: [
      [
        { question: 'Comment réserver pour mon mariage ?', answer: 'Contactez-nous dès que possible — les dates se réservent vite ! Appelez le {{phone}} ou écrivez à {{email}} pour vérifier vos disponibilités.' },
        { question: 'Combien de photos livrez-vous après un mariage ?', answer: 'Minimum 400 photos haute résolution retouchées, livrées via galerie privée sous 3 semaines. Albums papier disponibles en option.' },
        { question: 'Intervenez-vous hors de {{city}} ?', answer: 'Oui, nous intervenons partout en France. Frais de déplacement selon la distance. Contactez-nous pour un devis.' },
      ],
      [
        { question: 'Peut-on choisir la musique avec le DJ ?', answer: 'Oui, une playlist de départ est préparée ensemble. Notre DJ s\'adapte ensuite à l\'ambiance en temps réel pour garder la piste pleine.' },
        { question: 'Proposez-vous des formules tout-inclus ?', answer: 'Oui, nos formules mariage regroupent photo, vidéo et DJ avec un tarif préférentiel. Devis personnalisé sur mesure.' },
        { question: 'Avez-vous une assurance ?', answer: 'Oui, {{company}} est assuré RC professionnelle et dispose d\'un matériel de secours pour tous les événements.' },
      ],
    ],
    trustItems: [
      [
        { icon: 'Camera', label: '300+ événements', subtitle: '9 ans d\'expérience' },
        { icon: 'Heart', label: 'Émotion capturée', subtitle: 'Style naturel et spontané' },
        { icon: 'Shield', label: 'Assuré RC Pro', subtitle: 'Matériel de secours' },
      ],
      [
        { icon: 'Star', label: '4.9/5 clients', subtitle: '200+ avis vérifiés' },
        { icon: 'Clock', label: 'Galerie 72h', subtitle: 'Aperçu express' },
        { icon: 'Music', label: 'DJ & Son', subtitle: 'Système pro complet' },
      ],
    ],
  },
}

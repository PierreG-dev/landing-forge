import type { Sector } from '@/config/types'

export const generique: Sector = {
  id: 'generique',
  label: 'Entreprise',
  icons: ['Building2', 'Briefcase', 'Star'],
  images: {
    hero: [],
    gallery: [],
    about: [],
  },
  corpus: {
    taglines: [
      '{{company}}, votre partenaire de confiance à {{city}}',
      'L\'excellence au service de vos besoins',
      'Qualité, réactivité et professionnalisme depuis des années',
      '{{company}} : le spécialiste qu\'il vous faut à {{city}}',
    ],
    descriptions: [
      '{{company}} est une entreprise établie à {{city}}, reconnue pour la qualité de ses prestations et la satisfaction de ses clients. Notre équipe de professionnels met tout en œuvre pour répondre à vos besoins avec efficacité et bienveillance.',
      'Implantés à {{city}}, nous aidons nos clients à atteindre leurs objectifs grâce à une approche personnalisée et des solutions sur mesure. {{company}} s\'engage à vous offrir un service irréprochable à chaque intervention.',
      'Chez {{company}}, nous croyons que chaque client mérite une attention particulière. C\'est pourquoi notre équipe à {{city}} est disponible et à l\'écoute pour vous proposer les meilleures solutions.',
    ],
    services: [
      ['Accompagnement Personnalisé', 'Devis Gratuit', 'Suivi Client'],
      ['Conseil Expert', 'Intervention Rapide', 'Satisfaction Garantie'],
      ['Service Sur Mesure', 'Équipe Qualifiée', 'Tarifs Transparents'],
    ],
    stats: [
      [
        { value: '10 ans', label: 'D\'expérience' },
        { value: '500+', label: 'Clients satisfaits' },
        { value: '98%', label: 'Taux de satisfaction' },
      ],
      [
        { value: '4.9/5', label: 'Note moyenne' },
        { value: '24h', label: 'Délai de réponse' },
        { value: '100%', label: 'Engagement qualité' },
      ],
    ],
    testimonials: [
      { name: 'Sophie M.', role: 'Cliente', text: 'Excellent service, équipe professionnelle et réactive. {{company}} a su répondre parfaitement à nos besoins. Je recommande vivement.', rating: 5 },
      { name: 'Thomas R.', role: 'Client fidèle', text: 'Très satisfait de la prestation. Le travail est soigné, les délais respectés et le suivi impeccable. On sent que {{company}} tient à ses clients.', rating: 5 },
      { name: 'Isabelle L.', role: 'Cliente', text: 'Professionnalisme, écoute et qualité : c\'est ce qu\'on trouve chez {{company}} à {{city}}. N\'hésitez pas une seconde.', rating: 5 },
    ],
    faqs: [
      [
        { question: 'Comment obtenir un devis ?', answer: 'Contactez-nous par téléphone au {{phone}} ou par email à {{email}}. Nous vous répondons sous 24h avec un devis détaillé et sans engagement.' },
        { question: 'Intervenez-vous à {{city}} et ses environs ?', answer: 'Oui, nous intervenons à {{city}} et dans toute la région. N\'hésitez pas à nous contacter pour vérifier nos zones d\'intervention.' },
        { question: 'Quels sont vos délais d\'intervention ?', answer: 'Nous faisons de la réactivité une priorité. Pour les urgences, nous répondons en moins de 24h. Pour les projets planifiés, nous nous adaptons à votre agenda.' },
      ],
      [
        { question: 'Proposez-vous des garanties sur vos prestations ?', answer: 'Oui, toutes nos prestations sont garanties. En cas de problème, nous intervenons rapidement pour corriger la situation à nos frais.' },
        { question: 'Peut-on vous contacter le week-end ?', answer: 'Nous sommes disponibles du lundi au vendredi. Pour les urgences en dehors de ces horaires, laissez-nous un message et nous vous rappelons dès que possible.' },
        { question: 'Quels modes de paiement acceptez-vous ?', answer: 'Nous acceptons les virements bancaires, chèques et espèces. Un acompte peut être demandé pour les projets importants.' },
      ],
    ],
    trustItems: [
      [
        { icon: 'Shield', label: 'Entreprise fiable', subtitle: 'Établie depuis 10 ans' },
        { icon: 'Award', label: 'Qualité garantie', subtitle: 'Satisfaction assurée' },
        { icon: 'Clock', label: 'Réactivité', subtitle: 'Réponse sous 24h' },
      ],
      [
        { icon: 'Users', label: 'Équipe experte', subtitle: 'Professionnels qualifiés' },
        { icon: 'Star', label: '4.9/5 clients', subtitle: '200+ avis positifs' },
        { icon: 'MapPin', label: 'Présence locale', subtitle: 'Ancrés à {{city}}' },
      ],
    ],
  },
  blockConfig: {
    mandatory: ['services', 'trust'],
    preferred: ['testimonials', 'about', 'faq'],
    excluded: [],
    optionalCount: [2, 4],
  },
}

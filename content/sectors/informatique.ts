import type { Sector } from '@/config/types'

export const informatique: Sector = {
  id: 'informatique',
  label: 'IT / Dev / Agence web',
  icons: ['Code2', 'Monitor', 'Cpu'],
  images: {
    hero: [],
    gallery: [],
    about: [],
  },
  corpus: {
    taglines: [
      'Votre transformation digitale, pilotée depuis {{city}}',
      'Code propre, délais tenus, résultats mesurables',
      '{{company}} — l\'agence tech qui pense business',
    ],
    descriptions: [
      '{{company}} est une agence digitale basée à {{city}} spécialisée dans le développement web, les applications mobiles et la transformation numérique des entreprises. Notre équipe de développeurs seniors livre des projets solides, dans les délais.',
      'Depuis {{city}}, {{company}} accompagne startups et PME dans leurs projets tech : site web, SaaS, refonte SI, intégration API. Architecture robuste, code maintenable et suivi post-livraison : notre standard.',
    ],
    services: [
      ['Développement Web', 'Applications Mobiles', 'Transformation Digitale'],
      ['Sites & E-commerce', 'API & Intégrations', 'Maintenance & Support'],
    ],
    stats: [
      [
        { value: '8 ans', label: 'D\'expertise tech' },
        { value: '120+', label: 'Projets livrés' },
        { value: '98%', label: 'Délais respectés' },
      ],
      [
        { value: '15', label: 'Développeurs seniors' },
        { value: '4.9/5', label: 'Satisfaction client' },
        { value: '24h', label: 'Support réactif' },
      ],
    ],
    testimonials: [
      { name: 'Frédéric P.', role: 'CEO SaaS B2B', text: '{{company}} a refondu notre plateforme en 4 mois. Code propre, documentation complète, équipe disponible. On a enfin un produit dont on est fiers.', rating: 5 },
      { name: 'Laure G.', role: 'Directrice Marketing', text: 'Site e-commerce livré en 6 semaines, performances au top, taux de conversion +35%. {{company}} comprend à la fois la tech et le business.', rating: 5 },
      { name: 'Start-up Mobilis', role: 'CTO', text: 'Architecture microservices mise en place par {{company}} tient la charge depuis 18 mois. Zéro incident majeur. C\'est rare.', rating: 5 },
    ],
    faqs: [
      [
        { question: 'Comment démarre un projet ?', answer: 'Appel découverte gratuit 30min → cadrage technique → devis fixe. Contactez {{email}} ou appelez le {{phone}}.' },
        { question: 'Travaillez-vous en forfait ou en régie ?', answer: 'Les deux selon le projet. Forfait pour périmètre défini, TMA en régie. Tout est clarifié avant signature.' },
        { question: 'Êtes-vous disponibles après livraison ?', answer: 'Oui, contrats de maintenance et support inclus dans nos offres. Réponse sous 24h, hotfix sous 4h pour les critiques.' },
      ],
      [
        { question: 'Quelles technologies utilisez-vous ?', answer: 'React/Next.js, Node.js, Python, PostgreSQL, AWS/Vercel selon les besoins. Pas de silver bullet — on choisit la bonne stack pour votre projet.' },
        { question: 'Travaillez-vous avec des startups early stage ?', answer: 'Oui, nous proposons des formules MVP adaptées aux startups avec un budget limité mais des ambitions solides.' },
        { question: 'Êtes-vous basés uniquement à {{city}} ?', answer: 'Notre équipe est à {{city}} mais nous travaillons avec des clients dans toute la France et en Europe. Tout en remote si nécessaire.' },
      ],
    ],
    trustItems: [
      [
        { icon: 'Code2', label: 'Code maintenable', subtitle: 'Standards industrie' },
        { icon: 'Shield', label: 'Sécurité by design', subtitle: 'OWASP compliant' },
        { icon: 'Clock', label: 'Délais tenus', subtitle: '98% des projets' },
      ],
      [
        { icon: 'Star', label: '4.9/5 clients', subtitle: '120+ projets' },
        { icon: 'Cpu', label: 'Stack moderne', subtitle: 'React, Node, Cloud' },
        { icon: 'Users', label: '15 devs seniors', subtitle: 'À {{city}}' },
      ],
    ],
  },
}

import type { Sector } from '@/config/types'

export const commerceLocal: Sector = {
  id: 'commerce-local',
  label: 'Boutique / Magasin',
  icons: ['ShoppingBag', 'Store', 'Tag'],
  images: {
    hero: [],
    gallery: [],
    about: [],
  },
  corpus: {
    taglines: [
      'La boutique qui fait la différence à {{city}}',
      'Sélection soignée, conseil personnalisé',
      'Chez {{company}}, chaque achat est une découverte',
    ],
    descriptions: [
      '{{company}} est une boutique indépendante au cœur de {{city}}, sélectionnant avec passion les meilleurs produits pour ses clients. Ici, pas de grandes surfaces : juste du conseil sincère et des produits qui valent le détour.',
      'Depuis notre ouverture à {{city}}, {{company}} est devenu l\'adresse de confiance pour ceux qui cherchent qualité et authenticité. Notre équipe passionnée vous conseille et vous fait découvrir des produits introuvables ailleurs.',
    ],
    services: [
      ['Conseil Personnalisé', 'Commandes sur Mesure', 'Click & Collect'],
      ['Sélection Exclusive', 'Programme Fidélité', 'Livraison Locale'],
    ],
    stats: [
      [
        { value: '7 ans', label: 'À {{city}}' },
        { value: '2000+', label: 'Clients fidèles' },
        { value: '500+', label: 'Références en stock' },
      ],
      [
        { value: '4.9/5', label: 'Note Google' },
        { value: '48h', label: 'Délai commande' },
        { value: '100%', label: 'Sourcing sélectionné' },
      ],
    ],
    testimonials: [
      { name: 'Véronique D.', role: 'Cliente fidèle', text: '{{company}} est ma boutique préférée à {{city}}. Le conseil est toujours juste, les produits irréprochables. On y revient pour l\'ambiance autant que pour les achats.', rating: 5 },
      { name: 'Paul T.', role: 'Client', text: 'Excellent rapport qualité-prix, personnel attentionné et produits qu\'on ne trouve nulle part ailleurs. La boutique indépendante comme on aime.', rating: 5 },
      { name: 'Martine B.', text: 'Service de commande sur mesure parfait pour les cadeaux. Ils ont trouvé exactement ce que je cherchais. Livraison rapide sur {{city}}.', rating: 5 },
    ],
    faqs: [
      [
        { question: 'Livrez-vous à domicile sur {{city}} ?', answer: 'Oui, nous livrons sur {{city}} et les communes voisines sous 48h. Contactez-nous au {{phone}} pour les modalités.' },
        { question: 'Proposez-vous le retrait en boutique ?', answer: 'Oui, le click & collect est disponible. Commandez en ligne ou par téléphone, retirez sous 24h en boutique.' },
        { question: 'Faites-vous des cadeaux d\'entreprise ?', answer: 'Oui, nous créons des paniers et coffrets sur mesure pour les entreprises. Devis personnalisé par email à {{email}}.' },
      ],
      [
        { question: 'Quels sont vos horaires ?', answer: 'Du mardi au samedi de 10h à 19h. Ouvertures exceptionnelles les dimanches en décembre. Suivez-nous sur les réseaux pour les événements.' },
        { question: 'Reprenez-vous les produits ?', answer: 'Oui, échange ou avoir dans les 14 jours sur présentation du ticket, hors produits personnalisés.' },
        { question: 'Avez-vous un programme de fidélité ?', answer: 'Oui, carte de fidélité dès le premier achat : 1€ = 1 point. 100 points = 5€ de réduction. Inscription gratuite en boutique.' },
      ],
    ],
    trustItems: [
      [
        { icon: 'Store', label: 'Commerce local', subtitle: 'Indépendant depuis 7 ans' },
        { icon: 'Award', label: 'Sélection rigoureuse', subtitle: 'Produits testés' },
        { icon: 'Heart', label: 'Conseil humain', subtitle: 'Pas de script' },
      ],
      [
        { icon: 'Tag', label: 'Prix justes', subtitle: 'Rapport qualité garanti' },
        { icon: 'Truck', label: 'Livraison {{city}}', subtitle: 'Sous 48h' },
        { icon: 'Star', label: '4.9/5 clients', subtitle: '250+ avis' },
      ],
    ],
  },
}

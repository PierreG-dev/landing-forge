import type { Sector } from '@/config/types'

export const sante: Sector = {
  id: 'sante',
  label: 'Médecin / Kiné / Dentiste',
  icons: ['Stethoscope', 'Heart', 'Activity'],
  images: {
    hero: [],
    gallery: [],
    about: [],
  },
  corpus: {
    taglines: [
      'Votre santé, notre engagement à {{city}}',
      'Des soins attentifs, une écoute sincère',
      'La médecine de proximité qui vous respecte',
    ],
    descriptions: [
      '{{company}} est un cabinet médical implanté à {{city}} depuis plus de 15 ans. Notre équipe de professionnels de santé vous accueille dans un cadre bienveillant et vous accompagne avec rigueur et humanité.',
      'À {{city}}, {{company}} vous propose des soins de qualité dans un cabinet moderne et accessible. Nous accordons une importance particulière à l\'écoute et à la relation de confiance avec chaque patient.',
    ],
    services: [
      ['Consultations Générales', 'Suivi Chronique', 'Bilans de Santé'],
      ['Médecine du Sport', 'Téléconsultation', 'Urgences du Jour'],
    ],
    stats: [
      [
        { value: '15 ans', label: 'De présence à {{city}}' },
        { value: '3500+', label: 'Patients suivis' },
        { value: '48h', label: 'Délai moyen RDV' },
      ],
      [
        { value: '100%', label: 'Conventionné Secteur 1' },
        { value: '4.8/5', label: 'Satisfaction patient' },
        { value: '5', label: 'Praticiens' },
      ],
    ],
    testimonials: [
      { name: 'Pierre G.', role: 'Patient', text: 'Le Dr. chez {{company}} prend vraiment le temps d\'écouter. Rare de trouver un médecin aussi disponible et attentionné à {{city}}. Je recommande vivement.', rating: 5 },
      { name: 'Anne-Sophie L.', role: 'Patiente', text: 'Suivi de grossesse impeccable. Équipe à l\'écoute, disponible, compétente. Je me suis sentie accompagnée à chaque étape. Merci infiniment.', rating: 5 },
      { name: 'René M.', text: 'Cabinet moderne, accueil chaleureux, temps d\'attente minimal. {{company}} est exactement ce que la médecine de quartier devrait être.', rating: 5 },
    ],
    faqs: [
      [
        { question: 'Comment prendre rendez-vous ?', answer: 'Par téléphone au {{phone}}, par email à {{email}}, ou via notre formulaire en ligne. Nous rappelons sous 2h en semaine.' },
        { question: 'Êtes-vous conventionné ?', answer: 'Oui, {{company}} est conventionné Secteur 1. Pas de dépassement d\'honoraires pour les actes standards.' },
        { question: 'Acceptez-vous les nouveaux patients ?', answer: 'Oui, nous acceptons de nouveaux patients. N\'hésitez pas à nous contacter pour vérifier les disponibilités.' },
      ],
      [
        { question: 'Y a-t-il un accès pour les personnes à mobilité réduite ?', answer: 'Oui, notre cabinet à {{city}} est entièrement accessible : ascenseur, rampe d\'accès, places réservées.' },
        { question: 'Proposez-vous des téléconsultations ?', answer: 'Oui, pour les consultations de suivi et le renouvellement d\'ordonnances, nous proposons des téléconsultations remboursées.' },
        { question: 'Quelle est la durée d\'une consultation ?', answer: 'Une consultation standard dure 20 minutes. Pour un bilan complet, comptez 45 minutes. Nous respectons l\'heure de votre rendez-vous.' },
      ],
    ],
    trustItems: [
      [
        { icon: 'ShieldCheck', label: 'Conventionné S1', subtitle: 'Sans dépassement' },
        { icon: 'Clock', label: 'Délai 48h', subtitle: 'Rendez-vous rapide' },
        { icon: 'Heart', label: 'Écoute active', subtitle: 'Approche humaine' },
      ],
      [
        { icon: 'Activity', label: 'Équipements modernes', subtitle: 'Cabinet neuf 2022' },
        { icon: 'Users', label: '3500+ patients', subtitle: 'Fidèles depuis 15 ans' },
        { icon: 'Star', label: '4.8/5', subtitle: 'Satisfaction patients' },
      ],
    ],
  },
}

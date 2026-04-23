import type { BlockProps } from './types'
import { safeGet, getBorderRadius, getShadowCSS, getSectionPadding } from './utils'
import type { FaqSet } from '@/config/types'

const FALLBACK_FAQS: FaqSet = [
  { question: 'Comment prendre rendez-vous ?', answer: 'Vous pouvez nous contacter par téléphone ou par email. Nous vous rappelons dans les meilleurs délais pour convenir d\'un rendez-vous selon vos disponibilités.' },
  { question: 'Quels sont vos délais d\'intervention ?', answer: 'Nous intervenons généralement sous 24 à 72 heures selon la nature de votre demande. Pour les urgences, nous disposons d\'un service prioritaire.' },
  { question: 'Proposez-vous des devis gratuits ?', answer: 'Oui, tous nos devis sont établis gratuitement et sans engagement. Nous nous déplaçons sur place pour évaluer précisément vos besoins.' },
  { question: 'Dans quelle zone géographique intervenez-vous ?', answer: 'Nous intervenons principalement dans votre région et les communes environnantes. Contactez-nous pour vérifier si votre adresse est couverte.' },
  { question: 'Vos prestations sont-elles garanties ?', answer: 'Oui, toutes nos prestations sont couvertes par une garantie de satisfaction. Nous assurons un suivi complet de votre projet.' },
]

const SECTION_TITLE = 'Questions fréquentes'

// ── Variant 1: Full-width accordion using native <details> ─────────────────────

function V1(props: BlockProps) {
  const { sector, theme, corpusIndex, prospect } = props
  const faqs = safeGet(sector.corpus.faqs, corpusIndex, FALLBACK_FAQS)
  const displayFaqs = faqs.length > 0 ? faqs : FALLBACK_FAQS
  const radius = getBorderRadius(theme)
  const shadow = getShadowCSS(theme)
  const py = getSectionPadding(theme)

  return (
    <section style={{ position: 'relative', backgroundColor: 'var(--color-surface)', padding: `${py} 2rem`, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', bottom: '-6rem', right: '-6rem', width: '24rem', height: '24rem', borderRadius: '50%', background: 'var(--color-primary)', opacity: 0.04, pointerEvents: 'none' }} />

      <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
            {SECTION_TITLE}
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>
            Tout ce que vous devez savoir
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
          {displayFaqs.map((faq, i) => (
            <details key={i} style={{ borderRadius: radius, backgroundColor: 'white', border: '1px solid rgba(0,0,0,0.07)', boxShadow: shadow, overflow: 'hidden' }}>
              <summary style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 1.75rem', cursor: 'pointer', listStyle: 'none', outline: 'none', gap: '1rem' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.0625rem', fontWeight: 700, color: 'var(--color-text)', lineHeight: 1.35 }}>
                  {faq.question}
                </span>
                <span style={{ flex: '0 0 auto', width: '1.75rem', height: '1.75rem', borderRadius: '50%', backgroundColor: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '1rem', lineHeight: 1 }}>
                  +
                </span>
              </summary>
              <div style={{ padding: '0 1.75rem 1.5rem', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', color: 'var(--color-text-light)', lineHeight: 1.72, paddingTop: '1rem' }}>
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Variant 2: 2-col, all Q&A visible ─────────────────────────────────────────

function V2(props: BlockProps) {
  const { sector, theme, corpusIndex } = props
  const faqs = safeGet(sector.corpus.faqs, corpusIndex, FALLBACK_FAQS)
  const displayFaqs = faqs.length > 0 ? faqs : FALLBACK_FAQS
  const radius = getBorderRadius(theme)
  const shadow = getShadowCSS(theme)
  const py = getSectionPadding(theme)

  return (
    <section style={{ position: 'relative', backgroundColor: 'var(--color-surface)', padding: `${py} 2rem`, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-4rem', left: '-4rem', width: '20rem', height: '20rem', borderRadius: '50%', background: 'var(--color-secondary)', opacity: 0.04, pointerEvents: 'none' }} />

      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
            {SECTION_TITLE}
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>
            Tout ce que vous devez savoir
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
          {displayFaqs.map((faq, i) => (
            <div key={i} style={{ backgroundColor: 'white', borderRadius: radius, padding: '1.75rem', boxShadow: shadow, border: '1px solid rgba(0,0,0,0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '0.875rem' }}>
                <div style={{ flex: '0 0 auto', width: '2rem', height: '2rem', borderRadius: '50%', background: `linear-gradient(135deg, var(--color-primary), var(--color-secondary))`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.75rem', fontWeight: 700, color: 'white' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--color-text)', lineHeight: 1.35 }}>
                  {faq.question}
                </h3>
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--color-text-light)', lineHeight: 1.7, paddingLeft: '3rem' }}>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Variant 3: Editorial, large numbers, answers below ────────────────────────

function V3(props: BlockProps) {
  const { sector, theme, corpusIndex } = props
  const faqs = safeGet(sector.corpus.faqs, corpusIndex, FALLBACK_FAQS)
  const displayFaqs = (faqs.length > 0 ? faqs : FALLBACK_FAQS).slice(0, 5)
  const py = getSectionPadding(theme)

  return (
    <section style={{ position: 'relative', padding: `${py} 2rem`, overflow: 'hidden', backgroundColor: 'var(--color-surface)' }}>
      {/* Side number ghost */}
      <div style={{ position: 'absolute', right: '3rem', top: '50%', transform: 'translateY(-50%)', fontFamily: 'var(--font-display)', fontSize: 'clamp(8rem, 20vw, 16rem)', fontWeight: 900, color: 'var(--color-primary)', opacity: 0.04, lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>
        FAQ
      </div>

      <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
        <div style={{ marginBottom: '4rem' }}>
          <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
            {SECTION_TITLE}
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>
            Vos questions, nos réponses
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {displayFaqs.map((faq, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '5rem 1fr', gap: '2rem', padding: '2.5rem 0', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, color: 'var(--color-primary)', opacity: 0.18, lineHeight: 1, textAlign: 'right', paddingTop: '0.25rem' }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.875rem', lineHeight: 1.3 }}>
                  {faq.question}
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', color: 'var(--color-text-light)', lineHeight: 1.75 }}>
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Export ─────────────────────────────────────────────────────────────────────

export function FAQ(props: BlockProps) {
  switch (props.variant) {
    case 2: return <V2 {...props} />
    case 3: return <V3 {...props} />
    default: return <V1 {...props} />
  }
}

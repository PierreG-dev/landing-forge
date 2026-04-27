import { ChevronLeft, ChevronRight, Star } from './icons'
import type { BlockProps } from './types'
import { safeSlice, getShadowCSS, getBorderRadius, getSectionPadding, getCardPadding } from './utils'
import type { Testimonial } from '@/config/types'

const FALLBACK_TESTIMONIALS: Testimonial[] = [
  { name: 'Marie D.', role: 'Cliente', text: 'Une qualité de service exceptionnelle. Je recommande vivement cette équipe professionnelle et à l\'écoute.', rating: 5 },
  { name: 'Jean-Pierre M.', role: 'Client fidèle', text: 'Équipe sérieuse et compétente. Les délais sont respectés et le résultat dépasse toujours mes attentes.', rating: 5 },
  { name: 'Sophie L.', role: 'Cliente', text: 'Très satisfaite de la prestation. Un accompagnement de qualité du début à la fin du projet.', rating: 5 },
  { name: 'Robert B.', role: 'Client', text: 'Je fais appel à eux depuis des années. Toujours au top niveau et très professionnels.', rating: 5 },
]

const SECTION_TITLE = 'Témoignages'

function Stars({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} fill={i < rating ? 'var(--color-primary)' : 'none'} style={{ color: 'var(--color-primary)', opacity: i < rating ? 1 : 0.25 }} />
      ))}
    </div>
  )
}

// ── Variant 1: 3 cards — avatar + name + stars + text ─────────────────────────

function V1(props: BlockProps) {
  const { sector, theme, corpusIndex } = props
  const pool = sector.corpus.testimonials.length > 0 ? sector.corpus.testimonials : FALLBACK_TESTIMONIALS
  const items = safeSlice(pool, corpusIndex, 3, FALLBACK_TESTIMONIALS[0])
  const radius = getBorderRadius(theme)
  const shadow = getShadowCSS(theme)
  const cardPad = getCardPadding(theme)
  const py = getSectionPadding(theme)

  return (
    <section style={{ position: 'relative', backgroundColor: 'var(--color-surface)', padding: `${py} 2rem`, overflow: 'hidden' }}>
      {/* Decorative */}
      <div style={{ position: 'absolute', top: '-8rem', left: '-8rem', width: '28rem', height: '28rem', borderRadius: '50%', background: 'var(--color-secondary)', opacity: 0.04, pointerEvents: 'none' }} />

      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
            {SECTION_TITLE}
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>
            Ils nous font confiance
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {items.map((t, i) => (
            <div key={i} style={{ backgroundColor: 'white', borderRadius: radius, padding: cardPad, boxShadow: shadow, border: '1px solid rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Stars rating={t.rating} />
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', color: 'var(--color-text-light)', lineHeight: 1.7, flex: 1, fontStyle: 'italic' }}>
                &ldquo;{t.text}&rdquo;
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', background: `linear-gradient(135deg, var(--color-primary), var(--color-secondary))`, display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto' }}>
                  <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.875rem', fontWeight: 700, color: 'white' }}>
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-text)', lineHeight: 1.2 }}>
                    {t.name}
                  </p>
                  {t.role && (
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--color-text-light)' }}>
                      {t.role}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Variant 2: Carousel, 1 at a time, arrows, CSS transition ─────────────────

function V2(props: BlockProps) {
  const { sector, theme, corpusIndex } = props
  const pool = sector.corpus.testimonials.length > 0 ? sector.corpus.testimonials : FALLBACK_TESTIMONIALS
  const radius = getBorderRadius(theme)
  const shadow = getShadowCSS(theme)
  const py = getSectionPadding(theme)

  const t = pool[corpusIndex % pool.length]

  return (
    <section style={{ position: 'relative', backgroundColor: 'var(--color-primary)', padding: `${py} 2rem`, overflow: 'hidden' }}>
      {/* Pattern */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '48rem', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: '3rem' }}>
          {SECTION_TITLE}
        </p>

        {/* Quote mark */}
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '6rem', lineHeight: 0.8, color: 'rgba(255,255,255,0.15)', marginBottom: '1.5rem', userSelect: 'none' }}>
          &ldquo;
        </div>

        <div style={{ minHeight: '8rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', color: 'rgba(255,255,255,0.9)', lineHeight: 1.75, fontStyle: 'italic' }}>
            {t.text}
          </p>
        </div>

        <div style={{ marginTop: '2rem', marginBottom: '2.5rem' }}>
          <Stars rating={t.rating} />
          <p style={{ fontFamily: 'var(--font-accent)', fontWeight: 700, color: 'white', marginTop: '0.75rem' }}>{t.name}</p>
          {t.role && <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.65)' }}>{t.role}</p>}
        </div>

        {/* Static nav indicators */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
          <div style={{ width: '2.75rem', height: '2.75rem', borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.4)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ChevronLeft size={20} />
          </div>
          <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.6)' }}>
            1 / {pool.length}
          </span>
          <div style={{ width: '2.75rem', height: '2.75rem', borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.4)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ChevronRight size={20} />
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Variant 3: Blockquote centered, giant decorative quotes, colored bg ────────

function V3(props: BlockProps) {
  const { sector, theme, corpusIndex } = props
  const pool = sector.corpus.testimonials.length > 0 ? sector.corpus.testimonials : FALLBACK_TESTIMONIALS
  const t = pool[corpusIndex % pool.length]
  const py = getSectionPadding(theme)
  const radius = getBorderRadius(theme)
  const shadow = getShadowCSS(theme)

  return (
    <section style={{ position: 'relative', backgroundColor: 'var(--color-surface)', padding: `${py} 2rem`, overflow: 'hidden' }}>
      {/* Giant decorative quote */}
      <div style={{ position: 'absolute', top: '-2rem', left: '2rem', fontFamily: 'var(--font-display)', fontSize: 'clamp(10rem, 25vw, 20rem)', fontWeight: 900, color: 'var(--color-primary)', opacity: 0.05, lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>
        &ldquo;
      </div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '52rem', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '2.5rem' }}>
          {SECTION_TITLE}
        </p>

        <Stars rating={t.rating} />

        <blockquote style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.25rem, 3vw, 2rem)', fontWeight: 600, color: 'var(--color-text)', lineHeight: 1.45, margin: '1.5rem 0', fontStyle: 'italic' }}>
          &ldquo;{t.text}&rdquo;
        </blockquote>

        <div style={{ width: '3rem', height: '2px', background: 'var(--color-primary)', margin: '1.5rem auto' }} />

        <p style={{ fontFamily: 'var(--font-accent)', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--color-text)' }}>
          {t.name}
        </p>
        {t.role && (
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'var(--color-text-light)', marginTop: '0.25rem' }}>
            {t.role}
          </p>
        )}
      </div>
    </section>
  )
}

// ── Variant 4: 2-col compact list, lateral color bar ─────────────────────────

function V4(props: BlockProps) {
  const { sector, theme, corpusIndex } = props
  const pool = sector.corpus.testimonials.length > 0 ? sector.corpus.testimonials : FALLBACK_TESTIMONIALS
  const items = safeSlice(pool, corpusIndex, 4, FALLBACK_TESTIMONIALS[0])
  const radius = getBorderRadius(theme)
  const shadow = getShadowCSS(theme)
  const py = getSectionPadding(theme)

  return (
    <section style={{ position: 'relative', backgroundColor: 'var(--color-surface)', padding: `${py} 2rem`, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', right: '-4rem', top: '50%', transform: 'translateY(-50%)', width: '16rem', height: '16rem', borderRadius: '50%', background: 'var(--color-primary)', opacity: 0.04, pointerEvents: 'none' }} />

      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <div style={{ marginBottom: '3rem' }}>
          <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
            {SECTION_TITLE}
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>
            Ils nous font confiance
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 26rem), 1fr))', gap: '1rem' }}>
          {items.map((t, i) => (
            <div key={i} style={{ display: 'flex', gap: '0', borderRadius: radius, overflow: 'hidden', boxShadow: shadow, backgroundColor: 'white' }}>
              {/* Lateral color bar */}
              <div style={{ width: '4px', flex: '0 0 4px', background: `linear-gradient(to bottom, var(--color-primary), var(--color-secondary))` }} />
              <div style={{ padding: '1.25rem 1.5rem', flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.625rem' }}>
                  <div>
                    <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-text)' }}>
                      {t.name}
                    </p>
                    {t.role && <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--color-text-light)' }}>{t.role}</p>}
                  </div>
                  <Stars rating={t.rating} />
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--color-text-light)', lineHeight: 1.65, fontStyle: 'italic' }}>
                  &ldquo;{t.text}&rdquo;
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

export function Testimonials(props: BlockProps) {
  switch (props.variant) {
    case 2: return <V2 {...props} />
    case 3: return <V3 {...props} />
    case 4: return <V4 {...props} />
    default: return <V1 {...props} />
  }
}

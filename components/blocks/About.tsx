import { Phone, Mail, MapPin } from './icons'
import { substitute } from '@/lib/engine/substitutor'
import type { BlockProps } from './types'
import { safeGet, getShadowCSS, getBorderRadius, getSectionPadding, getCardPadding } from './utils'

const FALLBACK_DESC = '{{company}} est un acteur de référence dans son domaine à {{city}}. Notre équipe passionnée vous accompagne avec expertise et engagement pour des résultats à la hauteur de vos attentes.'

const SECTION_TITLE = 'À propos'

// ── Variant 1: Text left 55%, gradient image right absolute overflow ───────────

function V1(props: BlockProps) {
  const { prospect, sector, theme, corpusIndex } = props
  const desc = substitute(safeGet(sector.corpus.descriptions, corpusIndex, FALLBACK_DESC), prospect)
  const radius = getBorderRadius(theme)
  const shadow = getShadowCSS(theme)
  const py = getSectionPadding(theme)

  return (
    <section style={{ position: 'relative', backgroundColor: 'var(--color-surface)', padding: `${py} 2rem`, overflow: 'hidden' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', display: 'grid', gridTemplateColumns: '55fr 45fr', gap: '4rem', alignItems: 'center' }}>
        {/* Text */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
            {SECTION_TITLE}
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.15, marginBottom: '1.5rem' }}>
            {prospect.company}
          </h2>
          <div style={{ width: '3rem', height: '3px', background: 'linear-gradient(to right, var(--color-primary), var(--color-secondary))', marginBottom: '1.5rem', borderRadius: '2px' }} />
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.0625rem', color: 'var(--color-text-light)', lineHeight: 1.75, marginBottom: '2rem' }}>
            {desc}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
            {prospect.city && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--color-text-light)' }}>
                <MapPin size={16} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                {prospect.city}
              </div>
            )}
            {prospect.phone && (
              <a href={`tel:${prospect.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--color-primary)', textDecoration: 'none' }}>
                <Phone size={16} style={{ flexShrink: 0 }} />
                {prospect.phone}
              </a>
            )}
            {prospect.email && (
              <a href={`mailto:${prospect.email}`} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--color-primary)', textDecoration: 'none' }}>
                <Mail size={16} style={{ flexShrink: 0 }} />
                {prospect.email}
              </a>
            )}
          </div>
        </div>

        {/* Image column */}
        <div style={{ position: 'relative' }}>
          {/* Main visual */}
          <div style={{ borderRadius: radius, overflow: 'hidden', boxShadow: shadow, aspectRatio: '4/5', background: 'linear-gradient(160deg, var(--color-primary) 0%, var(--color-secondary) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(4rem, 10vw, 7rem)', fontWeight: 900, color: 'rgba(255,255,255,0.15)', lineHeight: 1 }}>
              {prospect.company.slice(0, 2).toUpperCase()}
            </span>
          </div>
          {/* Floating accent card */}
          <div style={{ position: 'absolute', bottom: '-1.5rem', left: '-2rem', backgroundColor: 'white', borderRadius: radius, padding: '1rem 1.5rem', boxShadow: shadow, border: '1px solid rgba(0,0,0,0.05)' }}>
            <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.75rem', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.25rem' }}>
              Basé à
            </p>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--color-text)' }}>
              {prospect.city}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Variant 2: Full-width gradient bg, semi-transparent card overlay ──────────

function V2(props: BlockProps) {
  const { prospect, sector, theme, corpusIndex } = props
  const desc = substitute(safeGet(sector.corpus.descriptions, corpusIndex, FALLBACK_DESC), prospect)
  const radius = getBorderRadius(theme)
  const shadow = getShadowCSS(theme)
  const cardPad = getCardPadding(theme)
  const py = getSectionPadding(theme)

  return (
    <section style={{ position: 'relative', padding: `${py} 2rem`, overflow: 'hidden', background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)' }}>
      {/* Pattern overlay */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none' }} />
      {/* Decorative circle */}
      <div style={{ position: 'absolute', top: '-10rem', right: '-10rem', width: '36rem', height: '36rem', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '56rem', margin: '0 auto' }}>
        <div style={{ backgroundColor: theme.cards.hasBackdropBlur ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.95)', backdropFilter: theme.cards.hasBackdropBlur ? 'blur(16px)' : undefined, borderRadius: radius, padding: cardPad, boxShadow: shadow, border: '1px solid rgba(255,255,255,0.2)' }}>
          <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: theme.cards.hasBackdropBlur ? 'rgba(255,255,255,0.8)' : 'var(--color-primary)', marginBottom: '0.75rem' }}>
            {SECTION_TITLE}
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: theme.cards.hasBackdropBlur ? 'white' : 'var(--color-text)', lineHeight: 1.2, marginBottom: '1.25rem' }}>
            {prospect.company}
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.0625rem', color: theme.cards.hasBackdropBlur ? 'rgba(255,255,255,0.85)' : 'var(--color-text-light)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
            {desc}
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {prospect.phone && (
              <a href={`tel:${prospect.phone}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', backgroundColor: 'var(--color-primary)', color: 'white', borderRadius: radius, fontFamily: 'var(--font-accent)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>
                <Phone size={15} /> {prospect.phone}
              </a>
            )}
            {prospect.email && (
              <a href={`mailto:${prospect.email}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', border: `1.5px solid var(--color-primary)`, color: 'var(--color-primary)', borderRadius: radius, fontFamily: 'var(--font-accent)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>
                <Mail size={15} /> Écrire
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Variant 3: Horizontal timeline ────────────────────────────────────────────

function V3(props: BlockProps) {
  const { prospect, sector, theme, corpusIndex } = props
  const desc = substitute(safeGet(sector.corpus.descriptions, corpusIndex, FALLBACK_DESC), prospect)
  const py = getSectionPadding(theme)
  const radius = getBorderRadius(theme)
  const shadow = getShadowCSS(theme)

  const milestones = [
    { year: 'Fondation', title: `${prospect.company}`, desc: `Début de l'aventure à ${prospect.city}` },
    { year: 'Expertise', title: 'Savoir-faire', desc: 'Construction de notre réputation' },
    { year: "Aujourd'hui", title: 'Excellence', desc: 'Au service de nos clients' },
  ]

  return (
    <section style={{ position: 'relative', backgroundColor: 'var(--color-surface)', padding: `${py} 2rem`, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'var(--color-primary)', opacity: 0.03, pointerEvents: 'none' }} />

      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
            {SECTION_TITLE}
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2, marginBottom: '1rem' }}>
            {prospect.company}
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--color-text-light)', lineHeight: 1.7, maxWidth: '40rem', margin: '0 auto' }}>
            {desc}
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          {/* Connecting line */}
          <div style={{ position: 'absolute', top: '1.75rem', left: '16.66%', right: '16.66%', height: '2px', background: 'linear-gradient(to right, var(--color-primary), var(--color-secondary))', zIndex: 0 }} />

          {milestones.map((m, i) => (
            <div key={i} style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '50%', background: `linear-gradient(135deg, var(--color-primary), var(--color-secondary))`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', boxShadow: shadow }}>
                <span style={{ fontFamily: 'var(--font-accent)', fontSize: '1.125rem', fontWeight: 700, color: 'white' }}>{i + 1}</span>
              </div>
              <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '0.375rem' }}>
                {m.year}
              </p>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.5rem' }}>
                {m.title}
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--color-text-light)', lineHeight: 1.55 }}>
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Variant 4: Large quote typography + paragraph + signature ─────────────────

function V4(props: BlockProps) {
  const { prospect, sector, theme, corpusIndex } = props
  const desc = substitute(safeGet(sector.corpus.descriptions, corpusIndex, FALLBACK_DESC), prospect)
  const py = getSectionPadding(theme)

  return (
    <section style={{ position: 'relative', backgroundColor: 'var(--color-surface)', padding: `${py} 2rem`, overflow: 'hidden' }}>
      {/* Big decorative quote mark */}
      <div style={{ position: 'absolute', top: '2rem', left: '2rem', fontFamily: 'var(--font-display)', fontSize: 'clamp(8rem, 20vw, 18rem)', fontWeight: 900, color: 'var(--color-primary)', opacity: 0.06, lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>
        "
      </div>
      <div style={{ position: 'absolute', bottom: '1rem', right: '3rem', width: '12rem', height: '12rem', borderRadius: '50%', background: 'var(--color-secondary)', opacity: 0.05, pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '2rem' }}>
          {SECTION_TITLE}
        </p>
        <blockquote style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--color-text)', lineHeight: 1.3, marginBottom: '2rem', fontStyle: 'italic' }}>
          &ldquo;{prospect.tagline ?? `L'expertise de ${prospect.company} à votre service`}&rdquo;
        </blockquote>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.0625rem', color: 'var(--color-text-light)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
          {desc}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
          <div style={{ width: '3rem', height: '1px', background: 'var(--color-primary)' }} />
          <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text)', letterSpacing: '0.06em' }}>
            {prospect.company} · {prospect.city}
          </p>
          <div style={{ width: '3rem', height: '1px', background: 'var(--color-primary)' }} />
        </div>
      </div>
    </section>
  )
}

// ── Export ─────────────────────────────────────────────────────────────────────

export function About(props: BlockProps) {
  switch (props.variant) {
    case 2: return <V2 {...props} />
    case 3: return <V3 {...props} />
    case 4: return <V4 {...props} />
    default: return <V1 {...props} />
  }
}

import { Phone, Mail, ArrowDown } from './icons'
import { substitute } from '@/lib/engine/substitutor'
import type { BlockProps } from './types'
import { safeGet, getShadowCSS, getBorderRadius, getSectionPadding } from './utils'

// ── Separator helpers ──────────────────────────────────────────────────────────

function WaveSep({ fill }: { fill: string }) {
  return (
    <svg viewBox="0 0 1440 56" style={{ position: 'absolute', bottom: -1, left: 0, width: '100%', height: 56 }} preserveAspectRatio="none">
      <path d="M0,28 C360,56 1080,0 1440,28 L1440,56 L0,56 Z" fill={fill} />
    </svg>
  )
}

function DiagSep({ fill }: { fill: string }) {
  return (
    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 56, background: fill, clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} />
  )
}

function Separator({ style, fill }: { style: string; fill: string }) {
  if (style === 'wave' || style === 'wavy') return <WaveSep fill={fill} />
  if (style === 'diagonal' || style === 'angular') return <DiagSep fill={fill} />
  return null
}

// ── Fallbacks ──────────────────────────────────────────────────────────────────

const FALLBACK_TAGLINE = '{{company}} — Expert à {{city}}'
const FALLBACK_DESC = 'Nous mettons notre savoir-faire au service de votre projet à {{city}}. Contactez {{company}} dès aujourd\'hui.'

// ── Variant 1: Full-screen gradient, centered, decorative circles ───────────────

function V1(props: BlockProps) {
  const { prospect, sector, theme, corpusIndex } = props
  const tagline = substitute(prospect.tagline ?? safeGet(sector.corpus.taglines, corpusIndex, FALLBACK_TAGLINE), prospect)
  const radius = getBorderRadius(theme)
  const shadow = getShadowCSS(theme)
  const py = getSectionPadding(theme)

  return (
    <section style={{ position: 'relative', minHeight: '60vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.22)' }} />

      {/* Decorative */}
      <div style={{ position: 'absolute', top: '-20%', right: '-8%', width: '55vw', height: '55vw', borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.14)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-30%', left: '-12%', width: '65vw', height: '65vw', borderRadius: '50%', background: 'rgba(255,255,255,0.04)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '15%', left: '5%', width: '12vw', height: '12vw', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.08)', pointerEvents: 'none' }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '72rem', margin: '0 auto', padding: '3rem 2rem', textAlign: 'center', width: '100%' }}>
        {prospect.logoUrl && (
          <img src={prospect.logoUrl} alt={prospect.company} style={{ height: '3.5rem', marginBottom: '2rem', display: 'inline-block' }} />
        )}
        <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.8125rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '1.25rem' }}>
          {sector.label} · {prospect.city}
        </p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 8vw, 6rem)', fontWeight: 900, lineHeight: 1.05, color: 'white', marginBottom: '1.5rem', textShadow: '0 2px 30px rgba(0,0,0,0.3)' }}>
          {prospect.company}
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)', lineHeight: 1.65, color: 'rgba(255,255,255,0.88)', maxWidth: '38rem', margin: '0 auto 3rem' }}>
          {tagline}
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {prospect.phone && (
            <a href={`tel:${prospect.phone}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.9rem 2rem', backgroundColor: 'white', color: 'var(--color-primary)', borderRadius: radius, fontFamily: 'var(--font-accent)', fontWeight: 600, fontSize: '1rem', textDecoration: 'none', boxShadow: shadow }}>
              <Phone size={18} /> {prospect.phone}
            </a>
          )}
          <a href={prospect.email ? `mailto:${prospect.email}` : '#contact'} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.9rem 2rem', border: '2px solid rgba(255,255,255,0.65)', color: 'white', borderRadius: radius, fontFamily: 'var(--font-accent)', fontWeight: 600, fontSize: '1rem', textDecoration: 'none', backdropFilter: theme.cards.hasBackdropBlur ? 'blur(8px)' : undefined, backgroundColor: theme.cards.hasBackdropBlur ? 'rgba(255,255,255,0.1)' : 'transparent' }}>
            <Mail size={18} /> {prospect.email ?? 'Nous contacter'}
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', color: 'rgba(255,255,255,0.5)', zIndex: 1 }}>
        <ArrowDown size={22} />
      </div>

      <Separator style={theme.separators.style} fill="var(--color-surface)" />
    </section>
  )
}

// ── Variant 2: Split — text left 60%, gradient image right ────────────────────

function V2(props: BlockProps) {
  const { prospect, sector, theme, corpusIndex } = props
  const tagline = substitute(prospect.tagline ?? safeGet(sector.corpus.taglines, corpusIndex, FALLBACK_TAGLINE), prospect)
  const desc = substitute(safeGet(sector.corpus.descriptions, corpusIndex, FALLBACK_DESC), prospect)
  const radius = getBorderRadius(theme)
  const shadow = getShadowCSS(theme)
  const py = getSectionPadding(theme)

  return (
    <section style={{ position: 'relative', minHeight: '60vh', display: 'grid', gridTemplateColumns: '3fr 2fr', overflow: 'hidden', backgroundColor: 'var(--color-surface)' }}>
      {/* Text side */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: `3rem 4rem 3rem clamp(1.5rem, 5vw, 6rem)`, position: 'relative' }}>
        {prospect.logoUrl && (
          <img src={prospect.logoUrl} alt={prospect.company} style={{ height: '3rem', marginBottom: '2.5rem', display: 'block' }} />
        )}
        <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '1rem' }}>
          {sector.label} · {prospect.city}
        </p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', fontWeight: 900, lineHeight: 1.08, color: 'var(--color-text)', marginBottom: '1.25rem' }}>
          {prospect.company}
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', lineHeight: 1.7, color: 'var(--color-text-light)', marginBottom: '1rem', maxWidth: '32rem' }}>
          {tagline}
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--color-text-light)', marginBottom: '2.5rem', maxWidth: '30rem' }}>
          {desc}
        </p>
        <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap' }}>
          {prospect.phone && (
            <a href={`tel:${prospect.phone}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 1.75rem', backgroundColor: 'var(--color-primary)', color: 'white', borderRadius: radius, fontFamily: 'var(--font-accent)', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none', boxShadow: shadow }}>
              <Phone size={17} /> {prospect.phone}
            </a>
          )}
          {prospect.email && (
            <a href={`mailto:${prospect.email}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 1.75rem', border: '1.5px solid var(--color-primary)', color: 'var(--color-primary)', borderRadius: radius, fontFamily: 'var(--font-accent)', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none' }}>
              <Mail size={17} /> Écrire
            </a>
          )}
        </div>
      </div>

      {/* Image side */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: '-10% 0 -10% -8%', background: 'linear-gradient(160deg, var(--color-primary) 0%, var(--color-secondary) 100%)', borderRadius: `0 0 0 ${radius}` }} />
        {/* Decorative */}
        <div style={{ position: 'absolute', top: '20%', right: '15%', width: '8vw', height: '8vw', borderRadius: '50%', background: 'rgba(255,255,255,0.12)' }} />
        <div style={{ position: 'absolute', bottom: '25%', left: '20%', width: '5vw', height: '5vw', borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'rgba(255,255,255,0.25)', fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 900, lineHeight: 1 }}>
          {prospect.company.slice(0, 2).toUpperCase()}
        </div>
      </div>

      <Separator style={theme.separators.style} fill="var(--color-surface)" />
    </section>
  )
}

// ── Variant 3: Split inverted — image left, text right ─────────────────────────

function V3(props: BlockProps) {
  const { prospect, sector, theme, corpusIndex } = props
  const tagline = substitute(prospect.tagline ?? safeGet(sector.corpus.taglines, corpusIndex, FALLBACK_TAGLINE), prospect)
  const desc = substitute(safeGet(sector.corpus.descriptions, corpusIndex, FALLBACK_DESC), prospect)
  const radius = getBorderRadius(theme)
  const shadow = getShadowCSS(theme)
  const py = getSectionPadding(theme)

  return (
    <section style={{ position: 'relative', minHeight: '60vh', display: 'grid', gridTemplateColumns: '2fr 3fr', overflow: 'hidden', backgroundColor: 'var(--color-surface)' }}>
      {/* Image/color side */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: '-10% -8% -10% 0', background: 'linear-gradient(200deg, var(--color-secondary) 0%, var(--color-primary) 100%)' }} />
        <div style={{ position: 'absolute', top: '30%', right: '10%', width: '10vw', height: '10vw', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />
        <div style={{ position: 'absolute', bottom: '20%', left: '15%', width: '6vw', height: '6vw', borderRadius: '50%', background: 'rgba(255,255,255,0.07)' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'rgba(255,255,255,0.2)', fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 7vw, 5rem)', fontWeight: 900 }}>
          {prospect.company.slice(0, 2).toUpperCase()}
        </div>
      </div>

      {/* Text side */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: `3rem clamp(1.5rem, 5vw, 6rem) 3rem 4rem` }}>
        {prospect.logoUrl && (
          <img src={prospect.logoUrl} alt={prospect.company} style={{ height: '3rem', marginBottom: '2.5rem', display: 'block' }} />
        )}
        <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-secondary)', marginBottom: '1rem' }}>
          {sector.label} · {prospect.city}
        </p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', fontWeight: 900, lineHeight: 1.08, color: 'var(--color-text)', marginBottom: '1.25rem' }}>
          {prospect.company}
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', lineHeight: 1.7, color: 'var(--color-text-light)', marginBottom: '1rem', maxWidth: '32rem' }}>
          {tagline}
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--color-text-light)', marginBottom: '2.5rem', maxWidth: '30rem' }}>
          {desc}
        </p>
        <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap' }}>
          {prospect.phone && (
            <a href={`tel:${prospect.phone}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 1.75rem', backgroundColor: 'var(--color-secondary)', color: 'white', borderRadius: radius, fontFamily: 'var(--font-accent)', fontWeight: 600, textDecoration: 'none', boxShadow: shadow }}>
              <Phone size={17} /> {prospect.phone}
            </a>
          )}
          {prospect.email && (
            <a href={`mailto:${prospect.email}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 1.75rem', border: '1.5px solid var(--color-secondary)', color: 'var(--color-secondary)', borderRadius: radius, fontFamily: 'var(--font-accent)', fontWeight: 600, textDecoration: 'none' }}>
              <Mail size={17} /> Écrire
            </a>
          )}
        </div>
      </div>

      <Separator style={theme.separators.style} fill="var(--color-surface)" />
    </section>
  )
}

// ── Variant 4: Centered text full-height, image below with negative overlap ────

function V4(props: BlockProps) {
  const { prospect, sector, theme, corpusIndex } = props
  const tagline = substitute(prospect.tagline ?? safeGet(sector.corpus.taglines, corpusIndex, FALLBACK_TAGLINE), prospect)
  const radius = getBorderRadius(theme)
  const shadow = getShadowCSS(theme)

  return (
    <section style={{ position: 'relative', overflow: 'hidden', backgroundColor: 'var(--color-surface)' }}>
      {/* Upper text section */}
      <div style={{ position: 'relative', minHeight: '45vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3.5rem 2rem 6rem', textAlign: 'center', overflow: 'hidden', backgroundColor: 'var(--color-primary)' }}>
        {/* Decorative grid */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '64rem', width: '100%' }}>
          {prospect.logoUrl && (
            <img src={prospect.logoUrl} alt={prospect.company} style={{ height: '3.5rem', marginBottom: '2rem', display: 'inline-block' }} />
          )}
          <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.8rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: '1.25rem' }}>
            {sector.label} · {prospect.city}
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', fontWeight: 900, lineHeight: 1.05, color: 'white', marginBottom: '1.5rem' }}>
            {prospect.company}
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1.05rem, 2vw, 1.25rem)', lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', maxWidth: '36rem', margin: '0 auto 2.5rem' }}>
            {tagline}
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {prospect.phone && (
              <a href={`tel:${prospect.phone}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.9rem 2rem', backgroundColor: 'white', color: 'var(--color-primary)', borderRadius: radius, fontFamily: 'var(--font-accent)', fontWeight: 600, textDecoration: 'none', boxShadow: shadow }}>
                <Phone size={17} /> {prospect.phone}
              </a>
            )}
            <a href={prospect.email ? `mailto:${prospect.email}` : '#contact'} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.9rem 2rem', border: '2px solid rgba(255,255,255,0.6)', color: 'white', borderRadius: radius, fontFamily: 'var(--font-accent)', fontWeight: 600, textDecoration: 'none' }}>
              <Mail size={17} /> {prospect.email ?? 'Contactez-nous'}
            </a>
          </div>
        </div>
      </div>

      {/* Lower image band overlapping upward */}
      <div style={{ position: 'relative', height: '28vw', minHeight: '180px', maxHeight: '380px', marginTop: '-4rem', background: 'linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%)', borderRadius: `${radius} ${radius} 0 0`, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.12) 0%, transparent 60%)' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontFamily: 'var(--font-display)', fontSize: 'clamp(4rem, 12vw, 10rem)', fontWeight: 900, color: 'rgba(255,255,255,0.08)', letterSpacing: '-0.04em', whiteSpace: 'nowrap' }}>
          {prospect.company}
        </div>
      </div>
    </section>
  )
}

// ── Variant 5: Pure typography, giant display title, solid background ──────────

function V5(props: BlockProps) {
  const { prospect, sector, theme, corpusIndex } = props
  const tagline = substitute(prospect.tagline ?? safeGet(sector.corpus.taglines, corpusIndex, FALLBACK_TAGLINE), prospect)
  const radius = getBorderRadius(theme)
  const shadow = getShadowCSS(theme)
  const py = getSectionPadding(theme)

  return (
    <section style={{ position: 'relative', minHeight: '60vh', display: 'flex', alignItems: 'center', overflow: 'hidden', backgroundColor: 'var(--color-surface)' }}>
      {/* Decorative vertical line */}
      <div style={{ position: 'absolute', left: '4rem', top: 0, bottom: 0, width: '1px', background: 'var(--color-primary)', opacity: 0.15 }} />
      <div style={{ position: 'absolute', right: '4rem', top: 0, bottom: 0, width: '1px', background: 'var(--color-primary)', opacity: 0.15 }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '80rem', margin: '0 auto', padding: `3rem clamp(2rem, 8vw, 8rem)`, width: '100%' }}>
        <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.8rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ display: 'inline-block', width: '3rem', height: '1px', backgroundColor: 'var(--color-primary)' }} />
          {sector.label} · {prospect.city}
        </p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 10vw, 9rem)', fontWeight: 900, lineHeight: 0.95, letterSpacing: '-0.03em', color: 'var(--color-text)', marginBottom: '2.5rem', wordBreak: 'break-word' }}>
          {prospect.company}
        </h1>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '3rem', flexWrap: 'wrap' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', lineHeight: 1.7, color: 'var(--color-text-light)', maxWidth: '32rem', flex: '1 1 280px' }}>
            {tagline}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', flex: '0 0 auto' }}>
            {prospect.phone && (
              <a href={`tel:${prospect.phone}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.625rem', padding: '0.875rem 1.75rem', backgroundColor: 'var(--color-primary)', color: 'white', borderRadius: radius, fontFamily: 'var(--font-accent)', fontWeight: 600, textDecoration: 'none', boxShadow: shadow }}>
                <Phone size={17} /> {prospect.phone}
              </a>
            )}
            {prospect.email && (
              <a href={`mailto:${prospect.email}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.625rem', padding: '0.875rem 1.75rem', border: '1.5px solid var(--color-text)', color: 'var(--color-text)', borderRadius: radius, fontFamily: 'var(--font-accent)', fontWeight: 600, textDecoration: 'none' }}>
                <Mail size={17} /> {prospect.email}
              </a>
            )}
          </div>
        </div>

        {/* Horizontal rule */}
        <div style={{ marginTop: '4rem', height: '1px', background: 'linear-gradient(to right, var(--color-primary), var(--color-secondary), transparent)' }} />
        <p style={{ marginTop: '1.5rem', fontFamily: 'var(--font-accent)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-text-light)', opacity: 0.7 }}>
          {prospect.city} · {new Date().getFullYear()}
        </p>
      </div>
    </section>
  )
}

// ── Export ─────────────────────────────────────────────────────────────────────

export function Hero(props: BlockProps) {
  switch (props.variant) {
    case 2: return <V2 {...props} />
    case 3: return <V3 {...props} />
    case 4: return <V4 {...props} />
    case 5: return <V5 {...props} />
    default: return <V1 {...props} />
  }
}

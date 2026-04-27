import { Phone, Mail, ArrowRight } from './icons'
import { substitute } from '@/lib/engine/substitutor'
import type { BlockProps } from './types'
import { safeGet, getShadowCSS, getBorderRadius, getSectionPadding } from './utils'
import { ContactForm } from './ContactForm'

const FALLBACK_TAGLINE = 'Prêt à démarrer votre projet avec {{company}} ?'
const FALLBACK_DESC = 'Contactez-nous dès aujourd\'hui pour un devis gratuit à {{city}}.'

// ── Variant 1: Full-width colored banner, centered text + button ───────────────

function V1(props: BlockProps) {
  const { prospect, sector, theme, corpusIndex } = props
  const tagline = substitute(prospect.tagline ?? safeGet(sector.corpus.taglines, corpusIndex, FALLBACK_TAGLINE), prospect)
  const radius = getBorderRadius(theme)
  const shadow = getShadowCSS(theme)

  return (
    <section id="contact" style={{ position: 'relative', backgroundColor: 'var(--color-primary)', padding: '5rem 2rem', overflow: 'hidden' }}>
      {/* Background pattern */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.07) 1.5px, transparent 1.5px)', backgroundSize: '30px 30px', pointerEvents: 'none' }} />
      {/* Decorative circles */}
      <div style={{ position: 'absolute', left: '-6rem', top: '-6rem', width: '20rem', height: '20rem', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', right: '-4rem', bottom: '-8rem', width: '26rem', height: '26rem', borderRadius: '50%', background: 'rgba(255,255,255,0.04)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: '1rem' }}>
          {tagline}
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.0625rem', color: 'rgba(255,255,255,0.82)', lineHeight: 1.65, marginBottom: '2.5rem', maxWidth: '36rem', margin: '0 auto 2.5rem' }}>
          {substitute(FALLBACK_DESC, prospect)}
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {prospect.phone && (
            <a href={`tel:${prospect.phone}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.625rem', padding: '1rem 2.25rem', backgroundColor: 'white', color: 'var(--color-primary)', borderRadius: radius, fontFamily: 'var(--font-accent)', fontWeight: 700, fontSize: '1rem', textDecoration: 'none', boxShadow: shadow }}>
              <Phone size={18} /> {prospect.phone}
            </a>
          )}
          {prospect.email && (
            <a href={`mailto:${prospect.email}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.625rem', padding: '1rem 2.25rem', border: '2px solid rgba(255,255,255,0.65)', color: 'white', borderRadius: radius, fontFamily: 'var(--font-accent)', fontWeight: 700, fontSize: '1rem', textDecoration: 'none' }}>
              <Mail size={18} /> Nous écrire
            </a>
          )}
          {!prospect.phone && !prospect.email && (
            <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.625rem', padding: '1rem 2.25rem', backgroundColor: 'white', color: 'var(--color-primary)', borderRadius: radius, fontFamily: 'var(--font-accent)', fontWeight: 700, fontSize: '1rem', textDecoration: 'none', boxShadow: shadow }}>
              Nous contacter <ArrowRight size={18} />
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

// ── Variant 2: Centered card with shadow, text left, button right ─────────────

function V2(props: BlockProps) {
  const { prospect, sector, theme, corpusIndex } = props
  const tagline = substitute(prospect.tagline ?? safeGet(sector.corpus.taglines, corpusIndex, FALLBACK_TAGLINE), prospect)
  const radius = getBorderRadius(theme)
  const shadow = getShadowCSS(theme)
  const py = getSectionPadding(theme)

  return (
    <section id="contact" style={{ position: 'relative', backgroundColor: 'var(--color-surface)', padding: `${py} 2rem`, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '50%', background: 'var(--color-primary)', zIndex: 0 }} />
      <div style={{ position: 'absolute', top: '-8rem', left: '-8rem', width: '24rem', height: '24rem', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.08)', pointerEvents: 'none', zIndex: 1 }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '64rem', margin: '0 auto' }}>
        <div style={{ backgroundColor: 'white', borderRadius: radius, padding: 'clamp(2rem, 4vw, 3.5rem)', boxShadow: shadow, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 280px' }}>
            <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
              Contactez-nous
            </p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2, marginBottom: '1rem' }}>
              {tagline}
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', color: 'var(--color-text-light)', lineHeight: 1.7 }}>
              {substitute(FALLBACK_DESC, prospect)}
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', flex: '0 0 auto' }}>
            {prospect.phone && (
              <a href={`tel:${prospect.phone}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.625rem', padding: '0.9rem 1.75rem', backgroundColor: 'var(--color-primary)', color: 'white', borderRadius: radius, fontFamily: 'var(--font-accent)', fontWeight: 700, textDecoration: 'none', boxShadow: shadow, whiteSpace: 'nowrap' }}>
                <Phone size={17} /> {prospect.phone}
              </a>
            )}
            {prospect.email && (
              <a href={`mailto:${prospect.email}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.625rem', padding: '0.9rem 1.75rem', border: '1.5px solid var(--color-primary)', color: 'var(--color-primary)', borderRadius: radius, fontFamily: 'var(--font-accent)', fontWeight: 700, textDecoration: 'none', whiteSpace: 'nowrap' }}>
                <Mail size={17} /> {prospect.email}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Variant 3: 2-col — text left, contact form right ─────────────────────────

function V3(props: BlockProps) {
  const { prospect, sector, theme, corpusIndex } = props
  const tagline = substitute(prospect.tagline ?? safeGet(sector.corpus.taglines, corpusIndex, FALLBACK_TAGLINE), prospect)
  const radius = getBorderRadius(theme)
  const shadow = getShadowCSS(theme)
  const py = getSectionPadding(theme)

  return (
    <section id="contact" style={{ position: 'relative', backgroundColor: 'var(--color-surface)', padding: `${py} 2rem`, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-10rem', right: '-10rem', width: '30rem', height: '30rem', borderRadius: '50%', background: 'var(--color-primary)', opacity: 0.05, pointerEvents: 'none' }} />

      <div style={{ maxWidth: '72rem', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 26rem), 1fr))', gap: '4rem', alignItems: 'center' }}>
        {/* Left: text */}
        <div>
          <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
            Contactez-nous
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2, marginBottom: '1.25rem' }}>
            {tagline}
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.0625rem', color: 'var(--color-text-light)', lineHeight: 1.75, marginBottom: '2rem' }}>
            {substitute(FALLBACK_DESC, prospect)}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {prospect.phone && (
              <a href={`tel:${prospect.phone}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.625rem', fontFamily: 'var(--font-accent)', fontWeight: 600, color: 'var(--color-primary)', textDecoration: 'none', fontSize: '1rem' }}>
                <Phone size={18} /> {prospect.phone}
              </a>
            )}
            {prospect.email && (
              <a href={`mailto:${prospect.email}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.625rem', fontFamily: 'var(--font-accent)', fontWeight: 600, color: 'var(--color-primary)', textDecoration: 'none', fontSize: '1rem' }}>
                <Mail size={18} /> {prospect.email}
              </a>
            )}
          </div>
        </div>

        {/* Right: contact form */}
        <div style={{ backgroundColor: 'white', borderRadius: radius, padding: '2.5rem', boxShadow: shadow, border: '1px solid rgba(0,0,0,0.06)' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '1.5rem' }}>
            Envoyer un message
          </h3>
          <ContactForm email={prospect.email} radius={radius} shadow={shadow} />
        </div>
      </div>
    </section>
  )
}

// ── Export ─────────────────────────────────────────────────────────────────────

export function CTA(props: BlockProps) {
  switch (props.variant) {
    case 2: return <V2 {...props} />
    case 3: return <V3 {...props} />
    default: return <V1 {...props} />
  }
}

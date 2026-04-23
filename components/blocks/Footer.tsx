import { Phone, Mail, MapPin } from './icons'
import type { BlockProps } from './types'
import { getBorderRadius } from './utils'

const currentYear = new Date().getFullYear()

// ── Variant 1: Minimal — logo + contact + copyright one line ──────────────────

function V1(props: BlockProps) {
  const { prospect, theme } = props

  return (
    <footer style={{ position: 'relative', backgroundColor: 'var(--color-text)', color: 'rgba(255,255,255,0.75)', overflow: 'hidden' }}>
      {/* Top accent bar */}
      <div style={{ height: '3px', background: 'linear-gradient(to right, var(--color-primary), var(--color-secondary))' }} />

      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        {/* Logo / company name */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {prospect.logoUrl ? (
            <img src={prospect.logoUrl} alt={prospect.company} style={{ height: '2rem', opacity: 0.9 }} />
          ) : (
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 800, color: 'white' }}>
              {prospect.company}
            </span>
          )}
        </div>

        {/* Contact */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          {prospect.city && (
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontFamily: 'var(--font-body)', fontSize: '0.8125rem' }}>
              <MapPin size={13} style={{ color: 'var(--color-primary)' }} />
              {prospect.city}
            </span>
          )}
          {prospect.phone && (
            <a href={`tel:${prospect.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>
              <Phone size={13} style={{ color: 'var(--color-primary)' }} />
              {prospect.phone}
            </a>
          )}
          {prospect.email && (
            <a href={`mailto:${prospect.email}`} style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>
              <Mail size={13} style={{ color: 'var(--color-primary)' }} />
              {prospect.email}
            </a>
          )}
        </div>

        {/* Copyright */}
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', opacity: 0.5 }}>
          © {currentYear} {prospect.company}
        </p>
      </div>
    </footer>
  )
}

// ── Variant 2: 3 columns — logo+desc / nav / contact ─────────────────────────

function V2(props: BlockProps) {
  const { prospect, sector, theme } = props
  const radius = getBorderRadius(theme)

  return (
    <footer style={{ position: 'relative', backgroundColor: 'var(--color-text)', color: 'rgba(255,255,255,0.75)', overflow: 'hidden' }}>
      {/* Top accent bar */}
      <div style={{ height: '3px', background: 'linear-gradient(to right, var(--color-primary), var(--color-secondary))' }} />

      {/* Decorative */}
      <div style={{ position: 'absolute', bottom: '-4rem', right: '-4rem', width: '18rem', height: '18rem', borderRadius: '50%', background: 'var(--color-primary)', opacity: 0.05, pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '72rem', margin: '0 auto', padding: '4rem 2rem 2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
        {/* Col 1: Logo + desc */}
        <div>
          {prospect.logoUrl ? (
            <img src={prospect.logoUrl} alt={prospect.company} style={{ height: '2.5rem', marginBottom: '1.25rem', display: 'block', opacity: 0.9 }} />
          ) : (
            <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '1.375rem', fontWeight: 800, color: 'white', marginBottom: '1.25rem' }}>
              {prospect.company}
            </span>
          )}
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', lineHeight: 1.7, opacity: 0.65, maxWidth: '18rem' }}>
            {sector.label} à {prospect.city}. Expertise et qualité de service pour vos projets.
          </p>
        </div>

        {/* Col 2: Dummy nav */}
        <div>
          <h4 style={{ fontFamily: 'var(--font-accent)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'white', marginBottom: '1.25rem' }}>
            Navigation
          </h4>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
            {['Accueil', 'Nos services', 'À propos', 'Témoignages', 'Contact'].map((item) => (
              <a key={item} href="#" style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'rgba(255,255,255,0.65)', textDecoration: 'none', transition: 'color 0.2s' }}>
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Col 3: Contact */}
        <div>
          <h4 style={{ fontFamily: 'var(--font-accent)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'white', marginBottom: '1.25rem' }}>
            Contact
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            {prospect.city && (
              <div style={{ display: 'flex', gap: '0.625rem', alignItems: 'flex-start' }}>
                <MapPin size={15} style={{ color: 'var(--color-primary)', marginTop: '0.1rem', flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', lineHeight: 1.5 }}>
                  {prospect.city}
                </span>
              </div>
            )}
            {prospect.phone && (
              <div style={{ display: 'flex', gap: '0.625rem', alignItems: 'center' }}>
                <Phone size={15} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                <a href={`tel:${prospect.phone}`} style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>
                  {prospect.phone}
                </a>
              </div>
            )}
            {prospect.email && (
              <div style={{ display: 'flex', gap: '0.625rem', alignItems: 'center' }}>
                <Mail size={15} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                <a href={`mailto:${prospect.email}`} style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'rgba(255,255,255,0.75)', textDecoration: 'none', wordBreak: 'break-all' }}>
                  {prospect.email}
                </a>
              </div>
            )}
          </div>

          {/* CTA button */}
          {(prospect.phone || prospect.email) && (
            <a
              href={prospect.phone ? `tel:${prospect.phone}` : `mailto:${prospect.email}`}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.5rem', padding: '0.75rem 1.5rem', backgroundColor: 'var(--color-primary)', color: 'white', borderRadius: radius, fontFamily: 'var(--font-accent)', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none' }}
            >
              Nous contacter
            </a>
          )}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: '1rem' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '1.25rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', opacity: 0.45 }}>
            © {currentYear} {prospect.company} — Tous droits réservés
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', opacity: 0.35 }}>
            {sector.label} · {prospect.city}
          </p>
        </div>
      </div>
    </footer>
  )
}

// ── Export ─────────────────────────────────────────────────────────────────────

export function Footer(props: BlockProps) {
  switch (props.variant) {
    case 2: return <V2 {...props} />
    default: return <V1 {...props} />
  }
}

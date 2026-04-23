import { LucideIcons } from './icons'
import type { BlockProps } from './types'
import { safeGet } from './utils'
import type { TrustItem } from '@/config/types'

type LucideIcon = React.ComponentType<{ size?: number; strokeWidth?: number; style?: React.CSSProperties }>

function Icon({ name, size = 24, style }: { name: string; size?: number; style?: React.CSSProperties }) {
  const Comp = ((LucideIcons as unknown) as Record<string, LucideIcon>)[name]
  if (!Comp) return <LucideIcons.Star size={size} style={style} />
  return <Comp size={size} style={style} />
}

const FALLBACK_ITEMS: TrustItem[] = [
  { icon: 'ShieldCheck', label: 'Qualité certifiée', subtitle: 'Garantie satisfaction' },
  { icon: 'Clock', label: 'Réactivité', subtitle: 'Réponse sous 24h' },
  { icon: 'Users', label: 'Expertise locale', subtitle: `Présence à proximité` },
  { icon: 'Star', label: 'Clients satisfaits', subtitle: 'Avis vérifiés' },
]

// ── Variant 1: Logo / badge strip, light gray band ────────────────────────────

function V1(props: BlockProps) {
  const { sector, corpusIndex, theme } = props
  const items = safeGet(sector.corpus.trustItems, corpusIndex, FALLBACK_ITEMS)
  const displayItems = items.length > 0 ? items : FALLBACK_ITEMS

  return (
    <section style={{ position: 'relative', backgroundColor: 'var(--color-surface)', borderTop: '1px solid rgba(0,0,0,0.06)', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'clamp(2rem, 5vw, 5rem)', flexWrap: 'wrap' }}>
        {displayItems.map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', opacity: 0.65 }}>
            <Icon name={item.icon} size={20} style={{ color: 'var(--color-primary)' }} />
            <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text)', letterSpacing: '0.03em', whiteSpace: 'nowrap' }}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── Variant 2: 3 badges — icon + short label ──────────────────────────────────

function V2(props: BlockProps) {
  const { sector, corpusIndex, theme } = props
  const items = safeGet(sector.corpus.trustItems, corpusIndex, FALLBACK_ITEMS)
  const displayItems = (items.length > 0 ? items : FALLBACK_ITEMS).slice(0, 3)
  const py = '3.5rem'

  return (
    <section style={{ position: 'relative', backgroundColor: 'var(--color-surface)', padding: `${py} 2rem`, overflow: 'hidden' }}>
      {/* Decorative */}
      <div style={{ position: 'absolute', top: '50%', left: '2%', transform: 'translateY(-50%)', width: '10rem', height: '10rem', borderRadius: '50%', background: 'var(--color-primary)', opacity: 0.04, pointerEvents: 'none' }} />

      <div style={{ maxWidth: '64rem', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
        {displayItems.map((item, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '2rem 1.5rem', backgroundColor: 'white', borderRadius: '0.75rem', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
            <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '0.75rem', backgroundColor: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
              <Icon name={item.icon} size={22} style={{ color: 'white' }} />
            </div>
            <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.9375rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.25rem' }}>
              {item.label}
            </p>
            {item.subtitle && (
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'var(--color-text-light)', lineHeight: 1.5 }}>
                {item.subtitle}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

// ── Variant 3: 4 pictograms — icon + title + subtitle ────────────────────────

function V3(props: BlockProps) {
  const { sector, corpusIndex, theme } = props
  const items = safeGet(sector.corpus.trustItems, corpusIndex, FALLBACK_ITEMS)
  const displayItems = (items.length > 0 ? items : FALLBACK_ITEMS).slice(0, 4)
  const py = '4rem'

  return (
    <section style={{ position: 'relative', backgroundColor: 'var(--color-primary)', padding: `${py} 2rem`, overflow: 'hidden' }}>
      {/* Background pattern */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '72rem', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem' }}>
        {displayItems.map((item, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '0.875rem' }}>
            <div style={{ width: '4rem', height: '4rem', borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name={item.icon} size={24} style={{ color: 'white' }} />
            </div>
            <div>
              <p style={{ fontFamily: 'var(--font-accent)', fontSize: '1rem', fontWeight: 700, color: 'white', marginBottom: '0.25rem' }}>
                {item.label}
              </p>
              {item.subtitle && (
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.5 }}>
                  {item.subtitle}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ── Export ─────────────────────────────────────────────────────────────────────

export function Trust(props: BlockProps) {
  switch (props.variant) {
    case 2: return <V2 {...props} />
    case 3: return <V3 {...props} />
    default: return <V1 {...props} />
  }
}

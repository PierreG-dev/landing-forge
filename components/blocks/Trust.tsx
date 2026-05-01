import { LucideIcons } from './icons'
import type { BlockProps } from './types'
import { safeGet, getBorderRadius } from './utils'
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

// ── Variant 1: Bandeau fin de réassurance — icône + label + séparateurs ────────

function V1(props: BlockProps) {
  const { sector, corpusIndex } = props
  const items = safeGet(sector.corpus.trustItems, corpusIndex, FALLBACK_ITEMS)
  const displayItems = items.length > 0 ? items : FALLBACK_ITEMS

  return (
    <section style={{ position: 'relative', backgroundColor: 'var(--color-surface)', borderTop: '1px solid rgba(0,0,0,0.07)', borderBottom: '1px solid rgba(0,0,0,0.07)', overflow: 'hidden' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${displayItems.length}, 1fr)` }}>
          {displayItems.map((item, i) => (
            <div key={i} style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1.375rem 1.5rem', borderRight: i < displayItems.length - 1 ? '1px solid rgba(0,0,0,0.07)' : 'none' }}>
              {/* Icône dans un carré de couleur */}
              <div style={{ flexShrink: 0, width: '2rem', height: '2rem', borderRadius: '0.375rem', backgroundColor: 'var(--color-primary)', opacity: 0.9, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name={item.icon} size={13} style={{ color: 'white' }} />
              </div>
              {/* Label */}
              <div>
                <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-text)', lineHeight: 1.2, whiteSpace: 'nowrap' }}>
                  {item.label}
                </p>
                {item.subtitle && (
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--color-text-light)', lineHeight: 1.3, whiteSpace: 'nowrap' }}>
                    {item.subtitle}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Variant 2: Badges horizontaux avec bordure accent gauche ───────────────────

function V2(props: BlockProps) {
  const { sector, corpusIndex, theme } = props
  const items = safeGet(sector.corpus.trustItems, corpusIndex, FALLBACK_ITEMS)
  const displayItems = (items.length > 0 ? items : FALLBACK_ITEMS).slice(0, 3)
  const radius = getBorderRadius(theme)

  return (
    <section style={{ position: 'relative', backgroundColor: 'var(--color-surface)', padding: '3.5rem 2rem', overflow: 'hidden' }}>
      {/* Filet structural */}
      <div style={{ position: 'absolute', top: 0, left: '2rem', right: '2rem', height: '1px', background: 'rgba(0,0,0,0.06)' }} />

      <div style={{ maxWidth: '64rem', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
        {displayItems.map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', padding: '1.5rem 1.75rem', backgroundColor: 'white', borderRadius: radius, border: '1px solid rgba(0,0,0,0.07)', borderLeft: '3px solid var(--color-primary)' }}>
            {/* Icône */}
            <div style={{ flexShrink: 0, width: '3rem', height: '3rem', borderRadius: '0.625rem', background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name={item.icon} size={18} style={{ color: 'white' }} />
            </div>
            {/* Texte */}
            <div>
              <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.9375rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.2rem', lineHeight: 1.2 }}>
                {item.label}
              </p>
              {item.subtitle && (
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'var(--color-text-light)', lineHeight: 1.4 }}>
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

// ── Variant 3: Fond primaire — grid avec icône architecturale + contenu ────────

function V3(props: BlockProps) {
  const { sector, corpusIndex } = props
  const items = safeGet(sector.corpus.trustItems, corpusIndex, FALLBACK_ITEMS)
  const displayItems = (items.length > 0 ? items : FALLBACK_ITEMS).slice(0, 4)

  return (
    <section style={{ position: 'relative', backgroundColor: 'var(--color-primary)', padding: '4.5rem 2rem', overflow: 'hidden' }}>
      {/* Filet haut */}
      <div style={{ position: 'absolute', top: 0, left: '2rem', right: '2rem', height: '1px', background: 'rgba(255,255,255,0.12)' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '72rem', margin: '0 auto', display: 'grid', gridTemplateColumns: `repeat(${displayItems.length}, 1fr)` }}>
        {displayItems.map((item, i) => (
          <div key={i} style={{ position: 'relative', padding: '1.5rem 2rem', borderRight: i < displayItems.length - 1 ? '1px solid rgba(255,255,255,0.12)' : 'none', overflow: 'hidden' }}>
            {/* Icône ghost en fond */}
            <div style={{ position: 'absolute', bottom: '-0.5rem', right: '0.75rem', opacity: 0.07, pointerEvents: 'none' }}>
              <Icon name={item.icon} size={64} style={{ color: 'white' }} />
            </div>

            <div style={{ position: 'relative', zIndex: 1 }}>
              {/* Ordinal */}
              <div style={{ fontFamily: 'var(--font-accent)', fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '1rem' }}>
                — {String(i + 1).padStart(2, '0')}
              </div>
              {/* Icône principale */}
              <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Icon name={item.icon} size={16} style={{ color: 'white' }} />
              </div>
              {/* Label */}
              <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.9375rem', fontWeight: 700, color: 'white', marginBottom: '0.375rem', lineHeight: 1.3 }}>
                {item.label}
              </p>
              {/* Trait + subtitle */}
              <div style={{ width: '1.25rem', height: '1px', background: 'rgba(255,255,255,0.35)', marginBottom: '0.5rem' }} />
              {item.subtitle && (
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.5 }}>
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

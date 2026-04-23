import { ChevronLeft, ChevronRight } from './icons'
import type { BlockProps } from './types'
import { getShadowCSS, getBorderRadius, getSectionPadding } from './utils'

const SECTION_TITLE = 'Galerie'

// Gradient tiles used when no real images are available
const TILE_GRADIENTS = [
  'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
  'linear-gradient(160deg, var(--color-secondary) 0%, var(--color-primary) 100%)',
  'linear-gradient(110deg, var(--color-primary) 40%, var(--color-secondary) 100%)',
  'linear-gradient(200deg, var(--color-secondary) 20%, var(--color-primary) 100%)',
  'linear-gradient(135deg, var(--color-primary) 20%, var(--color-secondary) 80%)',
  'linear-gradient(155deg, var(--color-secondary) 0%, var(--color-primary) 70%)',
]

function getImages(sector: BlockProps['sector']): string[] {
  return sector.images.gallery.length > 0 ? sector.images.gallery : []
}

type TileProps = { src?: string; gradient: string; radius: string; style?: React.CSSProperties; label?: string }

function GradientTile({ src, gradient, radius, style, label }: TileProps) {
  if (src) {
    return <img src={src} alt={label ?? ''} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: radius, display: 'block', ...style }} />
  }
  return (
    <div style={{ width: '100%', height: '100%', borderRadius: radius, background: gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', ...style }}>
      {label && <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: 'rgba(255,255,255,0.3)', textAlign: 'center', padding: '0.5rem' }}>{label}</span>}
    </div>
  )
}

// ── Variant 1: Regular 3-col grid ─────────────────────────────────────────────

function V1(props: BlockProps) {
  const { sector, theme, prospect } = props
  const images = getImages(sector)
  const radius = getBorderRadius(theme)
  const shadow = getShadowCSS(theme)
  const py = getSectionPadding(theme)
  const count = Math.max(images.length, 6)

  return (
    <section style={{ position: 'relative', backgroundColor: 'var(--color-surface)', padding: `${py} 2rem`, overflow: 'hidden' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
            {SECTION_TITLE}
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>
            Nos réalisations à {prospect.city}
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
          {Array.from({ length: count }).map((_, i) => (
            <div key={i} style={{ aspectRatio: '4/3', borderRadius: radius, overflow: 'hidden', boxShadow: shadow }}>
              <GradientTile src={images[i]} gradient={TILE_GRADIENTS[i % TILE_GRADIENTS.length]} radius={radius} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Variant 2: Masonry CSS varying heights ────────────────────────────────────

function V2(props: BlockProps) {
  const { sector, theme, prospect } = props
  const images = getImages(sector)
  const radius = getBorderRadius(theme)
  const shadow = getShadowCSS(theme)
  const py = getSectionPadding(theme)
  const count = Math.max(images.length, 6)
  const heights = ['260px', '340px', '200px', '300px', '240px', '380px']

  return (
    <section style={{ position: 'relative', backgroundColor: 'var(--color-surface)', padding: `${py} 2rem`, overflow: 'hidden' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
            {SECTION_TITLE}
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>
            Nos réalisations
          </h2>
        </div>

        <div style={{ columnCount: 3, columnGap: '1rem' }}>
          {Array.from({ length: count }).map((_, i) => (
            <div key={i} style={{ marginBottom: '1rem', breakInside: 'avoid', borderRadius: radius, overflow: 'hidden', boxShadow: shadow, height: heights[i % heights.length] }}>
              <GradientTile src={images[i]} gradient={TILE_GRADIENTS[i % TILE_GRADIENTS.length]} radius={radius} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Variant 3: Full-width slider with dots navigation ─────────────────────────

function V3(props: BlockProps) {
  const { sector, theme, prospect } = props
  const images = getImages(sector)
  const radius = getBorderRadius(theme)
  const py = getSectionPadding(theme)
  const count = Math.max(images.length, 4)
  const slides = Array.from({ length: count })

  return (
    <section style={{ position: 'relative', backgroundColor: 'var(--color-surface)', padding: `${py} 2rem`, overflow: 'hidden' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
            {SECTION_TITLE}
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>
            Nos réalisations
          </h2>
        </div>

        {/* Slider — shows first slide statically */}
        <div style={{ position: 'relative', borderRadius: radius, overflow: 'hidden', aspectRatio: '16/7' }}>
          <GradientTile src={images[0]} gradient={TILE_GRADIENTS[0]} radius={radius} style={{ borderRadius: 0, height: '100%' }} />

          {/* Static nav indicators */}
          <div style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', zIndex: 10, width: '2.75rem', height: '2.75rem', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
            <ChevronLeft size={20} style={{ color: 'var(--color-text)' }} />
          </div>
          <div style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', zIndex: 10, width: '2.75rem', height: '2.75rem', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
            <ChevronRight size={20} style={{ color: 'var(--color-text)' }} />
          </div>
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.25rem' }}>
          {slides.map((_, i) => (
            <div key={i} style={{ width: i === 0 ? '1.75rem' : '0.5rem', height: '0.5rem', borderRadius: '999px', backgroundColor: i === 0 ? 'var(--color-primary)' : 'rgba(0,0,0,0.18)' }} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Variant 4: Large main image + 4 thumbnails 2×2 ───────────────────────────

function V4(props: BlockProps) {
  const { sector, theme, prospect } = props
  const images = getImages(sector)
  const radius = getBorderRadius(theme)
  const shadow = getShadowCSS(theme)
  const py = getSectionPadding(theme)

  return (
    <section style={{ position: 'relative', backgroundColor: 'var(--color-surface)', padding: `${py} 2rem`, overflow: 'hidden' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <div style={{ marginBottom: '3rem' }}>
          <p style={{ fontFamily: 'var(--font-accent)', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
            {SECTION_TITLE}
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, color: 'var(--color-text)', lineHeight: 1.2 }}>
            Nos réalisations à {prospect.city}
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '1rem' }}>
          {/* Main large image */}
          <div style={{ borderRadius: radius, overflow: 'hidden', boxShadow: shadow, gridRow: 'span 2', minHeight: '400px' }}>
            <GradientTile src={images[0]} gradient={TILE_GRADIENTS[0]} radius={radius} style={{ height: '100%' }} />
          </div>

          {/* 2×2 thumbnails */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} style={{ borderRadius: radius, overflow: 'hidden', boxShadow: shadow, aspectRatio: '1' }}>
                <GradientTile src={images[i]} gradient={TILE_GRADIENTS[i % TILE_GRADIENTS.length]} radius={radius} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Export ─────────────────────────────────────────────────────────────────────

export function Gallery(props: BlockProps) {
  switch (props.variant) {
    case 2: return <V2 {...props} />
    case 3: return <V3 {...props} />
    case 4: return <V4 {...props} />
    default: return <V1 {...props} />
  }
}

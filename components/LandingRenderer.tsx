import type { GeneratedLanding, BlockConfig } from '@/lib/engine/assembler'
import { Hero } from './blocks/Hero'
import { Trust } from './blocks/Trust'
import { Services } from './blocks/Services'
import { Stats } from './blocks/Stats'
import { About } from './blocks/About'
import { Gallery } from './blocks/Gallery'
import { Testimonials } from './blocks/Testimonials'
import { FAQ } from './blocks/FAQ'
import { CTA } from './blocks/CTA'
import { Footer } from './blocks/Footer'
import type { BlockProps } from './blocks/types'

type BlockComponent = (props: BlockProps) => React.ReactNode

const BLOCK_MAP: Record<string, BlockComponent> = {
  hero: Hero,
  trust: Trust,
  services: Services,
  stats: Stats,
  about: About,
  gallery: Gallery,
  testimonials: Testimonials,
  faq: FAQ,
  cta: CTA,
  footer: Footer,
}

export function LandingRenderer({ landing }: { landing: GeneratedLanding }) {
  const sharedProps = {
    prospect: landing.prospect,
    sector: landing.sector,
    theme: landing.theme,
    colors: landing.colors,
    fonts: landing.fonts,
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: landing.css }} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href={landing.fonts.googleFontsUrl} rel="stylesheet" />
      {landing.blocks.map((block: BlockConfig, i: number) => {
        const Component = BLOCK_MAP[block.type]
        if (!Component) return null
        return (
          <Component
            key={i}
            variant={block.variant}
            corpusIndex={block.corpusIndex}
            {...sharedProps}
          />
        )
      })}
    </>
  )
}

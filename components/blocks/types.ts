import type { Theme, ColorCombo, FontCombo, Sector } from '@/config/types'
import type { ProspectInput } from '@/lib/engine/assembler'

export interface BlockProps {
  variant: number
  corpusIndex: number
  prospect: ProspectInput
  sector: Sector
  theme: Theme
  colors: ColorCombo
  fonts: FontCombo
}

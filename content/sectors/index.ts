import type { Sector, SectorId } from '@/config/types'
import { restauration } from './restauration'
import { artisanBatiment } from './artisan-batiment'
import { beaute } from './beaute'
import { sante } from './sante'
import { juridique } from './juridique'
import { immobilier } from './immobilier'
import { sportCoaching } from './sport-coaching'
import { commerceLocal } from './commerce-local'
import { informatique } from './informatique'
import { evenementiel } from './evenementiel'

export const sectors: Sector[] = [
  restauration,
  artisanBatiment,
  beaute,
  sante,
  juridique,
  immobilier,
  sportCoaching,
  commerceLocal,
  informatique,
  evenementiel,
]

export const sectorById: Record<SectorId, Sector> = Object.fromEntries(
  sectors.map((s) => [s.id, s])
) as Record<SectorId, Sector>

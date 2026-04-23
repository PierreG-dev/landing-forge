import React from 'react'

type IconProps = {
  size?: number
  style?: React.CSSProperties
  className?: string
  fill?: string
  stroke?: string
  strokeWidth?: number
}

export type LucideRecord = Record<string, React.ComponentType<IconProps>>

function icon(...paths: string[]) {
  return function Icon({ size = 24, style, className, fill = 'none', stroke = 'currentColor', strokeWidth = 2 }: IconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={style}
        className={className}
      >
        {paths.map((d, i) => <path key={i} d={d} />)}
      </svg>
    )
  }
}

function circleIcon(cx: number, cy: number, r: number, extraPath?: string) {
  return function Icon({ size = 24, style, className, fill = 'none', stroke = 'currentColor', strokeWidth = 2 }: IconProps) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={style} className={className}>
        <circle cx={cx} cy={cy} r={r} />
        {extraPath && <path d={extraPath} />}
      </svg>
    )
  }
}

export const Phone = icon('M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.73 14a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.48 3h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 17z')
export const Mail = icon('M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z', 'M22 6l-10 7L2 6')
export const MapPin = icon('M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z', 'M12 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6')
export const ArrowDown = icon('M12 5v14', 'M19 12l-7 7-7-7')
export const ArrowRight = icon('M5 12h14', 'M12 5l7 7-7 7')
export const ChevronLeft = icon('M15 18l-6-6 6-6')
export const ChevronRight = icon('M9 18l6-6-6-6')
export const Star = icon('M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z')

export const LucideIcons: LucideRecord = {
  Award: icon('M12 15l-8 8V7l8-8 8 8v16z', 'M12 15V7', 'M8 11h8'),
  ShieldCheck: icon('M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', 'M9 12l2 2 4-4'),
  Leaf: icon('M2 22 16 8', 'M16 8s-4-6 6-6c0 10-6 6-6 6'),
  Clock: circleIcon(12, 12, 10, 'M12 6v6l4 2'),
  FileText: icon('M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z', 'M14 2v6h6', 'M16 13H8', 'M16 17H8', 'M10 9H8'),
  ThumbsUp: icon('M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3z', 'M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3'),
  Star: icon('M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'),
  Users: icon('M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2', 'M23 21v-2a4 4 0 0 0-3-3.87', 'M16 3.13a4 4 0 0 1 0 7.75', 'M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8'),
  Truck: icon('M1 3h15v13H1z', 'M16 8h4l3 3v5h-7V8z', 'M5.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z', 'M18.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z'),
  Heart: icon('M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z'),
  Sparkles: icon('M12 3l1.09 3.26L16.5 7.5l-3.41 1.24L12 12l-1.09-3.26L7.5 7.5l3.41-1.24L12 3z', 'M5 17l.55 1.64L7.2 19.5l-1.65.86L5 22l-.55-1.64L2.8 19.5l1.65-.86L5 17z', 'M19 17l.55 1.64 1.65.86-1.65.86L19 22l-.55-1.64-1.65-.86 1.65-.86L19 17z'),
  Activity: icon('M22 12h-4l-3 9L9 3l-3 9H2'),
  Dumbbell: icon('M6.5 6.5l11 11', 'M21 2l-1.5 1.5-5 5-1.5-1.5L17.5 3.5 21 2z', 'M3 22l1.5-1.5 5-5 1.5 1.5-5 5L3 22z', 'M18 5l-1 1', 'M5 18l1 1'),
  Zap: icon('M13 2L3 14h9l-1 8 10-12h-9l1-8z'),
  Trophy: icon('M6 9H3.5a2.5 2.5 0 0 1 0-5H6', 'M18 9h2.5a2.5 2.5 0 0 0 0-5H18', 'M4 22h16', 'M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22', 'M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22', 'M18 2H6v7a6 6 0 0 0 12 0V2z'),
  UtensilsCrossed: icon('M16 2l4 4-1.5 1.5-4-4L16 2z', 'M8.93 8.93l4.14 4.14', 'M14.5 12.5l-2.83-2.83-4.95 4.95a2 2 0 1 0 2.83 2.83l4.95-4.95z', 'M8 2L2 8l3 3 3-3'),
  ChefHat: icon('M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6z', 'M6 17h12'),
  Scissors: icon('M6 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6z', 'M18 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z', 'M20 4 8.12 15.88', 'M14.47 14.48 20 20', 'M8.12 8.12 12 12'),
  Scale: icon('M16 16l3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1z', 'M2 16l3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1z', 'M7 21h10', 'M12 3v18', 'M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2'),
  BookOpen: icon('M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z', 'M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z'),
  Shield: icon('M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'),
  Home: icon('M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z', 'M9 22V12h6v10'),
  Key: icon('M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4'),
  Building: icon('M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18z', 'M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2', 'M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 0-2 2h-2', 'M10 6h4', 'M10 10h4', 'M10 14h4', 'M10 18h4'),
  Code2: icon('M18 16l4-4-4-4', 'M6 8l-4 4 4 4', 'M14.5 4l-5 16'),
  Monitor: icon('M2 3h20v14H2z', 'M8 21h8', 'M12 17v4'),
  Cpu: icon('M18 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z', 'M9 9h6v6H9z', 'M9 1v3', 'M15 1v3', 'M9 20v3', 'M15 20v3', 'M20 9h3', 'M20 14h3', 'M1 9h3', 'M1 14h3'),
  Camera: icon('M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z', 'M12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8'),
  Music: icon('M9 18V5l12-2v13', 'M9 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6z', 'M21 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'),
  PartyPopper: icon('M5.8 11.3 2 22l10.7-3.79', 'M4 3h.01', 'M22 8h.01', 'M15 2h.01', 'M22 20h.01', 'M22 2 11 13', 'M22 2l-5 20-4-9-9-4 20-7z'),
  ShoppingBag: icon('M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z', 'M3 6h18', 'M16 10a4 4 0 0 1-8 0'),
  Store: icon('M2 3h20v4H2z', 'M4 7v13h16V7', 'M10 11v6', 'M14 11v6'),
  Tag: icon('M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z', 'M7 7h.01'),
  Hammer: icon('M15.12 5.88l-8.95 8.94a3 3 0 1 0 4.24 4.24l8.95-8.95A3 3 0 0 0 15.12 5.88z', 'M6 2L2 6 4.17 8.17 8 4.34 6 2z'),
  HardHat: icon('M2 22a10 10 0 0 1 20 0', 'M6 22V12a6 6 0 0 1 12 0v10', 'M2 14h20'),
  Wrench: icon('M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z'),
  Stethoscope: icon('M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3', 'M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4'),
}

export type SubstVars = {
  company?: string
  city?: string
  service1?: string
  service2?: string
  service3?: string
  tagline?: string
  phone?: string
  email?: string
}

export function substitute(text: string, vars: SubstVars): string {
  return text.replace(/\{\{(\w+)\}\}/g, (_, key: string) => {
    const val = (vars as Record<string, string | undefined>)[key]
    return val ?? ''
  })
}

export function substituteDeep<T>(obj: T, vars: SubstVars): T {
  if (typeof obj === 'string') return substitute(obj, vars) as unknown as T
  if (Array.isArray(obj)) return obj.map((item) => substituteDeep(item, vars)) as unknown as T
  if (obj !== null && typeof obj === 'object') {
    return Object.fromEntries(
      Object.entries(obj as Record<string, unknown>).map(([k, v]) => [k, substituteDeep(v, vars)])
    ) as T
  }
  return obj
}

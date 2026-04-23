export function generateSlug(companyName: string): string {
  const base = companyName
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 40)

  const suffix = Date.now().toString(36)
  return `${base}-${suffix}`
}

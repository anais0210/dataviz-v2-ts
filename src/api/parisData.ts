import { useQuery } from '@tanstack/react-query'

export type ParisShoot = {
  title: string
  director?: string
  type: string
  address?: string
  lat?: number
  lng?: number
  year?: number
  arrondissement?: string
}

function parseNumber(value: unknown): number | undefined {
  if (value === null || value === undefined) return undefined
  if (typeof value === 'number') return Number.isFinite(value) ? value : undefined
  const normalized = String(value).replace(/\s/g, '').replace(/\u202f/g, '').replace(/,/g, '.')
  const num = Number(normalized)
  return Number.isFinite(num) ? num : undefined
}

function normalizeApiRow(row: Record<string, unknown>): ParisShoot | null {
  const title = String(row.nom_tournage ?? '').trim()
  if (!title) return null
  const director = (row.nom_realisateur as string) ?? undefined
  const type = String(row.type_tournage ?? 'Inconnu').trim()
  const address = (row.adresse_lieu as string) ?? undefined
  const lat = parseNumber((row.geo_point_2d as any)?.lat ?? row.coord_y)
  const lng = parseNumber((row.geo_point_2d as any)?.lon ?? row.coord_x)
  const year = parseNumber(row.annee_tournage)
  const arrondissement = (row.ardt_lieu as string) ?? undefined
  return { title, director, type, address, lat, lng, year, arrondissement }
}

async function fetchParisShootsPage(offset: number, limit: number): Promise<{ total: number; items: ParisShoot[] }> {
  const url = new URL('https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/lieux-de-tournage-a-paris/records')
  const clamped = Math.min(Math.max(1, limit), 100) // Opendatasoft v2.1 cap ~100
  url.searchParams.set('limit', String(clamped))
  url.searchParams.set('offset', String(offset))
  const res = await fetch(url.toString())
  if (!res.ok) throw new Error('Paris Data API error')
  const json = (await res.json()) as { total_count: number; results: Record<string, unknown>[] }
  const items = (json.results ?? []).map(normalizeApiRow).filter(Boolean) as ParisShoot[]
  return { total: json.total_count ?? items.length, items }
}

export async function fetchParisShoots(maxRecords = 5000): Promise<ParisShoot[]> {
  const limit = 999
  let offset = 0
  let total = Infinity
  const acc: ParisShoot[] = []
  while (offset < total && acc.length < maxRecords) {
    const { total: t, items } = await fetchParisShootsPage(offset, limit)
    total = t
    acc.push(...items)
    offset += limit
  }
  return acc.slice(0, maxRecords)
}

export function useParisShoots(maxRecords = 5000) {
  return useQuery({ queryKey: ['parisShoots', maxRecords], queryFn: () => fetchParisShoots(maxRecords), staleTime: 1000 * 60 * 30 })
}



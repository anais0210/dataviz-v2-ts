import { useMemo } from 'react'
import { useParisShoots } from '../api/parisData'
import ChartTitle from '../components/ChartTitle'
import BarChartGenre from '../components/BarChartGenre'
import LineChartYears, { type YearDatum } from '../components/LineChartYears'
import StackedAreaTypes from '../components/StackedAreaTypes'
import DataTableAccessible from '../components/DataTableAccessible'

export default function Analyse() {
  const { data: shoots, isLoading: shootsLoading, isError: shootsError, error: shootsErr } = useParisShoots(500)

  const shootsByYear: YearDatum[] = useMemo(() => {
    const acc = new Map<number, number>()
    for (const s of shoots ?? []) {
      const y = typeof s.year === 'number' && Number.isFinite(s.year) ? s.year : 0
      acc.set(y, (acc.get(y) ?? 0) + 1)
    }
    return Array.from(acc.entries())
      .filter(([year]) => year !== 0)
      .map(([year, count]) => ({ year, entries: count }))
      .sort((a, b) => a.year - b.year)
  }, [shoots])

  const shootsByType: { genre: string; entries: number }[] = useMemo(() => {
    const acc = new Map<string, number>()
    for (const s of shoots ?? []) {
      const key = s.type || 'Inconnu'
      acc.set(key, (acc.get(key) ?? 0) + 1)
    }
    return Array.from(acc.entries())
      .map(([genre, entries]) => ({ genre, entries }))
      .sort((a, b) => b.entries - a.entries)
  }, [shoots])

  const shootsByArrdt: { genre: string; entries: number }[] = useMemo(() => {
    const acc = new Map<string, number>()
    for (const s of shoots ?? []) {
      const key = s.arrondissement || 'NA'
      acc.set(key, (acc.get(key) ?? 0) + 1)
    }
    return Array.from(acc.entries())
      .map(([genre, entries]) => ({ genre, entries }))
      .sort((a, b) => b.entries - a.entries)
  }, [shoots])

  const shootsTopDirectors: { genre: string; entries: number }[] = useMemo(() => {
    const acc = new Map<string, number>()
    const splitAndCount = (raw?: string) => {
      if (!raw) return
      const parts = String(raw)
        .split(/[,;]|\s-\s/)
        .map((p) => p.trim())
        .filter(Boolean)
      for (const name of parts) {
        acc.set(name, (acc.get(name) ?? 0) + 1)
      }
    }
    for (const s of shoots ?? []) splitAndCount(s.director)
    return Array.from(acc.entries())
      .map(([genre, entries]) => ({ genre, entries }))
      .sort((a, b) => b.entries - a.entries)
      .slice(0, 10)
  }, [shoots])

  const stackedTypesData: Array<Record<string, number>> & { [i: number]: { year: number } } = useMemo(() => {
    if (!shoots || shoots.length === 0) return [] as any
    // Top 5 types by total
    const totals = new Map<string, number>()
    for (const s of shoots) {
      const t = s.type || 'Inconnu'
      totals.set(t, (totals.get(t) ?? 0) + 1)
    }
    const topTypes = Array.from(totals.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([t]) => t)

    const byYear = new Map<number, Record<string, number>>()
    for (const s of shoots) {
      const y = typeof s.year === 'number' && Number.isFinite(s.year) ? s.year : 0
      if (y === 0) continue
      const type = s.type || 'Inconnu'
      const bucket = byYear.get(y) ?? { year: y }
      const key = topTypes.includes(type) ? type : 'Autres'
      bucket[key] = (bucket[key] ?? 0) as number
      bucket[key] = (bucket[key] as number) + 1
      byYear.set(y, bucket)
    }
    return Array.from(byYear.values()).sort((a, b) => (a.year as number) - (b.year as number)) as any
  }, [shoots])

  return (
    <section className="page page-analyse">
      <h2 className="section-title">Analyse des tournages à Paris</h2>

      {shootsLoading && <p className="status">Chargement…</p>}
      {(shootsError || !shoots) && (
        <div className="status error">
          <p>Impossible de charger les tournages.</p>
          {shootsErr && (
            <details>
              <summary>Détails</summary>
              <pre>{String((shootsErr as Error).message)}</pre>
            </details>
          )}
        </div>
      )}

      {shoots && (
        <>
          <div className="cards-grid">
            <div className="card-panel">
              <ChartTitle>Nombre de tournages par année</ChartTitle>
              <LineChartYears data={shootsByYear} />
            </div>

            <div className="card-panel">
              <ChartTitle>Types × Année (empilé)</ChartTitle>
              <StackedAreaTypes
                data={stackedTypesData}
                seriesKeys={(() => {
                  const keys = new Set<string>()
                  for (const row of stackedTypesData) {
                    Object.keys(row)
                      .filter((k) => k !== 'year')
                      .forEach((k) => keys.add(k))
                  }
                  return Array.from(keys)
                })()}
              />
            </div>

            <div className="card-panel">
              <ChartTitle>Répartition par type de tournage</ChartTitle>
              <BarChartGenre data={shootsByType} />
            </div>

            <div className="card-panel">
              <ChartTitle>Tournages par arrondissement</ChartTitle>
              <BarChartGenre data={shootsByArrdt} />
            </div>

            <div className="card-panel">
              <ChartTitle>Top réalisateurs</ChartTitle>
              <BarChartGenre data={shootsTopDirectors} />
            </div>
          </div>
        </>
      )}
    </section>
  )
}



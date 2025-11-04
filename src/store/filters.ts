import { create } from 'zustand'

export type FiltersState = {
  selectedGenres: Set<string>
  yearRange: [number, number] | null
  setSelectedGenres: (genres: Set<string>) => void
  setYearRange: (range: [number, number] | null) => void
  clearFilters: () => void
}

export const useFiltersStore = create<FiltersState>((set) => ({
  selectedGenres: new Set<string>(),
  yearRange: null,
  setSelectedGenres: (genres) => set({ selectedGenres: new Set(genres) }),
  setYearRange: (range) => set({ yearRange: range }),
  clearFilters: () => set({ selectedGenres: new Set<string>(), yearRange: null }),
}))



// Optional API (S3): Région Île-de-France supported/awarded films
// Placeholder types and hook for future extension
export type IdfAwardRecord = {
  title: string
  year?: number
  supportAmountEur?: number
  award?: string
}

export async function fetchIdfAwards(): Promise<IdfAwardRecord[]> {
  // Later: implement remote API call with caching/pagination
  return []
}



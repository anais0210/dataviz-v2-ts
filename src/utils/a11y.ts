export function formatNumberFr(value: number): string {
  return new Intl.NumberFormat('fr-FR').format(value)
}

export function cx(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ')
}



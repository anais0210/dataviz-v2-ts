import type { ReactNode } from 'react'

export type Column<T> = {
  key: keyof T
  header: string
  render?: (row: T) => ReactNode
}

type Props<T extends Record<string, unknown>> = {
  caption: string
  columns: Column<T>[]
  rows: T[]
}

export default function DataTableAccessible<T extends Record<string, unknown>>({ caption, columns, rows }: Props<T>) {
  return (
    <table role="table">
      <caption>{caption}</caption>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={String(col.key)} scope="col">
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, idx) => (
          <tr key={idx}>
            {columns.map((col) => (
              <td key={String(col.key)}>{col.render ? col.render(row) : (row[col.key] as ReactNode)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}



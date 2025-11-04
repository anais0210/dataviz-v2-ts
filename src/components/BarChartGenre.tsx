import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { formatNumberFr } from '../utils/a11y'

export type GenreDatum = { genre: string; entries: number }

type Props = {
  data: GenreDatum[]
}

export default function BarChartGenre({ data }: Props) {
  return (
    <div style={{ width: '100%', height: 320 }}>
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 12, right: 16, bottom: 8, left: 8 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="genre" />
          <YAxis tickFormatter={(v) => formatNumberFr(v)} />
          <Tooltip formatter={(value: number) => formatNumberFr(value)} />
          <Bar dataKey="entries" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}



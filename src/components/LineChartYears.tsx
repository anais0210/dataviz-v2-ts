import { Line, LineChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { formatNumberFr } from '../utils/a11y'

export type YearDatum = { year: number; entries: number }

type Props = {
  data: YearDatum[]
}

export default function LineChartYears({ data }: Props) {
  return (
    <div style={{ width: '100%', height: 320 }}>
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 12, right: 16, bottom: 8, left: 8 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis tickFormatter={(v) => formatNumberFr(v)} />
          <Tooltip formatter={(value: number) => formatNumberFr(value)} />
          <Line type="monotone" dataKey="entries" stroke="#82ca9d" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}



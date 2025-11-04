import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { formatNumberFr } from '../utils/a11y'

type Props = {
  data: Array<Record<string, number>> & { [i: number]: { year: number } }
  seriesKeys: string[]
}

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50', '#8dd1e1', '#a4de6c', '#d0ed57']

export default function StackedAreaTypes({ data, seriesKeys }: Props) {
  return (
    <div style={{ width: '100%', height: 320 }}>
      <ResponsiveContainer>
        <AreaChart data={data} margin={{ top: 12, right: 16, bottom: 8, left: 8 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis tickFormatter={(v) => formatNumberFr(v)} allowDecimals={false} />
          <Tooltip formatter={(value: number) => formatNumberFr(value)} />
          <Legend />
          {seriesKeys.map((key, idx) => (
            <Area key={key} type="monotone" dataKey={key} stackId="1" stroke={COLORS[idx % COLORS.length]} fill={COLORS[idx % COLORS.length]} />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}



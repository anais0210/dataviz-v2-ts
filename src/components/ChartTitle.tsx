type Props = {
  children: string
}

export default function ChartTitle({ children }: Props) {
  return <h3 style={{ margin: '1rem 0 0.5rem' }}>{children}</h3>
}



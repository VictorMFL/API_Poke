export type DataProps = {
  count: number
  next: string | null
  previous: string | null
  results: ResultsProps[]
}

interface ResultsProps {
  name: string
  url: string
}
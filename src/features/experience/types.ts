interface Position {
  name: string
  description: string
  dateRange: string
}

export interface Experience {
  company: string
  yearRange: string
  positions: Position[]
}

// Experience Types
// Type definitions for experience domain

export interface WorkPosition {
  name: string
  description: string
  dateRange: string
  startDate: string
  endDate?: string
  location: string
  url?: string
  summary?: string
  highlights?: string[]
}

export interface WorkGroup {
  company: string
  yearRange: string
  positions: WorkPosition[]
}

export interface ExperienceData {
  work: WorkGroup[]
}

export interface SerializedExperience {
  workGroups: WorkGroup[]
} 

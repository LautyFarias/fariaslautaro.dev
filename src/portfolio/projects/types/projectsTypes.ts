// Projects Types
// Type definitions for projects domain

export interface Project {
  highlights: string[]
  keywords: string[]
  roles: string[]
  name: string
  description: string
  type: string
  startDate: string
  url: string
  entity: string
}

export interface ProjectsData {
  projects: Project[]
} 

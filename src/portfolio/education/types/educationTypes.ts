// Education Types
// Type definitions for education domain

export interface Education {
  area: string
  institution: string
  score: string
  courses: string[]
  endDate: string
  studyType: string
  url: string
  startDate: string
}

export interface EducationData {
  education: Education[]
} 

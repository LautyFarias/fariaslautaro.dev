// Skills Types
// Type definitions for skills domain

export interface Language {
  fluency: string
  language: string
}

export interface SkillsData {
  languages: Language[]
} 

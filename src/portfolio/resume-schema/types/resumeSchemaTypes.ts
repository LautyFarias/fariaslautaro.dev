// Resume Schema Types
// Type definitions for resume schema domain

import type { Resume } from '../lib/zodSchemas'

export type ResumeSchema = ReturnType<typeof Resume.parse>

export interface ResumeData {
  resume: ResumeSchema
}

export interface ResumeValidationResult {
  success: boolean
  data?: ResumeSchema
  errors?: string[]
} 

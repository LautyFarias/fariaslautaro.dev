// Resume Schema Service
// Business logic for resume schema operations

import { parseResume } from './lib/parser'
import type { ResumeSchema, ResumeValidationResult } from './types/resumeSchemaTypes'

export class ResumeSchemaService {
  /**
   * Parse and validate resume data
   */
  static parseResumeData(resumeData: any): ResumeSchema {
    return parseResume(resumeData)
  }

  /**
   * Validate resume data with error handling
   */
  static validateResumeData(resumeData: any): ResumeValidationResult {
    try {
      const parsedData = this.parseResumeData(resumeData)
      return {
        success: true,
        data: parsedData
      }
    } catch (error) {
      return {
        success: false,
        errors: error instanceof Error ? [error.message] : ['Unknown validation error']
      }
    }
  }

  /**
   * Get resume data with validation
   */
  static getResumeData(resumeData: any): ResumeSchema {
    const validation = this.validateResumeData(resumeData)
    
    if (!validation.success) {
      throw new Error(`Resume validation failed: ${validation.errors?.join(', ')}`)
    }
    
    return validation.data!
  }
} 

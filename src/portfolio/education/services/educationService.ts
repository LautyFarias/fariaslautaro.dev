// Education Service
// Business logic for education operations

import type { EducationData } from '../types/educationTypes'

export class EducationService {
  /**
   * Extract education data from resume data
   */
  static extractEducationData(resumeData: any): EducationData {
    return {
      education: resumeData.education
    }
  }

  /**
   * Format education date range
   */
  static formatDateRange(startDate: string, endDate: string): string {
    return `${startDate} - ${endDate}`
  }
} 

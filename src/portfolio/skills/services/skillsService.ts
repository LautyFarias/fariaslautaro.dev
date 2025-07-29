// Skills Service
// Business logic for skills operations

import type { SkillsData } from '../types/skillsTypes'

export class SkillsService {
  /**
   * Extract skills data from resume data
   */
  static extractSkillsData(resumeData: any): SkillsData {
    return {
      languages: resumeData.languages
    }
  }
} 

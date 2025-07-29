// Projects Service
// Business logic for projects operations

import type { ProjectsData } from '../types/projectsTypes'

export class ProjectsService {
  /**
   * Extract projects data from resume data
   */
  static extractProjectsData(resumeData: any): ProjectsData {
    return {
      projects: resumeData.projects
    }
  }

  /**
   * Format project date
   */
  static formatProjectDate(date: string): string {
    return new Date(date).getFullYear().toString()
  }
} 

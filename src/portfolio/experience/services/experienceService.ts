// Experience Service
// Business logic for experience operations

import type { ExperienceData, SerializedExperience, WorkGroup, WorkPosition } from '../types/experienceTypes'

export class ExperienceService {
  /**
   * Serialize dates for display
   */
  static serializeDates(startDate: Date, endDate?: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      timeZone: "UTC",
    }

    return `${startDate.toLocaleString(undefined, options)} - ${endDate?.toLocaleString(undefined, options) ?? "Actualidad"}`
  }

  /**
   * Group work positions by company
   */
  static groupWorkByCompany(workData: any[]): WorkGroup[] {
    const companyGroups = new Map<string, WorkPosition[]>()

    workData.forEach((work) => {
      const company = work.name
      const position: WorkPosition = {
        name: work.position,
        description: work.description ?? "",
        dateRange: this.serializeDates(work.startDate, work.endDate),
        startDate: work.startDate,
        endDate: work.endDate,
        location: work.location,
        url: work.url,
        summary: work.summary,
        highlights: work.highlights
      }

      if (!companyGroups.has(company)) {
        companyGroups.set(company, [])
      }
      companyGroups.get(company)!.push(position)
    })

    return Array.from(companyGroups.entries()).map(([company, positions]) => ({
      company,
      yearRange: this.getYearRange(positions),
      positions
    }))
  }

  /**
   * Get year range for a group of positions
   */
  static getYearRange(positions: WorkPosition[]): string {
    if (positions.length === 0) return ""
    
    const startDates = positions.map(p => new Date(p.startDate))
    const endDates = positions
      .map(p => p.endDate ? new Date(p.endDate) : new Date())
      .filter(date => !isNaN(date.getTime()))
    
    const earliestStart = new Date(Math.min(...startDates.map(d => d.getTime())))
    const latestEnd = new Date(Math.max(...endDates.map(d => d.getTime())))
    
    const startYear = earliestStart.getFullYear()
    const endYear = latestEnd.getFullYear()
    
    return startYear === endYear ? `${startYear}` : `${startYear} - ${endYear === new Date().getFullYear() ? 'Actualidad' : endYear}`
  }

  /**
   * Serialize experience data for component props
   */
  static serializeExperience(workData: any[]): SerializedExperience {
    const workGroups = this.groupWorkByCompany(workData)
    
    return {
      workGroups
    }
  }

  /**
   * Extract experience data from resume data
   */
  static extractExperienceData(resumeData: any): ExperienceData {
    return {
      work: resumeData.work
    }
  }
} 

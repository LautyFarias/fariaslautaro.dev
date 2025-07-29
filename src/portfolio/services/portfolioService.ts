// Portfolio Service
// Main service that orchestrates all portfolio domains

import { EducationService } from '../education/services/educationService'
import { ExperienceService } from '../experience/services/experienceService'
import { ProfileService } from '../profile/services/profileService'
import { ProjectsService } from '../projects/services/projectsService'
import { ResumeSchemaService } from '../resume-schema/resumeSchemaService'
import { SkillsService } from '../skills/services/skillsService'

export class PortfolioService {
  /**
   * Process resume data and extract all portfolio information
   */
  static processResumeData(resumeData: any) {
    // First validate the resume data
    const validatedResume = ResumeSchemaService.getResumeData(resumeData)
    
    return {
      profile: ProfileService.extractProfileData(validatedResume),
      experience: ExperienceService.extractExperienceData(validatedResume),
      education: EducationService.extractEducationData(validatedResume),
      skills: SkillsService.extractSkillsData(validatedResume),
      projects: ProjectsService.extractProjectsData(validatedResume)
    }
  }

  /**
   * Get all portfolio data ready for components
   */
  static getPortfolioData(resumeData: any) {
    const data = this.processResumeData(resumeData)
    
    return {
      profileHero: ProfileService.getProfileHeroProps(data.profile),
      experience: ExperienceService.serializeExperience(data.experience.work),
      education: data.education,
      skills: data.skills,
      projects: data.projects
    }
  }
} 

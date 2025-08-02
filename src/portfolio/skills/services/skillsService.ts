// Skills Service
// Business logic for skills operations

import type { Skill, SkillsSectionProps } from "../types/skillsTypes"

export class SkillsService {
  /**
   * Extrae las skills del resume y las desglosa si vienen compuestas
   */
  static extractSkillsData(resumeData: any): SkillsSectionProps {
    const skills: Skill[] = []
    if (Array.isArray(resumeData.skills)) {
      resumeData.skills.forEach((item: any) => {
        if (typeof item.name === "string") {
          skills.push({ name: item.name.trim() })
        }
      })
    }
    return { skills }
  }
}

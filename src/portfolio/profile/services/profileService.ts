// Profile Service
// Business logic for profile operations


import type { ProfileBasics, ProfileData } from "../types/profileTypes"

export class ProfileService {
  /**
   * Calculate age from birthdate
   */
  static calculateAge(birthdate: string): number {
    const today = new Date()
    const birthDate = new Date(birthdate)
    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDiff = today.getMonth() - birthDate.getMonth()

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--
    }

    return age
  }

  /**
   * Format age as text
   */
  static formatAge(birthdate: string): string {
    const age = this.calculateAge(birthdate)
    return `${age} años`
  }

  /**
   * Format location as text
   */
  static formatLocation(location: ProfileBasics["location"]): string {
    return `${location.region}, ${location.countryCode}`
  }

  /**
   * Extract profile data from resume data
   */
  static extractProfileData(resumeData: any): ProfileData {
    return {
      basics: resumeData.basics,
    }
  }

  /**
   * Get profile hero props
   */
  static getProfileHeroProps(profileData: ProfileData) {
    const { basics } = profileData

    return {
      fullName: basics.name,
      shortDescription: basics.label,
      location: this.formatLocation(basics.location),
      age: this.formatAge(basics.birthdate),
      imagePath: basics.image,
    }
  }

  /**
   * Get profile about props
   * Returns summary as array of paragraphs (split by double line breaks)
   */
  static getProfileAboutProps(profileData: ProfileData) {
    const { basics } = profileData
    // Split summary into paragraphs by double line breaks or single line breaks
    const summaryParagraphs = basics.summary
      ? basics.summary
          .split(/\n\s*\n|(?<!\n)\n(?!\n)/)
          .map((p) => p.trim())
          .filter(Boolean)
      : []
    return {
      summary: summaryParagraphs,
    }
  }
}

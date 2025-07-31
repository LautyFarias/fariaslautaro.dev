// Profile Types
// Type definitions for profile domain

export interface ProfileBasics {
  name: string
  summary: string
  image: string
  phone: string
  email: string
  url: string
  label?: string
  location: {
    address?: string
    city?: string
    countryCode: string
    postalCode?: string
    region: string
  }
  profiles: Profile[]
}

export interface Profile {
  url: string
  network: string
  username: string
}

export interface ProfileData {
  basics: ProfileBasics
}

export interface ProfileHeroProps {
  fullName: string
  shortDescription: string
  location: string
  age: string
  imagePath: string
}

export interface ProfileAboutProps {
  summary: string[]
}

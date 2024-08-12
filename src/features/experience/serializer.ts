import type { ResumeSchema } from "@/features/resume-schema"
import type { Props as ExperienceProps } from "./Experience.astro"

const serializeDates = (startDate: Date, endDate?: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
  }

  return `${startDate.toLocaleString(undefined, options)} - ${endDate?.toLocaleString(undefined, options) ?? "Actualidad"}`
}

export const serializeExperience = (
  works: ResumeSchema["work"],
): ExperienceProps => {
  const positions = works.map((work) => ({
    name: work.position,
    description: work.description ?? "",
    dateRange: serializeDates(work.startDate, work.endDate),
  }))

  return {
    experience: [
      {
        company: "SimpliMuv",
        yearRange: "2020 - Actualidad",
        positions,
      },
    ],
  }
}

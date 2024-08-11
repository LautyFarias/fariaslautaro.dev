import type { ResumeSchema } from "@/features/resume-schema"
import type { Props as ExperienceProps } from "./Experience.astro"

export const serializeExperience = (
  work: ResumeSchema["work"],
): ExperienceProps => {
  // TODO: validate using zod

  const positions = work!.map((workItem) => ({
    name: workItem.position ?? "",
    description: workItem.description ?? "",
    dateRange: `${workItem.startDate} - ${workItem.endDate ?? "Actualidad"}`,
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

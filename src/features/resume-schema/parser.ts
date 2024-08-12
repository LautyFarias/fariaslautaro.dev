import { Resume } from "./lib/zod-schemas"

export const parseResume = (resume: { [key: string]: any }) =>
  Resume.parse(resume)

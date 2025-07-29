import { Resume } from "./zodSchemas"

export const parseResume = (resume: { [key: string]: any }) =>
  Resume.parse(resume) 

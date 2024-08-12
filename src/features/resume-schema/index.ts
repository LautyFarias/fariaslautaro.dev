import { parseResume } from "./parser"

type ResumeSchema = ReturnType<typeof parseResume>

export { parseResume, type ResumeSchema }

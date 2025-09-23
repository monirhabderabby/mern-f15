import { z } from "zod";

export const marksCreateForm = z.object({
  userId: z.string(),
  assignmentId: z.string(),
  marks: z.string(),
});

export type MarksCreateFormType = z.infer<typeof marksCreateForm>;

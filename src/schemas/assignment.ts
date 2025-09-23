import { z } from "zod";

export const assignmentFormSchema = z.object({
  title: z.string().min(1),
  subject: z.string().min(1),
  description: z.string(),
});

export type AssignmentFormSchemaType = z.infer<typeof assignmentFormSchema>;

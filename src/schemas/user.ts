import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(1),
  email: z.string().min(1),
  academyName: z.string().min(1),
});

export type UserSchemaType = z.infer<typeof userSchema>;

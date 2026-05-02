import { z } from "zod";

export const singUpFormSchema = z.object({
  name: z.string().min(2).max(20),
  password: z.string().optional(),
  age: z.number().min(18)
});

export type SingUpForm = z.infer<typeof singUpFormSchema>;
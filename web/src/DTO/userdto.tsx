import { z } from "zod";

const registerSchema = z.object({
  nome: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
});

type Register = z.infer<typeof registerSchema>;

export type { 
    registerSchema, 
    Register
};

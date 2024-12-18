import { z } from "zod";

const regitserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type Register = z.infer<typeof regitserSchema>;

export type { 
    regitserSchema, 
    Register
};

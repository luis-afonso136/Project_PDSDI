import { z } from "zod";

// Schema para validação do registro
const updateUserSchema = z.object({
  nome: z
    .string()
    .min(3, { message: "Nome deve ter pelo menos 3 caracteres." })
    .max(50, { message: "Nome não pode ter mais de 50 caracteres." })
    .optional(),
  email: z.string().email({ message: "Deve ser um email válido." }).optional(),
  password: z.string().optional(),
  country: z.string().optional(),
  tipo_utilizador: z
    .enum(["utilizador", "administrador", "professor"])
    .optional(),
});

type UpdateUsers = z.infer<typeof updateUserSchema>;

export { updateUserSchema, UpdateUsers };

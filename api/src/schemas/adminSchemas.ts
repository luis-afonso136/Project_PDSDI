import { z } from "zod";

// Schema para validação do registro
const insertUserSchema = z.object({
  nome: z
    .string()
    .min(3, { message: "Nome deve ter pelo menos 3 caracteres." })
    .max(50, { message: "Nome não pode ter mais de 50 caracteres." }),
  email: z
    .string()
    .email({ message: "Deve ser um email válido." }),
  password: z
    .string()
    .min(6, { message: "Senha deve ter pelo menos 6 caracteres." })
    .max(100, { message: "Senha não pode ter mais de 100 caracteres." }),
  tipo_utilizador: z.enum(['utilizador', 'administrador', 'professor'])
});

type InsertUser = z.infer<typeof insertUserSchema>

export {
  insertUserSchema,
  InsertUser,
}
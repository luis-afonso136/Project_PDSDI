import { coerce, z } from "zod";

const updateUtilizadorSchema = z.object({
  nome: z.string().optional(),
  email: z.string().optional(),
  password: z.string().optional(),
  country: z.string().optional(),
  avatar: z.string().optional()
})

type updateUtilizador = z.infer<typeof updateUtilizadorSchema>

const  userIdSchema = z.object({
  id_utilizador: z.coerce.number().int()
})

type userId = z.infer<typeof userIdSchema>

export {
  updateUtilizadorSchema,
  updateUtilizador,
  userIdSchema,
  userId,
}
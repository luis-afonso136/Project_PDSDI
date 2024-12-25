import { z } from "zod";

// Atualizando o schema para refletir a estrutura de respostas
export const perguntasSchema = z.object({
  pergunta: z.string(),
  dificuldade: z.string(),
  pontuacao: z.number(),
  correta: z.boolean(),
  errada: z.boolean(),
  resposta1: z.string(),
  resposta2: z.string(),
  resposta3: z.string(),
});

export const userSchema = z.object({
  nome: z.string(),
  categoria: z.string(),
  dificuldade: z.string(),
  descricao: z.string(),
  perguntas: z.array(perguntasSchema), // Usando um array de perguntas
});

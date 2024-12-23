import { PrismaClient } from "@prisma/client";
import { userSchema } from "../schemas/userSchemas";

const prisma = new PrismaClient();

export const createCurso = async (cursoData: {
  nome: string;
  categoria: string;
  dificuldade: string;
  descricao: string;
  perguntas?: { 
    pergunta: string; 
    dificuldade: string; 
    pontuacao: number; 
    correta: boolean; 
    errada: boolean; 
    resposta1: string; 
    resposta2: string; 
    resposta3: string; 
  }[];
}) => {

  try {
    // Validação dos dados com Zod
    const validatedData = userSchema.parse(cursoData);

    // Criando as perguntas e respostas
    if (validatedData.perguntas) {
      for (const pergunta of validatedData.perguntas) {
        // Criando respostas associadas à pergunta
        const resposta1 = await prisma.respostas.create({
          data: {
            texto: pergunta.resposta1,
            pontuacao: pergunta.pontuacao,
            correta: pergunta.correta,
            errada: !pergunta.correta,
          },
        });

        const resposta2 = await prisma.respostas.create({
          data: {
            texto: pergunta.resposta2,
            pontuacao: pergunta.pontuacao,
            correta: !pergunta.correta,
            errada: true,
          },
        });

        const resposta3 = await prisma.respostas.create({
          data: {
            texto: pergunta.resposta3,
            pontuacao: pergunta.pontuacao,
            correta: !pergunta.correta,
            errada: true,
          },
        });

        // Criando a pergunta e associando as respostas
        await prisma.perguntas.create({
          data: {
            texto: pergunta.pergunta,
            dificuldade: pergunta.dificuldade,
            Respostas: {
              connect: [
                { id_resposta: resposta1.id },
                { id_resposta: resposta2.id },
                { id_resposta: resposta3.id },
              ],
            },
          },
        });
      }
    }

    // Criando o curso
    const newCurso = await prisma.curso.create({
      data: {
        nome: validatedData.nome,
        categoria: validatedData.categoria,
        dificuldade: validatedData.dificuldade,
        descricao: validatedData.descricao,
      },
    });

    return newCurso;
  } catch (error) {
    console.error("Error creating course:", error);
    throw new Error("Failed to create course");
  }
};

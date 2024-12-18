import { FastifyReply, FastifyRequest } from "fastify";
import { ZodSchema, ZodError } from "zod";

export const validateRequest = (schema: ZodSchema) => {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      schema.parse(request.body); // Valida o corpo da requisição
    } catch (error) {
      if (error instanceof ZodError) {
        return reply.status(400).send({
          message: "Validation failed",
          errors: error.format(), // Usa o método `format()` para retornar os erros formatados
        });
      }
      return reply.status(400).send({ message: "Invalid request." });
    }
  };
};

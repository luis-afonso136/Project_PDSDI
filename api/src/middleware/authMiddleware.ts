import { FastifyReply, FastifyRequest } from "fastify";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY || "";

export const authenticate = async (request: FastifyRequest, reply: FastifyReply) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return reply.status(401).send({ message: "No token provided." });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    request.Utilizador = decoded; // Armazena o usuário decodificado na requisição
  } catch (error) {
    return reply.status(401).send({ message: "Invalid token." });
  }
};

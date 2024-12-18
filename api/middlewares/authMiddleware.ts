import jwt from "jsonwebtoken";
import { FastifyRequest, FastifyReply } from "fastify";

const SECRET_KEY = process.env.SECRET_KEY || "";

export const verifyToken = async (request: FastifyRequest, reply: FastifyReply) => {
  const token = request.headers.authorization?.split(" ")[1]; // Bearer Token

  if (!token) {
    return reply.status(401).send({ message: "Unauthorized: No token provided." });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    (request as any).user = decoded;
  } catch (error) {
    return reply.status(401).send({ message: "Unauthorized: Invalid token." });
  }
};

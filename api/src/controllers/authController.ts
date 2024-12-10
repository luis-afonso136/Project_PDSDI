import { FastifyReply, FastifyRequest } from "fastify";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const SECRET_KEY = process.env.SECRET_KEY || "";

export const registerUser = async (request: FastifyRequest, reply: FastifyReply) => {
  const { nome, email, password } = request.body as {
    nome: string;
    email: string;
    password: string;
  };

  if (!nome || !email || !password) {
    return reply.status(400).send({ message: "All fields are required." });
  }

  try {
    const existingUser = await prisma.utilizador.findUnique({ where: { email } });
    if (existingUser) {
      return reply.status(409).send({ message: "User already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.utilizador.create({
      data: { nome, email, password: hashedPassword },
    });

    reply.send({ id: user.id_utilizador, name: user.nome, email: user.email });
  } catch (error) {
    console.error("Error during registration:", error);
    reply.status(500).send({ message: "Internal server error." });
  }
};

export const loginUser = async (request: FastifyRequest, reply: FastifyReply) => {
  const { email, password } = request.body as {
    email: string;
    password: string;
  };

  if (!email || !password) {
    return reply.status(400).send({ message: "Email and password are required." });
  }

  try {
    const user = await prisma.utilizador.findUnique({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return reply.status(401).send({ message: "Invalid credentials." });
    }

    const token = jwt.sign({ id: user.id_utilizador }, SECRET_KEY, { expiresIn: "1h" });

    reply.send({ token, user: { id: user.id_utilizador, name: user.nome, email: user.email } });
  } catch (error) {
    console.error("Error during login:", error);
    reply.status(500).send({ message: "Internal server error." });
  }
};

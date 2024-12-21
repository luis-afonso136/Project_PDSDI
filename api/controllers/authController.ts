import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { FastifyReply, FastifyRequest } from "fastify";

const prisma = new PrismaClient();
const SECRET_KEY = process.env.SECRET_KEY || "";
const validRoles = ["administrador", "utilizador", "aluno", "professor"];

// Registro
export const register = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { nome, email, password } = request.body as {
    nome: string;
    email: string;
    password: string;
  };

  const existingUser = await prisma.utilizador.findUnique({ where: { email } });
  if (existingUser) {
    return reply.status(409).send({ message: "User already exists." });
  }

  const role = "utilizador"; // Define "utilizador" como padrão
  if (!validRoles.includes(role)) {
    return reply
      .status(400)
      .send({ message: "Invalid role. Allowed roles are: admin, user, member." });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.utilizador.create({
    data: { nome, email, password: hashedPassword, tipo_utilizador: "utilizador" },
  });

  reply.send({ id: user.id_utilizador, name: user.nome, email: user.email });
};

// Login
export const login = async (request: FastifyRequest, reply: FastifyReply) => {
  const { email, password } = request.body as {
    email: string;
    password: string;
  };

  const user = await prisma.utilizador.findUnique({ where: { email } });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return reply.status(401).send({ message: "Invalid credentials." });
  }

  const token = jwt.sign({ id: user.id_utilizador }, SECRET_KEY, {
    expiresIn: "1h",
  });
  reply.send({
    token,
    user: { id: user.id_utilizador, name: user.nome, email: user.email },
  });
};

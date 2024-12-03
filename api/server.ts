import fastify from "fastify";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const app = fastify();
const prisma = new PrismaClient();

const SECRET_KEY = process.env.SECRET_KEY || "";

app.get("/", async (request, reply) => {
    return "PDSDI API";
})

// Registro
app.post("/register", async (request, reply) => {
  const { nome, email, password } = request.body as {
    nome: string;
    email: string;
    password: string;
  };

  // Validação básica
  if (!nome || !email || !password) {
    return reply.status(400).send({ message: "All fields are required." });
  }

  try {
    // Verifica se o usuário já existe
    const existingUser = await prisma.utilizador.findUnique({ where: { email } });
    if (existingUser) {
      return reply.status(409).send({ message: "User already exists." });
    }

    // Cria o usuário com senha criptografada
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.utilizador.create({
      data: { nome, email, password: hashedPassword },
    });

    reply.send({ id: user.id_utilizador, name: user.nome, email: user.email });
  } catch (error) {
    console.error("Error during registration:", error);
    reply.status(500).send({ message: "Internal server error." });
  }
});

// Login
app.post("/login", async (request, reply) => {
  const { email, password } = request.body as {
    email: string;
    password: string;
  };

  // Validação básica
  if (!email || !password) {
    return reply.status(400).send({ message: "Email and password are required." });
  }

  try {
    const user = await prisma.utilizador.findUnique({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return reply.status(401).send({ message: "Invalid credentials." });
    }

    // Gera o token JWT
    const token = jwt.sign({ id: user.id_utilizador }, SECRET_KEY, { expiresIn: "1h" });

    reply.send({ token, user: { id: user.id_utilizador, name: user.nome, email: user.email } });
  } catch (error) {
    console.error("Error during login:", error);
    reply.status(500).send({ message: "Internal server error." });
  }
});

// Inicia o servidor
const startServer = async () => {
  try {
    await app.listen({ port: 3000 });
    console.log("Server running on http://localhost:3000");
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
};

startServer();

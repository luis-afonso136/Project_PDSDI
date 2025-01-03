import fastify from "fastify";
import dotenv from "dotenv";
import fastifyCors from "@fastify/cors";
import fastifyCookie from "@fastify/cookie";
import { routes } from "./routes/routes";

dotenv.config();

const app = fastify();

app.register(fastifyCors, {
  origin: true, // URL do seu frontend
  credentials: true, // Permitir envio de cookies
  methods: ["GET", "POST", "PUT", "DELETE"], // Permite apenas esses métodos
});

app.register(fastifyCookie);

// Rota raiz (opcional, mas resolve o erro 404 para `/`)
app.get("/", async (request, reply) => {
  reply.send({ message: "Bem-vindo à API!." });
});

// Rotas de autenticação
app.register(routes).then(() => {
  console.log("Rotas registadas com sucesso");
});

// Inicialização do servidor
const startServer = async () => {
  try {
    const port = process.env.PORT || 3000; // Configura a porta
    await app.listen({ port: Number(port) });
    console.log(`🚀 Server running on http://localhost:${port}`);
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
};

startServer();

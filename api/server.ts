import fastify from "fastify";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes";

dotenv.config();

const app = fastify();

// Rota raiz (opcional, mas resolve o erro 404 para `/`)
app.get("/", async (request, reply) => {
  reply.send({ message: "Bem-vindo à API! Use /register ou /login para começar." });
});

// Rotas de autenticação
app.register(authRoutes);

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

import fastify from "fastify";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes";

dotenv.config();

const app = fastify();

// Rotas - Importamos as rotas organizadas
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

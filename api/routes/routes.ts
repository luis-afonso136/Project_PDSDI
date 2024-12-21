import { FastifyInstance } from "fastify";
import authRoutes from "./authRoutes";
import { verifyAuth } from "../middlewares/authMiddleware";

export async function routes(app: FastifyInstance) {
  await authRoutes(app);
  // app.register(authRoutes);
  // Rotas de autenticação
  // Rotas de cursos
  // app.register(usersRoutes)

  // tudo o que esta aqui so funciona se tiver token criado
  app.register(async (app) => {
    app.addHook("preHandler", verifyAuth);
    // app.register(clientRoutes)
  });
}

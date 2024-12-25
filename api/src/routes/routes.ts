import { FastifyInstance } from "fastify";
import { authRoutes } from "./authRoutes";
import { verifyAuth } from "../middlewares/authMiddleware";
import { adminRoutes } from "./adminRoutes";
import { userRoutes } from "./userRoutes";

export async function routes(app: FastifyInstance) {
  await authRoutes(app);

  // tudo o que esta aqui so funciona se tiver token criado
  app.register(async (app) => {
    app.addHook("preHandler", verifyAuth);
    app.register(adminRoutes)
    app.register(userRoutes)
  });
}

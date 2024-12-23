import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { adminController } from "../controllers/adminController";
import { verifyRoles } from "../middlewares/rolesMiddleware";

export async function adminRoutes(app: FastifyInstance) {
  app.post("/insert-utilizador",{ preHandler: verifyRoles(['administrador'])}, adminController.verifyInsertUtilizador);
  // app.post("/login", authController.verifyLogin);
  // app.post("/logout", authController.verifyLogout);
}

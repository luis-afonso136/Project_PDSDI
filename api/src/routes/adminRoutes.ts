import { FastifyInstance } from "fastify";
import { verifyRoles } from "../middlewares/rolesMiddleware";
import { adminController } from "../controllers/adminController";

export async function adminRoutes(app: FastifyInstance) {
  app.put("/update-utilizador/:id_utilizador",{ preHandler: verifyRoles(['administrador'])}, adminController.verifyUpdateUtilizador);
  // app.post("/logout", authController.verifyLogout);
}

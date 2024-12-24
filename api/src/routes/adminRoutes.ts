import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { adminController } from "../controllers/adminController";
import { verifyRoles } from "../middlewares/rolesMiddleware";

export async function adminRoutes(app: FastifyInstance) {
  app.put("/update-utilizador/:id_utilizador",{ preHandler: verifyRoles(['administrador'])}, adminController.verifyUpdateUser);
  // app.post("/logout", authController.verifyLogout);
}

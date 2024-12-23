import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { authController } from "../controllers/authController";

export async function authRoutes(app: FastifyInstance) {
  app.post("/register", authController.verifyRegister);
  app.post("/login", authController.verifyLogin);
  app.post("/logout", authController.verifyLogout);
}
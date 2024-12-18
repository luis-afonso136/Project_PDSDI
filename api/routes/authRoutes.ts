import { FastifyInstance } from "fastify";
import { register, login } from "../controllers/authController";
import { verifyToken } from "../middlewares/authMiddleware";
import { validateRequest } from "../middlewares/validationMiddleware";
import { registerSchema, loginSchema } from "../schemas/authSchemas";

export default async function authRoutes(app: FastifyInstance) {
  app.post("/register", { preHandler: validateRequest(registerSchema) }, register);
  app.post("/login", { preHandler: validateRequest(loginSchema) }, login);
  
  // Rota protegida como exemplo
  app.get("/profile", { preHandler: verifyToken }, async (request, reply) => {
    return reply.send({ message: "This is a protected route", user: (request as any).user });
  });
}

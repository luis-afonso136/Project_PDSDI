import { FastifyInstance } from "fastify";
import { register, login } from "../controllers/authController";
import { userSchema } from "../schemas/userSchemas";
import { validateRequest } from "../middlewares/validationMiddleware";

export default async function userRoutes(app: FastifyInstance) {
  // app.post("/register", { preHandler: validateRequest(userSchema) }, register);
  
}

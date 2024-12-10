import { FastifyInstance } from "fastify";
import { registerUser, loginUser } from "../controllers/authController";

export const authRoutes = (app: FastifyInstance) => {
  app.post("/register", registerUser);
  app.post("/login", loginUser);
};

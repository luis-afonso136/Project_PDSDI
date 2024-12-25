import { FastifyInstance } from "fastify";
import { verifyRoles } from "../middlewares/rolesMiddleware";
import { userController } from "../controllers/userController";


export async function userRoutes(app: FastifyInstance) {
  app.put('/update-profile/:id_utilizador', {preHandler: verifyRoles(['utilizador']) }, userController.verifyUpdateUtilizador)
  app.delete('/delete-profile/:id_utilizador', {preHandler: verifyRoles(['utilizador']) }, userController.verifyDeleteUtilizador)
}
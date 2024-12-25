import { FastifyReply, FastifyRequest } from "fastify";
import { userIdSchema } from "../schemas/userSchemas";
import { updateUserSchema } from "../schemas/adminSchemas";
import { adminService } from "../services/adminService";

export const adminController = {
  async verifyUpdateUtilizador(req: FastifyRequest, res: FastifyReply) {
    try {
      const { id_utilizador } = userIdSchema.parse(req.params);
      const { nome, email, country, password, tipo_utilizador } =
        updateUserSchema.parse(req.body);

      const response = await adminService.updateUser();
      return { response };
    } catch (error) {
      res.status(500).send({
        error: "Erro ao atualizar utilizador" + JSON.stringify(error),
      });
    }
  },
};

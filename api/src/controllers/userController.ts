import { prisma } from "../../lib/prisma";
import { FastifyReply, FastifyRequest } from "fastify";
import { userService } from "../services/userService";
import { userIdSchema } from "../schemas/userSchemas";
import { updateUtilizadorSchema } from "../schemas/userSchemas";
import {} from "../services/userService"; // Importa o serviço


export const userController = {
  async verifyUpdateUtilizador(req: FastifyRequest, res: FastifyReply) {
    try {
      const { id_utilizador } = userIdSchema.parse(req.params);
      const user = updateUtilizadorSchema.parse(req.body);
      const response = await userService.updateUtilizador(
        { id_utilizador },
        user
      );
      return {response}
    } catch (error) {
      res
        .status(500)
        .send({
          error: "Erro ao atualizar utilizador" + JSON.stringify(error),
        });
    }
  },

  async verifyDeleteUtilizador(req: FastifyRequest, res: FastifyReply){
    try {
      const { id_utilizador } = userIdSchema.parse(req.params);


      // Verifica se o usuário existe antes de tentar excluir
      const userExists = await prisma.utilizador.findUnique({
        where: { id_utilizador }
      });

      if (!userExists) {
        return res.status(404).send({
          error: "Usuário não encontrado",
        });
      }

      // Chama o serviço para excluir o usuário
      await userService.deleteUtilizador({ id_utilizador });

      // Retorna uma resposta de sucesso
      return res.status(200).send({
        message: "Usuário deletado com sucesso",
      });

    } catch (error) {
      res
      .status(500)
      .send({
        error: "Erro ao apagar utilizador" + JSON.stringify(error),
      });
    }
  }
  
};

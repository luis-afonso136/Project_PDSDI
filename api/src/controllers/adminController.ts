import { prisma } from "../../lib/prisma";
import { FastifyReply, FastifyRequest } from "fastify";
import { adminService } from "../services/adminService";
import { updateUserSchema, userIdSchema } from "../schemas/adminSchemas";

export const adminController = {
  async verifyUpdateUser(req: FastifyRequest, res: FastifyReply) {
    try {
      const { id_utilizador } = userIdSchema.parse(req.params);

      const { nome, email, tipo_utilizador } = updateUserSchema.parse(req.body);

      // Garantir que os campos estão definidos
      if (!nome || !email || !tipo_utilizador) {
        return res.status(400).send({
          error: "Os campos nome, email e tipo_utilizador são obrigatórios.",
        });
      }

      const userRegisted = await adminService.updateUser(
        id_utilizador,
        nome,
        email,
        tipo_utilizador
      );

      // usar so para em modo desenvolvimento
      res.send(userRegisted);

      // usar em modo producao
      // res.status(200).send({message: 'Utilizador registado com sucesso!'})
    } catch (err) {
      res
        .status(500)
        .send({ error: "Error in register user" + JSON.stringify(err) });
    }
  },
};

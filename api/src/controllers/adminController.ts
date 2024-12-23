import { prisma } from "../../lib/prisma";
import { FastifyReply, FastifyRequest } from "fastify";
import { adminService } from "../services/adminService";
import { insertUserSchema } from "../schemas/adminSchemas";

export const adminController = {
  async verifyInsertUtilizador(req: FastifyRequest, res: FastifyReply) {
    try {
      const user = insertUserSchema.parse(req.body);

      const existingUser = await prisma.utilizador.findUnique({
        where:{
          email: user.email
        }
      })

      if(existingUser){
        return res.status(409).send({ message: "Um utilizador com esse E-mail já se encontra registado." });
      }



      const userRegisted = await adminService.Register(user);

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

import { prisma } from "../../lib/prisma";

import * as dotenv from "dotenv";
import { updateUtilizador, userId } from "../schemas/userSchemas";

dotenv.config();

export const userService = {
  async Register() {
    try {
    } catch (err) {
      throw new Error("Error in user register");
    }
  },

  async updateUtilizador(userId: userId, user: updateUtilizador) {
    try {
      const userUpdated = await prisma.utilizador.update({
        where: {
          id_utilizador: userId.id_utilizador,
        },
        data: {
          nome: user.nome ?? undefined,
          email: user.email ?? undefined,
          password: user.password ?? undefined,
          country: user.country ?? undefined,
        },
      });

      return userUpdated;
    } catch (err) {
      throw new Error("Error updating user");
    }
  },

  async deleteUtilizador( user: userId) {
    // Deleta o usuário do banco de dados
    return prisma.utilizador.delete({
      where: { id_utilizador: user.id_utilizador },
    });
  },

};

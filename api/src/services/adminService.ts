import { prisma } from "../../lib/prisma";

export const adminService = {  
  async updateUser (id_utilizador: number, nome: string, email: string,password: string, country: string, tipo_utilizador: string) {
    try {

      const userUpdated = await prisma.utilizador.update({
        where:{
          id_utilizador:  id_utilizador,
        },
        data:{
          nome: nome ?? undefined,
          email: email ?? undefined,
          password: password ?? undefined,
          country: country ?? undefined,
          tipo_utilizador: tipo_utilizador ?? undefined
        }
      })

      return { userUpdated }
    } catch (error) {
      throw new Error('Erro a atualizar utilizador: ' + error)
    }
  },

  async deleteUtilizador( id_utilizador: number) {
    // Deleta o usuário do banco de dados
    return prisma.utilizador.delete({
      where: { id_utilizador: id_utilizador },
    });
  },

};


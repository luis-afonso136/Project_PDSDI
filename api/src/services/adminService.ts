import { prisma } from "../../lib/prisma";
import bcrypt from "bcrypt";
import { UpdateUser, updateUserSchema } from "../schemas/adminSchemas";

export const adminService = {  
  async updateUser (id_utilizador: number, nome: string, email: string, tipo_utilizador: string) {
    try {

      const userUpdated = await prisma.utilizador.update({
        where:{
          id_utilizador:  id_utilizador,
        },
        data:{
          nome: nome !== undefined ? nome : undefined,
          email: email ! == undefined ? email : undefined,
          tipo_utilizador: tipo_utilizador !== undefined ? tipo_utilizador : undefined
        }
      })

      return { userUpdated }
    } catch (error) {
      throw new Error('Erro a atualizar utilizador: ' + error)
    }
  },

  async deleteUser (){
    try {
      
    } catch (error) {
      throw new Error('Erro ao apagar utilizador: ' + error)
    }
  }

};


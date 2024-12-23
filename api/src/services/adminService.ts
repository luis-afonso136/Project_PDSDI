import { prisma } from "../../lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { InsertUser, insertUserSchema } from "../schemas/adminSchemas";
import { never } from "zod";

export const adminService = {

  
  async Register(user: InsertUser){

    const { password, tipo_utilizador } = insertUserSchema.parse(user)

    try {

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await prisma.utilizador.create({
        data: {
          nome: user.nome,
          email: user.email,
          password: hashedPassword,
          tipo_utilizador: user.tipo_utilizador
        }
      })

      return { newUser }

    } catch (err) {
      console.log('err')
      throw new Error("Error in user register");
    }
  },

};


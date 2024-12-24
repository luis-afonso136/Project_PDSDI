import { prisma } from "../../lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import { Register, registerSchema } from "../schemas/authSchemas";

dotenv.config();

// const validRoles = ["administrador", "utilizador", "aluno", "professor"];

export const authService = {

  async Register( user: Register){

    const { password } = registerSchema.parse(user);

    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      // Inserir um utilizador na bd
      const newUser = await prisma.utilizador.create({
        data: {
          nome: user.nome,
          email: user.email,
          password: hashedPassword,
          tipo_utilizador: 'utilizador'
        },
      });

      return  [newUser];
    } catch (err) {
      throw new Error("Error in user register");
    }
  },

  async Login(email: string, password: string) {
    try {
      // procurar utilizador por email
      const user = await prisma.utilizador.findUnique({ where: { email: email } });

      // 
      if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new Error("Invalid email or password");
      }

      // criar token para guardar nas cookies
      const token = jwt.sign({}, "postgres", { expiresIn: "1d", subject: user.id_utilizador.toString() });

      // usar so em modo desevolvimento
      // return { token, user };

      // usar em producao
      return { token }
    } catch (error) {
      throw new Error("Ocorred an error in user login!!!");
    }
  },

  async verifyToken(token: string) {
    try {
      const secret = process.env.JWT_SECRET; // Certifique-se de que a variável de ambiente está configurada
      if (!secret) {
        throw new Error('JWT_SECRET não configurado');
      }
  
      // Verifica e decodifica o token JWT
      return jwt.verify(token, secret) as { sub: string }; // Ajuste o tipo conforme necessário
    } catch (error) {
      throw new Error('Token inválido ou expirado');
    }
  }

};


import { prisma } from "../../lib/prisma";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { FastifyReply, FastifyRequest } from "fastify";
import { authService } from "../services/authService";
import { loginSchema, registerSchema } from "../schemas/authSchemas";

const SECRET_KEY = process.env.SECRET_KEY || "";
// const validRoles = ["administrador", "utilizador", "aluno", "professor"];

export const authController = {
  async verifyRegister(req: FastifyRequest, res: FastifyReply) {
    try {
      const user = registerSchema.parse(req.body);

      const existingUser = await prisma.utilizador.findUnique({
        where:{
          email: user.email
        }
      })

      if(existingUser){
        return res.status(409).send({ message: "Um utilizador com esse E-mail já se encontra registado." });
      }

      const userRegisted = await authService.Register(user);

      // usar so para em modo desenvolvimento
      // res.send(userRegisted);

      // usar em modo producao
      res.status(200).send({message: 'Utilizador registado com sucesso!'})
    } catch (err) {
      res
        .status(500)
        .send({ error: "Error in register user" + JSON.stringify(err) });
    }
  },

  async verifyLogin(req: FastifyRequest, res: FastifyReply) {
    try {
      const user = loginSchema.parse(req.body);

      const body = await authService.Login(
        user.email,
        user.password
      );

      // return {code: 200, body}
      return res.status(200).setCookie('token', body.token, { path: '/', httpOnly: true, secure: true }).status(200).send(body)
    } catch (err) {
      res.status(401).send({ error: err });
    }
  },

  async verifyLogout(req: FastifyRequest, res: FastifyReply) {
    try {
      // Delete the from inside the cookie
      return res
        .clearCookie("token", { path: "/" })
        .status(200)
        .send({ message: "Logout successful" });
    } catch (err) {
      res.status(500).send({ error: "Failed to logout" });
    }
  },
};

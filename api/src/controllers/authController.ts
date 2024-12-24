import { prisma } from "../../lib/prisma";
import { FastifyReply, FastifyRequest } from "fastify";
import { authService } from "../services/authService";
import { loginSchema, registerSchema } from "../schemas/authSchemas";
import { validateRequest } from "../middlewares/validationMiddleware";

export const authController = {
  async verifyRegister(req: FastifyRequest, res: FastifyReply) {
    try {
      validateRequest(registerSchema)
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
      return res.setCookie('token', body.token, { path: '/' }).status(200).send(body)
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

  async  checkLoginController(req: FastifyRequest, reply: FastifyReply) {
    try {
      const token = req.cookies.token; // Obter o token dos cookies
      if (!token) {
        return reply.status(401).send({ error: 'Não autenticado' });
      }
  
      // Verificar o token através do service
      const decoded = await authService.verifyToken(token);
      return reply.status(200).send({ userId: decoded.sub });
    } catch (error) {
      console.error('Erro ao verificar token:', error);
      return reply.status(401).send({ error: 'Token inválido' });
    }
  }
};

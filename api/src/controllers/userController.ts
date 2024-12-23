import { prisma } from "../../lib/prisma";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { FastifyReply, FastifyRequest } from "fastify";
import { userService } from "../services/userService";

export const userController = {
  async verifyInsertUtilizador(req: FastifyRequest, res: FastifyReply) {
    try {

    } catch (err) {
      res
        .status(500)
        .send({ error: "Error in register user" + JSON.stringify(err) });
    }
  },

};

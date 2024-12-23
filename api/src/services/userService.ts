import { prisma } from "../../lib/prisma";

import * as dotenv from "dotenv";

dotenv.config();

// const validRoles = ["administrador", "utilizador", "aluno", "professor"];

export const userService = {

  async Register( ){

    try {

    } catch (err) {
      throw new Error("Error in user register");
    }
  },

};


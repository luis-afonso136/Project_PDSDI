import { PrismaClient } from "@prisma/client";
import { FastifyReply, FastifyRequest } from "fastify";

const prisma = new PrismaClient(); 
// This function receive an or more string values in this case receive the types of roles existent
export function verifyRoles(requiredRoles: string[]) {
  return async (req: FastifyRequest, res: FastifyReply) => {
    try {
      const userId = req.user.id; /* Assuming the user ID is available in the request 
      after authentication*/
      
      // Verify the user user_id and your role
      const user = await prisma.utilizador.findUnique({
        where: { id_utilizador: Number(userId) },
        select: { tipo_utilizador: true }
      });

      console.log(user?.tipo_utilizador)
      console.log('user' + JSON.stringify(user))

      /* If it is not user(user_id not evaluable) or rule type, which is found 
      in the roles table according to the user id and the rule type it received at the 
      start of the function, then access is denied.
      */ 
      if (!user || !requiredRoles.includes(user.tipo_utilizador)) {
        return res.status(403).send({ error: "Access denied" });
      }
    } catch (error) {
      // if something happens in the api it returns a Error message
      // console.log(error)
      return res.status(500).send({ error: "You're not logged in! Please log in first" });
    }
  };
}
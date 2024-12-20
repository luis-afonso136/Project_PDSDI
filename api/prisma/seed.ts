import { PrismaClient } from "@prisma/client";
import { console } from "inspector";

const prisma = new PrismaClient();

async function main() {
  await prisma.utilizador.create({
    data: {
      nome: "Luis Afonso",
      email: "luis@admin.pt",
      password: "luisadmin",
      tipo_utilizador: "administrador",
      country: "Portugal",
    },
  });

  console.log("Utilizador adicionado com sucesso");
}

main()
  .then(() => {
    console.log("Seed processada com sucesso");
  })
  .catch((e) => {
    console.error("Erro ao adicionar utilizador", e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

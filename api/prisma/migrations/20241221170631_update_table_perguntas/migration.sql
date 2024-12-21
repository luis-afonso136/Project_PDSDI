/*
  Warnings:

  - You are about to drop the column `texto` on the `Perguntas` table. All the data in the column will be lost.
  - You are about to drop the `Respostas` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `correta` to the `Perguntas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `errada` to the `Perguntas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pergunta` to the `Perguntas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pontuacao` to the `Perguntas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `resposta1` to the `Perguntas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `resposta2` to the `Perguntas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `resposta3` to the `Perguntas` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Respostas" DROP CONSTRAINT "Respostas_id_pergunta_fkey";

-- AlterTable
ALTER TABLE "Perguntas" DROP COLUMN "texto",
ADD COLUMN     "correta" BOOLEAN NOT NULL,
ADD COLUMN     "errada" BOOLEAN NOT NULL,
ADD COLUMN     "pergunta" TEXT NOT NULL,
ADD COLUMN     "pontuacao" INTEGER NOT NULL,
ADD COLUMN     "resposta1" TEXT NOT NULL,
ADD COLUMN     "resposta2" TEXT NOT NULL,
ADD COLUMN     "resposta3" TEXT NOT NULL;

-- DropTable
DROP TABLE "Respostas";

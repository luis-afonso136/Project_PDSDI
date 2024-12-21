/*
  Warnings:

  - Changed the type of `correta` on the `Respostas` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `errada` on the `Respostas` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Respostas" DROP COLUMN "correta",
ADD COLUMN     "correta" BOOLEAN NOT NULL,
DROP COLUMN "errada",
ADD COLUMN     "errada" BOOLEAN NOT NULL;

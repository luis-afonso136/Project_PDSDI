/*
  Warnings:

  - You are about to drop the column `data_registro` on the `Utilizador` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Utilizador" DROP COLUMN "data_registro",
ALTER COLUMN "tipo_utilizador" DROP NOT NULL;

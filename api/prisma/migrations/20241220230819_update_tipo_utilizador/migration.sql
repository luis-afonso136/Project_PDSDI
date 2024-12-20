/*
  Warnings:

  - Made the column `tipo_utilizador` on table `Utilizador` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Utilizador" ALTER COLUMN "tipo_utilizador" SET NOT NULL;

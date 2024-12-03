/*
  Warnings:

  - Added the required column `categoria` to the `Curso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descricao` to the `Curso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dificuldade` to the `Curso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imagem` to the `Curso` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Curso" ADD COLUMN     "categoria" TEXT NOT NULL,
ADD COLUMN     "descricao" TEXT NOT NULL,
ADD COLUMN     "dificuldade" TEXT NOT NULL,
ADD COLUMN     "imagem" TEXT NOT NULL;

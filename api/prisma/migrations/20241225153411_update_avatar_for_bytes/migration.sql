/*
  Warnings:

  - The `avatar` column on the `Utilizador` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Utilizador" DROP COLUMN "avatar",
ADD COLUMN     "avatar" BYTEA;

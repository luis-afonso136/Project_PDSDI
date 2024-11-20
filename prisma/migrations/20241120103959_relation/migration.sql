-- CreateTable
CREATE TABLE "Utilizador_Curso" (
    "id_utilizador_curso" SERIAL NOT NULL,
    "progresso" TEXT NOT NULL,
    "id_utilizador" SERIAL NOT NULL,
    "id_curso" SERIAL NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Utilizador_Curso_pkey" PRIMARY KEY ("id_utilizador_curso")
);

-- AddForeignKey
ALTER TABLE "Utilizador_Curso" ADD CONSTRAINT "Utilizador_Curso_id_utilizador_fkey" FOREIGN KEY ("id_utilizador") REFERENCES "Utilizador"("id_utilizador") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Utilizador_Curso" ADD CONSTRAINT "Utilizador_Curso_id_curso_fkey" FOREIGN KEY ("id_curso") REFERENCES "Curso"("id_curso") ON DELETE RESTRICT ON UPDATE CASCADE;

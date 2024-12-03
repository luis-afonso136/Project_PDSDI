-- CreateTable
CREATE TABLE "Perguntas" (
    "id_pergunta" SERIAL NOT NULL,
    "texto" TEXT NOT NULL,
    "dificuldade" TEXT NOT NULL,
    "id_curso" SERIAL NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Perguntas_pkey" PRIMARY KEY ("id_pergunta")
);

-- CreateTable
CREATE TABLE "Respostas" (
    "id_resposta" SERIAL NOT NULL,
    "texto" TEXT NOT NULL,
    "pontuacao" INTEGER NOT NULL,
    "correta" TEXT NOT NULL,
    "errada" TEXT NOT NULL,
    "id_pergunta" SERIAL NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Respostas_pkey" PRIMARY KEY ("id_resposta")
);

-- AddForeignKey
ALTER TABLE "Perguntas" ADD CONSTRAINT "Perguntas_id_curso_fkey" FOREIGN KEY ("id_curso") REFERENCES "Curso"("id_curso") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Respostas" ADD CONSTRAINT "Respostas_id_pergunta_fkey" FOREIGN KEY ("id_pergunta") REFERENCES "Perguntas"("id_pergunta") ON DELETE RESTRICT ON UPDATE CASCADE;

-- CreateEnum
CREATE TYPE "AcaoRealizada" AS ENUM ('Sim', 'Nao');

-- CreateTable
CREATE TABLE "Status" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(20) NOT NULL,
    "criado" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "alterado" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Perfil" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(20) NOT NULL,
    "criado" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "alterado" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL,
    "nome" VARCHAR(48) NOT NULL,
    "email" VARCHAR(48) NOT NULL,
    "senha" TEXT NOT NULL,
    "perfilID" INTEGER NOT NULL,
    "statusID" INTEGER NOT NULL,
    "criado" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "alterado" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Semana" (
    "id" TEXT NOT NULL,
    "nome" VARCHAR(48) NOT NULL,
    "criado" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "alterado" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Turma" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "usuarioID" TEXT NOT NULL,
    "criado" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "alterado" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Aluno" (
    "id" TEXT NOT NULL,
    "nome" VARCHAR(48) NOT NULL,
    "ra" VARCHAR(13) NOT NULL,
    "statusID" INTEGER NOT NULL,
    "criado" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "alterado" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Atividade" (
    "id" TEXT NOT NULL,
    "nome" VARCHAR(48) NOT NULL,
    "descricao" VARCHAR(50) NOT NULL,
    "criado" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "alterado" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Turma_Aluno" (
    "id" TEXT NOT NULL,
    "alunoID" TEXT NOT NULL,
    "turmaID" TEXT NOT NULL,
    "criado" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "alterado" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Semana_Turma" (
    "id" TEXT NOT NULL,
    "semanaID" TEXT NOT NULL,
    "turmaID" TEXT NOT NULL,
    "criado" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "alterado" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Acao" (
    "id" TEXT NOT NULL,
    "semanaTurmaID" TEXT NOT NULL,
    "whatsApp" "AcaoRealizada",
    "ligacao" "AcaoRealizada",
    "videoChamada" "AcaoRealizada",
    "pessoalmente" "AcaoRealizada",
    "observacao" TEXT,
    "criado" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "alterado" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Turma_Atividade_Semana" (
    "id" TEXT NOT NULL,
    "semanaTurmaID" TEXT NOT NULL,
    "atividadeID" TEXT NOT NULL,
    "presencial" "AcaoRealizada",
    "remoto" "AcaoRealizada",
    "responsavelRetirou" "AcaoRealizada",
    "devolutiva" "AcaoRealizada",
    "semContato" "AcaoRealizada",
    "criado" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "alterado" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Status.nome_unique" ON "Status"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Perfil.nome_unique" ON "Perfil"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario.email_unique" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Turma_usuarioID_unique" ON "Turma"("usuarioID");

-- CreateIndex
CREATE UNIQUE INDEX "Aluno.ra_unique" ON "Aluno"("ra");

-- CreateIndex
CREATE UNIQUE INDEX "Atividade.descricao_unique" ON "Atividade"("descricao");

-- AddForeignKey
ALTER TABLE "Usuario" ADD FOREIGN KEY ("perfilID") REFERENCES "Perfil"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD FOREIGN KEY ("statusID") REFERENCES "Status"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Turma" ADD FOREIGN KEY ("usuarioID") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aluno" ADD FOREIGN KEY ("statusID") REFERENCES "Status"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Turma_Aluno" ADD FOREIGN KEY ("alunoID") REFERENCES "Aluno"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Turma_Aluno" ADD FOREIGN KEY ("turmaID") REFERENCES "Turma"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Semana_Turma" ADD FOREIGN KEY ("semanaID") REFERENCES "Semana"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Semana_Turma" ADD FOREIGN KEY ("turmaID") REFERENCES "Turma"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Acao" ADD FOREIGN KEY ("semanaTurmaID") REFERENCES "Semana_Turma"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Turma_Atividade_Semana" ADD FOREIGN KEY ("semanaTurmaID") REFERENCES "Semana_Turma"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Turma_Atividade_Semana" ADD FOREIGN KEY ("atividadeID") REFERENCES "Atividade"("id") ON DELETE CASCADE ON UPDATE CASCADE;

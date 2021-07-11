-- DropIndex
DROP INDEX "Atividade.descricao_unique";

-- AlterTable
ALTER TABLE "Aluno" ALTER COLUMN "statusID" SET DEFAULT 1;

-- AlterTable
ALTER TABLE "Usuario" ALTER COLUMN "statusID" SET DEFAULT 1;

const prisma = require('./prisma');
const { hash } = require('../utilities/crypt');

const default_prof = {
  nome: 'Ursula Yamada',
  email: 'ursula.yamada@edusjc.sp.gov.br',
  senha: 'Edu@22101986',
};

const default_super = {
  nome: 'Vanessa Cristina Selicani',
  email: 'vanessa.selicani@edusjc.sp.gov.br',
  senha: 'Edu@22041985',
};

const default_admin = {
  nome: 'Paulo Eduardo Peixoto',
  email: 'peixoto.pauloeduardo@gmail.com',
  senha: 'Edu@16101990',
};

const default_aluno = {
  nome: 'Maria Eduarda Silva',
  ra: '123456789-0',
};

async function populateDB() {
  const status = await prisma.status.createMany({
    data: [
      { nome: 'Ativo' },
      { nome: 'Inativo' },
      { nome: 'Transferido' },
      { nome: 'Remanejado' },
      { nome: 'Desistente' },
    ],
  });

  const perfil = await prisma.perfil.createMany({
    data: [
      { nome: 'Admin' },
      { nome: 'Supervisor' },
      { nome: 'Professor' },
      { nome: 'Responsável' },
    ],
  });

  const profTeste = await prisma.usuario.create({
    data: {
      nome: default_prof.nome,
      email: default_prof.email,
      senha: await hash(default_prof.senha),
      perfilID: 3,
    },
  });

  const supTeste = await prisma.usuario.create({
    data: {
      nome: default_super.nome,
      email: default_super.email,
      senha: await hash(default_super.senha),
      perfilID: 2,
    },
  });

  const admin = await prisma.usuario.create({
    data: {
      nome: default_admin.nome,
      email: default_admin.email,
      senha: await hash(default_admin.senha),
      perfilID: 1,
    },
  });

  const semana = await prisma.semana.create({
    data: {
      nome: 'de 12 à 16 de julho',
    },
  });

  const turma = await prisma.turma.create({
    data: {
      nome: 'Pré I/A',
      usuarioID: profTeste.id,
    },
  });

  const alunoTeste = await prisma.aluno.create({
    data: {
      nome: default_aluno.nome,
      ra: default_aluno.ra,
      // statusID: 1,
    },
  });

  const atividade1 = await prisma.atividade.create({
    data: {
      nome: 'Atividade de Arte',
      descricao: 'Utilizando Formas',
    },
  });

  const atividade2 = await prisma.atividade.create({
    data: {
      nome: 'Atividade de Alfabtização',
      descricao: 'Chamada com Ficha',
    },
  });

  const turmaAluno = await prisma.turma_Aluno.create({
    data: {
      alunoID: alunoTeste.id,
      turmaID: turma.id,
    },
  });

  const semanaTurma = await prisma.semana_Turma.create({
    data: {
      semanaID: semana.id,
      turmaID: turma.id,
    },
  });

  const acaoTeste = await prisma.acao.create({
    data: {
      semanaTurmaID: semanaTurma.id,
    },
  });

  const turmaAtividadeSemana = await prisma.turma_Atividade_Semana.createMany({
    data: [
      { semanaTurmaID: semanaTurma.id, atividadeID: atividade1.id },
      { semanaTurmaID: semanaTurma.id, atividadeID: atividade2.id },
    ],
  });
}

async function main() {
  await populateDB();
}
if (process.env.NODE_ENV !== 'test') {
  main()
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
}

module.exports = {
  default_prof,
  default_super,
  default_admin,
  default_aluno,
  populateDB,
};

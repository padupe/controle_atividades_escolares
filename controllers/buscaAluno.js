const prisma = require('../prisma/prisma');

async function buscaAluno(ra_aluno) {
  let result = await prisma.aluno.findUnique({
    where: { ra: ra_aluno },
    select: {
      id: true,
      nome: true,
      ra: true,
      status: {
        select: {
          nome: true,
        },
      },
    },
  });
  return result;
}

module.exports = { buscaAluno };

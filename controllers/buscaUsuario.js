const prisma = require('../prisma/prisma');

async function buscaUsuario(email_user) {
  let result = await prisma.usuario.findUnique({
    where: { email: email_user },
    select: {
      id: true,
      nome: true,
      email: true,
      senha: true,
      perfilID: true,
      perfil: {
        select: {
          nome: true,
        },
      },
      statusID: true,
      status: {
        select: {
          nome: true,
        },
      },
    },
  });
  return result;
}

module.exports = { buscaUsuario };

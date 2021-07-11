const prisma = require('../prisma/prisma');

async function findUser(email_user) {
  let result = await prisma.usuario.findUnique({
    where: { email: email_user },
    select: {
      id: true,
      nome: true,
      email: true,
      senha: true,
    },
  });
  return result;
}

module.exports = { findUser };

const { verificarJWT } = require('../auth/token');
const prisma = require('../prisma/prisma');
const logger = require('../utilities/logger');
const { raValido } = require('../utilities/raValidator');
const { v4 } = require('uuid');
const { buscaAluno } = require('./buscaAluno');

const index = async (req, res) => {
  res.send('Auth Route');
};

const create = async (req, res) => {
  if (verificarJWT(req.headers.authorization.replace('Bearer ', ''))) {
    const { nome, ra } = req.body;
    logger.debug(JSON.stringify(req.body));

    switch (true) {
      case raValido(ra) == false:
        logger.error('RA Inválido!');
        return res.status(401).json({ erro: 'RA Inválido!' });

      default:
        try {
          const novoAluno = await prisma.aluno.create({
            data: {
              id: v4(),
              nome: nome,
              ra: ra,
            },
          });
          return res.status(201).json({ novoAluno });
        } catch (erro) {
          logger.error(JSON.stringify(erro));
          console.log(erro);
          return res.status(500).json(error);
        }
    }
  }
  res.status(401).json({ erro: 'Usuário não autorizado.' });
};

const show = async (req, res) => {
  if (verificarJWT(req.headers.authorization.replace('Bearer ', ''))) {
    const { ra } = req.params;
    logger.debug(JSON.stringify(req.params));

    try {
      const exibeAluno = await buscaAluno(ra);
      if (exibeAluno == null) {
        logger.error('Aluno não localizado!');
        return res.status(500).json({ erro: 'Aluno não localizado' });
      }
      return res.status(200).json({ exibeAluno });
    } catch (erro) {
      logger.error(JSON.stringify(erro));
      return res.status(404).json({ erro: erro });
    }
  }
  res.status(401).json({ erro: 'Usuário não autorizado.' });
};

const update = async (req, res) => {
  // Teste de Commit
  // Teste de Commit2
};

const destroy = async (req, res) => {};

module.exports = {
  index,
  create,
  show,
  update,
  destroy,
};

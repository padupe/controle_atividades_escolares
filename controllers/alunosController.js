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
  if (verificarJWT(req.headers.authorization.replace('Bearer ', ''))) {
    const { ra } = req.params;
    const { nome, status } = req.body;
    logger.debug(JSON.stringify(req.params));

    const verifyPerfil = verificarJWT(
      req.headers.authorization.replace('Bearer ', '')
    );

    if (
      verifyPerfil.perfil == process.env.ADMIN ||
      verifyPerfil.perfil == process.env.SUPERVISOR
    ) {
      try {
        const localizaAluno = await buscaAluno(ra);
        if (localizaAluno == null) {
          logger.error('Aluno não localizado!');
          return res.status(500).json({ erro: 'Aluno não localizado' });
        }

        const atualizarAluno = await prisma.aluno.update({
          where: { ra: ra },
          data: {
            nome: nome,
            statusID: status,
          },
        });

        const resultado = await buscaAluno(atualizarAluno.ra);

        return res
          .status(200)
          .json({ msg: 'Aluno Atualizado com Sucesso', resultado });
      } catch (erro) {
        console.log(erro);
        logger.error(JSON.stringify(erro));
        return res.status(404).json({ erro: erro });
      }
    }
    res.status(401).json({
      erro: 'Você não possui permissão para realizar alteração no cadastro do Aluno!',
    });
  }
  res.status(401).json({ erro: 'Usuário não autorizado.' });
};

const destroy = async (req, res) => {};

module.exports = {
  index,
  create,
  show,
  update,
  destroy,
};

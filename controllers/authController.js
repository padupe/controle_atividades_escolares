const validaEmail = require('email-validator');
const logger = require('../utilities/logger');
const { findUser } = require('./findUser');
const { compare } = require('../utilities/crypt');
const { gerarJWT } = require('../auth/token');

const index = async (req, res) => {
  res.send('Auth Route');
};

const logUser = async (req, res) => {
  const { email, senha } = req.body;

  switch (true) {
    case validaEmail.validate(email) == false:
      logger.error('Dados Inválidos!');
      return res.status(400).json({ error: 'Dados Inválidos!' });

    default:
      try {
        const usuario = await findUser(email);
        //Se o e-mail informado estiver incorreto ou não existir cai no IF
        if (usuario == null) {
          logger.error('Dados Inválidos!');
          return res.status(401).json({ error: 'Dados Inválidos!' });
        }

        const senhaOK = await compare(senha, usuario.senha);

        switch (true) {
          case senhaOK == false:
            logger.error('Dados Inválidos!');
            return res.status(401).json({ error: 'Dados Inválidos!' });

          default:
            try {
              const Token = await gerarJWT({ usuario: usuario.email });
              return res.status(202).json({ tokenJWT: Token });
            } catch (error) {}
        }
      } catch (error) {
        logger.error(JSON.stringify(error));
        return res.status(401).json({ error: 'Dados Inválidos!' });
      }
  }
};

module.exports = {
  index,
  logUser,
};

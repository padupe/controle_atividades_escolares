const validaEmail = require('email-validator');
const logger = require('../utilities/logger');
const { buscaUsuario } = require('./buscaUsuario');
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
      return res.status(400).json({ erro: 'Dados Inválidos!' });

    default:
      try {
        const usuario = await buscaUsuario(email);
        //Se o e-mail informado estiver incorreto ou não existir cai no IF
        if (usuario == null) {
          logger.error('Dados Inválidos!');
          return res.status(401).json({ erro: 'Dados Inválidos!' });
        }

        const senhaOK = await compare(senha, usuario.senha);

        switch (true) {
          case senhaOK == false:
            logger.error('Dados Inválidos!');
            return res.status(401).json({ erro: 'Dados Inválidos!' });

          case usuario.statusID == process.env.INATIVO:
            logger.error('Usuário Inativo!');
            return res.status(401).json({
              erro: 'Suas credenciais não são válidas. Contate o Administrador.',
            });

          default:
            try {
              const Token = await gerarJWT({
                email: usuario.email,
                perfil: usuario.perfilID,
              });
              return res.status(202).json({ tokenJWT: Token });
            } catch (erro) {
              logger.error(JSON.stringify(erro));
            }
        }
      } catch (erro) {
        logger.error(JSON.stringify(erro));
        return res.status(401).json({ erro: 'Dados Inválidos!' });
      }
  }
};

module.exports = {
  index,
  logUser,
};

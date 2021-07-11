require('dotenv').config();
const jwt = require('jsonwebtoken');
const logger = require('../utilities/logger');

const options = {
  algorithm: process.env.ALGORITHM,
  issuer: process.env.ISSUER,
  expiresIn: process.env.LOGIN_EXP_TIME,
};

function gerarJWT(payload) {
  console.log(payload);
  return jwt.sign(payload, process.env.SECRET_KEY, options);
}

function verificarJWT(token) {
  return jwt.verify(
    token,
    process.env.SECRET_KEY,
    options,
    function (err, decoded) {
      if (err) {
        logger.error('JWT:', err);
        return false;
      }
      return decoded;
    }
  );
}

module.exports = { gerarJWT, verificarJWT };

const bcrypt = require('bcrypt');
const saltRounds = 10;

const hash = async (data) => {
  return await bcrypt.hash(data, saltRounds);
};

const compare = async (senha, data) => {
  return await bcrypt.compare(senha, data);
};

module.exports = {
  hash,
  compare,
};

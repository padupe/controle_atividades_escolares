const express = require('express');
const app = express();
const routes = require('./routes');
const logger = require('./utilities/logger');

app.use(express.json());

if (process.env.NODE_ENV !== 'test') {
  app.listen(process.env.PORT, () => {
    logger.info('Server Started! 🚀');
    console.log('Server Started! 🚀');
  });
}

app.use('v1/', routes);

module.exports = app;

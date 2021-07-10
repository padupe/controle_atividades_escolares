const express = require('express');
const app = express();
// const routes = require('./routes');

app.use(express.json());

app.listen(process.env.PORT, () => {
  `Server Started on port ${process.env.PORT} with env ${process.env.NODE_ENV}! 🚀`;
});

// app.use('/', routes);

module.exports = app;

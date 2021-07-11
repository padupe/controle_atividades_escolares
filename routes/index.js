const express = require('express');
const app = express();
const auth = require('./auth');
const alunos = require('./alunos');

app.use(express.json());
app.use('/auth', auth);
app.use('/alunos', alunos);

module.exports = app;

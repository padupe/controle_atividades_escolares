'use strict';
const express = require('express');
const router = express.Router();
const controller = require('../controllers/alunosController');

router.post('/', controller.create);

router.get('/:ra', controller.show);

module.exports = router;

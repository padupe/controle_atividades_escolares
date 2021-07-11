'use strict';
const express = require('express');
const router = express.Router();
const controller = require('../controllers/authController');

router.get('/', controller.index);

router.post('/', controller.logUser);

module.exports = router;

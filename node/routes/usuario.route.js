const express = require('express');
const router = express.Router();

const usuario_controller = require('../controllers/usuario.controller');

router.get('/test', usuario_controller.test);
router.post('/login', usuario_controller.usuario_login);

module.exports = router;

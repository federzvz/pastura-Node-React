const express = require('express');
const router = express.Router();

const pastura_controller = require('../controllers/pastura.controller');

router.get('/test', pastura_controller.test);

module.exports = router;

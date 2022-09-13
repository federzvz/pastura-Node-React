const express = require('express');
const router = express.Router();

const pastura_controller = require('../controllers/pastura.controller');

router.get('/test', pastura_controller.test);
router.post('/create', pastura_controller.pastura_create);

module.exports = router;

const express = require('express');
const router = express.Router();

const pastura_controller = require('../controllers/pastura.controller');

router.get('/test', pastura_controller.test);
router.post('/create', pastura_controller.pastura_create);
router.post('/getAll', pastura_controller.pastura_getAll);
router.get('/all', pastura_controller.pastura_getAll);

module.exports = router;

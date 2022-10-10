const express = require('express');
const router = express.Router();

const pastura_controller = require('../controllers/pastura.controller');

router.get('/test', pastura_controller.test);
router.post('/pasturas', pastura_controller.pastura_create);
router.post('/getAll', pastura_controller.pastura_getAll);
router.get('/all', pastura_controller.pastura_get);
router.get('/pasturas', pastura_controller.pastura_pasturas);
router.get('/pasturas/:id', pastura_controller.pastura_edit);
router.delete('/pasturas/:id', pastura_controller.pastura_delete);

module.exports = router;

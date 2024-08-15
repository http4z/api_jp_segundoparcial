const express = require('express');
const router = express.Router();
const prestamos = require('../controllers/prestamos.controller.js');

router.post('/prestamos', prestamos.create);
router.get('/prestamos', prestamos.findAll);
router.get('/prestamos/:numeroPedido', prestamos.findByNumeroPedido);
router.put('/prestamos/:numeroPedido', prestamos.update);
router.delete('/prestamos/:numeroPedido', prestamos.delete);

module.exports = router;

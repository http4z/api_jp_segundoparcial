const express = require('express');
const router = express.Router();
const controlNotas = require('../controllers/control_notas.controller.js');

router.post('/controlNotas', controlNotas.create);
router.get('/controlNotas', controlNotas.findAll);
router.put('/controlNotas/:id_nota', controlNotas.update);
router.delete('/controlNotas/:id_nota', controlNotas.delete);

module.exports = router;

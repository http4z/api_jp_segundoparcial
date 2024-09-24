const express = require('express');
const router = express.Router();
const cursos = require('../controllers/cursos.controller.js');

router.post('/cursos', cursos.create);
router.get('/cursos', cursos.findAll);
router.put('/cursos/:id_curso', cursos.update);
router.delete('/cursos/:id_curso', cursos.delete);

module.exports = router;

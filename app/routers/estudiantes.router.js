const express = require('express');
const router = express.Router();
const estudiantes = require('../controllers/estudiantes.controller.js');

router.post('/estudiantes', estudiantes.create);
router.get('/estudiantes', estudiantes.findAll);
router.put('/estudiantes/:id_estudiante', estudiantes.update);
router.delete('/estudiantes/:id_estudiante', estudiantes.delete);

module.exports = router;

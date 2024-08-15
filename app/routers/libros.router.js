const express = require('express');
const router = express.Router();
const libros = require('../controllers/libros.controller.js');

router.post('/libros', libros.create);
router.get('/libros', libros.findAll);
router.get('/libros/:nombreLibro', libros.findByName);
router.put('/libros/:nombreLibro', libros.update);
router.delete('/libros/:nombreLibro', libros.delete);

module.exports = router;

const db = require('../config/db.config.js');
const Libro = db.Libro;

// Crear un nuevo libro
exports.create = (req, res) => {
    Libro.create({
        nombreLibro: req.body.nombreLibro,
        editorial: req.body.editorial,
        autor: req.body.autor,
        genero: req.body.genero,
        paisAutor: req.body.paisAutor,
        numeroPaginas: req.body.numeroPaginas,
        anoEdicion: req.body.anoEdicion,
        precioLibro: req.body.precioLibro
    }).then(libro => {
        res.status(201).json(libro);
    }).catch(err => {
        res.status(500).json({
            message: "Error al crear el libro",
            error: err.message
        });
    });
};

// Obtener todos los libros
exports.findAll = (req, res) => {
    Libro.findAll().then(libros => {
        res.status(200).json(libros);
    }).catch(err => {
        res.status(500).json({
            message: "Error al obtener los libros",
            error: err.message
        });
    });
};

// Obtener un libro por nombre
exports.findByName = (req, res) => {
    Libro.findOne({
        where: { nombreLibro: req.params.nombreLibro }
    }).then(libro => {
        if (!libro) {
            return res.status(404).json({
                message: "Libro no encontrado con nombre " + req.params.nombreLibro
            });
        }
        res.status(200).json(libro);
    }).catch(err => {
        res.status(500).json({
            message: "Error al obtener el libro",
            error: err.message
        });
    });
};

// Actualizar un libro por nombre
exports.update = (req, res) => {
    Libro.update(req.body, {
        where: { nombreLibro: req.params.nombreLibro }
    }).then(result => {
        if (result[0] === 0) {
            return res.status(404).json({
                message: "Libro no encontrado con nombre " + req.params.nombreLibro
            });
        }
        res.status(200).json({
            message: "Libro actualizado correctamente"
        });
    }).catch(err => {
        res.status(500).json({
            message: "Error al actualizar el libro",
            error: err.message
        });
    });
};

// Eliminar un libro por nombre
exports.delete = (req, res) => {
    Libro.destroy({
        where: { nombreLibro: req.params.nombreLibro }
    }).then(result => {
        if (result === 0) {
            return res.status(404).json({
                message: "Libro no encontrado con nombre " + req.params.nombreLibro
            });
        }
        res.status(200).json({
            message: "Libro eliminado correctamente"
        });
    }).catch(err => {
        res.status(500).json({
            message: "Error al eliminar el libro",
            error: err.message
        });
    });
};

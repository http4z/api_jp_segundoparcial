const db = require('../config/db.config.js');
const Prestamo = db.Prestamo;

// Crear un nuevo préstamo
exports.create = (req, res) => {
    Prestamo.create({
        codigoLibro: req.body.codigoLibro,
        codigoUsuario: req.body.codigoUsuario,
        fechaSalida: req.body.fechaSalida,
        fechaMaximaDevolucion: req.body.fechaMaximaDevolucion,
        fechaDevolucion: req.body.fechaDevolucion
    }).then(prestamo => {
        res.status(201).json(prestamo);
    }).catch(err => {
        res.status(500).json({
            message: "Error al crear el préstamo",
            error: err.message
        });
    });
};

// Obtener todos los préstamos
exports.findAll = (req, res) => {
    Prestamo.findAll().then(prestamos => {
        res.status(200).json(prestamos);
    }).catch(err => {
        res.status(500).json({
            message: "Error al obtener los préstamos",
            error: err.message
        });
    });
};

// Obtener un préstamo por número de pedido
exports.findByNumeroPedido = (req, res) => {
    Prestamo.findOne({
        where: { numeroPedido: req.params.numeroPedido }
    }).then(prestamo => {
        if (!prestamo) {
            return res.status(404).json({
                message: "Préstamo no encontrado con número de pedido " + req.params.numeroPedido
            });
        }
        res.status(200).json(prestamo);
    }).catch(err => {
        res.status(500).json({
            message: "Error al obtener el préstamo",
            error: err.message
        });
    });
};

// Actualizar un préstamo por número de pedido
exports.update = (req, res) => {
    Prestamo.update(req.body, {
        where: { numeroPedido: req.params.numeroPedido }
    }).then(result => {
        if (result[0] === 0) {
            return res.status(404).json({
                message: "Préstamo no encontrado con número de pedido " + req.params.numeroPedido
            });
        }
        res.status(200).json({
            message: "Préstamo actualizado correctamente"
        });
    }).catch(err => {
        res.status(500).json({
            message: "Error al actualizar el préstamo",
            error: err.message
        });
    });
};

// Eliminar un préstamo por número de pedido
exports.delete = (req, res) => {
    Prestamo.destroy({
        where: { numeroPedido: req.params.numeroPedido }
    }).then(result => {
        if (result === 0) {
            return res.status(404).json({
                message: "Préstamo no encontrado con número de pedido " + req.params.numeroPedido
            });
        }
        res.status(200).json({
            message: "Préstamo eliminado correctamente"
        });
    }).catch(err => {
        res.status(500).json({
            message: "Error al eliminar el préstamo",
            error: err.message
        });
    });
};

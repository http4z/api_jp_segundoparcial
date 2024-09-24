const db = require('../config/db.config.js');
const Estudiante = db.Estudiante;

exports.create = (req, res) => {
    Estudiante.create(req.body)
        .then(estudiante => res.status(201).json(estudiante))
        .catch(err => res.status(500).json({ message: "Error al crear el estudiante", error: err.message }));
};

exports.findAll = (req, res) => {
    Estudiante.findAll()
        .then(estudiantes => res.status(200).json(estudiantes))
        .catch(err => res.status(500).json({ message: "Error al obtener los estudiantes", error: err.message }));
};

exports.update = (req, res) => {
    Estudiante.update(req.body, { where: { id_estudiante: req.params.id_estudiante } })
        .then(result => res.status(200).json({ message: "Estudiante actualizado correctamente" }))
        .catch(err => res.status(500).json({ message: "Error al actualizar el estudiante", error: err.message }));
};

exports.delete = (req, res) => {
    Estudiante.destroy({ where: { id_estudiante: req.params.id_estudiante } })
        .then(() => res.status(200).json({ message: "Estudiante eliminado correctamente" }))
        .catch(err => res.status(500).json({ message: "Error al eliminar el estudiante", error: err.message }));
};

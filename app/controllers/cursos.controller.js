const db = require('../config/db.config.js');
const Curso = db.Curso;

exports.create = (req, res) => {
    Curso.create(req.body)
        .then(curso => res.status(201).json(curso))
        .catch(err => res.status(500).json({ message: "Error al crear el curso", error: err.message }));
};

exports.findAll = (req, res) => {
    Curso.findAll()
        .then(cursos => res.status(200).json(cursos))
        .catch(err => res.status(500).json({ message: "Error al obtener los cursos", error: err.message }));
};

exports.update = (req, res) => {
    Curso.update(req.body, { where: { id_curso: req.params.id_curso } })
        .then(result => res.status(200).json({ message: "Curso actualizado correctamente" }))
        .catch(err => res.status(500).json({ message: "Error al actualizar el curso", error: err.message }));
};

exports.delete = (req, res) => {
    Curso.destroy({ where: { id_curso: req.params.id_curso } })
        .then(() => res.status(200).json({ message: "Curso eliminado correctamente" }))
        .catch(err => res.status(500).json({ message: "Error al eliminar el curso", error: err.message }));
};

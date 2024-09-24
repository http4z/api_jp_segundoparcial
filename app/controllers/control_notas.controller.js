const db = require('../config/db.config.js');
const ControlNota = db.ControlNota;

exports.create = (req, res) => {
    const nota = req.body.nota_total;
    const status = nota < 60 ? 'reprobado' : req.body.status_curso;

    ControlNota.create({
        ...req.body,
        status_curso: status
    })
    .then(controlNota => res.status(201).json(controlNota))
    .catch(err => res.status(500).json({ message: "Error al crear el control de notas", error: err.message }));
};

exports.findAll = (req, res) => {
    ControlNota.findAll()
        .then(controlNotas => res.status(200).json(controlNotas))
        .catch(err => res.status(500).json({ message: "Error al obtener el control de notas", error: err.message }));
};

exports.update = (req, res) => {
    const nota = req.body.nota_total;
    const status = nota < 60 ? 'reprobado' : req.body.status_curso;

    ControlNota.update({
        ...req.body,
        status_curso: status
    }, { where: { id_nota: req.params.id_nota } })
    .then(result => res.status(200).json({ message: "Control de notas actualizado correctamente" }))
    .catch(err => res.status(500).json({ message: "Error al actualizar el control de notas", error: err.message }));
};

exports.delete = (req, res) => {
    ControlNota.destroy({ where: { id_nota: req.params.id_nota } })
    .then(() => res.status(200).json({ message: "Control de notas eliminado correctamente" }))
    .catch(err => res.status(500).json({ message: "Error al eliminar el control de notas", error: err.message }));
};

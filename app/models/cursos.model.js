module.exports = (sequelize, Sequelize) => {
    const Curso = sequelize.define('Curso', {
        id_curso: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_curso: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        horario_inicio: {
            type: Sequelize.TIME,
            allowNull: false
        },
        horario_fin: {
            type: Sequelize.TIME,
            allowNull: false
        },
        jornada: {
            type: Sequelize.STRING(20),
            allowNull: false
        }
    });

    return Curso;
};

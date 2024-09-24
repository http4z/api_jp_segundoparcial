module.exports = (sequelize, Sequelize) => {
    const Estudiante = sequelize.define('Estudiante', {
        id_estudiante: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre_completo: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        tutor: {
            type: Sequelize.STRING(100),
            allowNull: false
        },
        fecha_nacimiento: {
            type: Sequelize.DATE,
            allowNull: false
        },
        genero: {
            type: Sequelize.STRING(10),
            allowNull: false
        },
        ultimo_grado_aprobado: {
            type: Sequelize.STRING(50),
            allowNull: false
        }
    });

    return Estudiante;
};

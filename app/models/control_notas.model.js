module.exports = (sequelize, Sequelize) => {
    const ControlNota = sequelize.define('ControlNota', {
        id_nota: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_estudiante: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'Estudiantes',
                key: 'id_estudiante'
            }
        },
        fecha_ingreso_mes: {
            type: Sequelize.DATE,
            allowNull: false
        },
        id_curso: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'Cursos',
                key: 'id_curso'
            }
        },
        nota_total: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        status_curso: {
            type: Sequelize.STRING(20),
            allowNull: false
        }
    });

    return ControlNota;
};

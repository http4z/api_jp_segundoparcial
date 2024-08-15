module.exports = (sequelize, Sequelize) => {
    const Prestamo = sequelize.define('Prestamo', {
        numeroPedido: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        codigoLibro: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        codigoUsuario: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        fechaSalida: {
            type: Sequelize.DATE,
            allowNull: false
        },
        fechaMaximaDevolucion: {
            type: Sequelize.DATE,
            allowNull: false
        },
        fechaDevolucion: {
            type: Sequelize.DATE,
            allowNull: true
        }
    });
    return Prestamo;
};

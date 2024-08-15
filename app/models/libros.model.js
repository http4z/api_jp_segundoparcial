module.exports = (sequelize, Sequelize) => {
    const Libro = sequelize.define('Libro', {
        codigoLibro: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreLibro: {
            type: Sequelize.STRING(60),
            allowNull: false
        },
        editorial: {
            type: Sequelize.STRING(25),
            allowNull: false
        },
        autor: {
            type: Sequelize.STRING(25),
            allowNull: false
        },
        genero: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
        paisAutor: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
        numeroPaginas: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        anoEdicion: {
            type: Sequelize.DATE,
            allowNull: false
        },
        precioLibro: {
            type: Sequelize.FLOAT,
            allowNull: false
        }
    });
    return Libro;
};

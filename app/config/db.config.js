const env = require('./env.js');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  port: env.port,  // Especifica el puerto aquí
  dialect: env.dialect,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  pool: {
    max: env.pool.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle,
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Importa los modelos
db.Estudiante = require('../models/estudiantes.model.js')(sequelize, Sequelize);
db.Curso = require('../models/cursos.model.js')(sequelize, Sequelize);
db.ControlNota = require('../models/control_notas.model.js')(sequelize, Sequelize);


module.exports = db;

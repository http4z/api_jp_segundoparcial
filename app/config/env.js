const env = {
  database: 'bd_parcial_5213',
  username: 'bd_parcial_5213_user',
  password: '8gMOj8q19ZmPsgA4UK2geOF6usg2aF6T',
  host: 'dpg-cro9ill6l47c73ap7en0-a.oregon-postgres.render.com',  // Usa el host de la URL externa
  port: 5432,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

module.exports = env;

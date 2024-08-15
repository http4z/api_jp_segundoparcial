const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./app/config/db.config.js');

const librosRouter = require('./app/routers/libros.router.js');
const prestamosRouter = require('./app/routers/prestamos.router.js');

// force: true will drop the table if it already exists
db.sequelize.sync({ force: true }).then(() => {
  console.log('Drop and Resync with { force: true }');
});

const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

app.use(bodyParser.json());

// Usar las rutas importadas
app.use('/api', librosRouter);
app.use('/api', prestamosRouter);

app.get("/", (req, res) => {
  res.json({ message: "API funcionando correctamente" });
});

// Crear un Servidor
const server = app.listen(8080, function () {
  let host = server.address().address;
  let port = server.address().port;

  console.log("App escuchando en http://%s:%s", host, port);
});

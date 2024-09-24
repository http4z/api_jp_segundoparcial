const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./app/config/db.config.js');

const estudiantesRouter = require('./app/routers/estudiantes.router.js');
const cursosRouter = require('./app/routers/cursos.router.js');
const controlNotasRouter = require('./app/routers/control_notas.router.js');

db.sequelize.sync({ force: true }).then(() => {
  console.log('Drop and Resync with { force: true }');
});

const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

app.use(bodyParser.json());

// Usar las nuevas rutas
app.use('/api', estudiantesRouter);
app.use('/api', cursosRouter);
app.use('/api', controlNotasRouter);

app.get("/", (req, res) => {
  res.json({ message: "API funcionando correctamente" });
});

// Crear un Servidor
const server = app.listen(8080, function () {
  let host = server.address().address;
  let port = server.address().port;

  console.log("App escuchando en http://%s:%s", host, port);
});

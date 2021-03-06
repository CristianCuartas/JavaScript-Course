//Express
const express = require('express');
const routes = require('./routes');
const path = require('path');
const configs = require('./config');
const db = require('./config/database');
const bodyParser = require('body-parser');
db.authenticate()
  .then(() => {
    console.log('DB Conected');
  })
  .catch(error => console.log(error));
//Configurar express
const app = express();

//Habilitar pug
app.set('view engine', 'pug');

//Añadir las vistas
app.set('views', path.join(__dirname, './views'));

//Cargar una carpeta estatica llamada public
app.use(express.static('public'));

//Validar si estamos en desarrollo o en producción
const config = configs[app.get('env')];

//Variable para el sitio web
app.locals.titulo = config.nombresitio;

//Muestra el año actual
app.use((req, res, next) => {
  const fecha = new Date();
  res.locals.fechaActual = fecha.getFullYear();
  res.locals.ruta = req.path;
  return next();
});
//Body parser
app.use(bodyParser.urlencoded({ extended: true }));
//Cargar las rutas
app.use('/', routes());
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;
app.listen(port, host, () => {
  console.log('El servidor esta funcionando');
});

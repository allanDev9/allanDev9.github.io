const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const validacionRutas = require('../rutas/validacionRutas');
const otrasRutas = require('../rutas/otrasRutas');

app.use(cors());  
app.use(express.static('views'));  
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', otrasRutas);
app.use('/', validacionRutas);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
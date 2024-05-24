const mysql = require('mysql');

// Crear la conexión a la base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2003',
    database: 'datos'
});

module.exports = connection;

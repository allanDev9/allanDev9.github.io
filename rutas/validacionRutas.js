const express = require('express');
const validacionRutas = express.Router();
const connection = require('../config/conexion');

validacionRutas.post('/validar', function(req, res) {
    const datos = req.body;
    let correo = datos.correo;
    let contraseña = datos.contraseña;

    let buscar = "SELECT * FROM Registro WHERE correo = '+correo'" ;

    connection.query(buscar, function(error, resultados) {
        if (error) {
            console.error(error);
            res.status(500).send('Error en el servidor');
        } else {
            if (resultados.length > 0) {
                res.status(409).send('No se puede registrar, usuario ya registrado.');
            } else {
                let registrar = "INSERT INTO Registro (correo, contrasenia) VALUES ('" + correo + "','" + contraseña + "')";
                connection.query(registrar, function(error) {
                    if (error) {
                        console.error(error);
                        res.status(500).send({ error: 'Este correo ya existe.', backLink: '/' });
                    } else {
                        res.status(201).send('Datos almacenados correctamente.');
                    }
                    
                });
            }
        }
    });
});

module.exports = validacionRutas;
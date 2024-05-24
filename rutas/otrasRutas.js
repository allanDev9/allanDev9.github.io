const express = require('express');
const otrasRutas = express.Router();

otrasRutas.get('/', function(req, res) {
    res.render('registro');
});

module.exports = otrasRutas;
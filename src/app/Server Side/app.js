const express = require('express');
const path = require('path');

//Routes
const categoriaRouter = require('./routes/categorias');
const gastoRouter = require('./routes/gasto');

//Create Express
const app = new express();

//Ligando Routes
app.use('/categorias', categoriaRouter);
app.use('/gastos', gastoRouter);

module.exports = app;




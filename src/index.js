// const express = require('express');
import express from 'express';
import morgan from "morgan";
import {dirname, join} from 'path';
import { fileURLToPath } from 'url';

import indexRoutes from './routes/index.js'

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url))

//MOTOR DE VISTA O DE PLANTILLA (EXTENDER HTML)
//DIRECCION EN LA QUE ESTÁN LAS VISTAS
app.set('views', join(__dirname, 'views'))
app.set('view engine','ejs')
app.use(indexRoutes);

// middlewares
app.use(morgan("dev"));

// routes
app.use(indexRoutes);

// static files
app.use(express.static(join(__dirname, 'public')))

app.listen(process.env.PORT || 3000);
console.log('Servidor desplegado on port', process.env.PORT || 3000);

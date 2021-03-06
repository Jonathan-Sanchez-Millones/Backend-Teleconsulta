'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var cookieParser=require('cookie-parser');
var session=require('express-session');
var cors=require('cors');
var app = express();

//cargar archivos de rutas
var doctor_routes = require('./routes/doctor');
var user_routes = require('./routes/user');
var mensaje_routes = require('./routes/mensaje');
var paciente_routes = require('./routes/paciente');

//middlewares

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cookieParser('secreto'));
app.use(session({

    secret:'secreto',
    resave:true,
    saveUninitialized:true
}));
app.use(cors());



//CORS


//rutas
app.use('/api',user_routes);
app.use('/api',doctor_routes);
app.use('/api',mensaje_routes);
app.use('/api',paciente_routes);

//exportar
module.exports=app;
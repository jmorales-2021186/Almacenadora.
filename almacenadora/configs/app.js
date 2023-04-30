'use strict'

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const app = express();
//Puerto
const port = process.env.PORT

//Exportar rutas
const userRoutes = require('../src/user/user.reoutes');
const serviciosRoutes = require('../src/AdittionalsServices/servicios.routes')

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(helmet());
app.use(cors()); 
app.use(morgan('dev'))

//Utilizar las rutas
app.use('/user', userRoutes);
app.use('/servicios', serviciosRoutes)


exports.initServer = ()=>{
    app.listen(port);
    console.log(`Server http running in port ${port}`);
}


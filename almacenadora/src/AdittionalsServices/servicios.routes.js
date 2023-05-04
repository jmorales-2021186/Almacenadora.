'use strict'

const express = require('express')
const api = express.Router();
const serviciosController = require('./servicios.controller')
const { ensureAuth, isAdmin } = require('../services/authenticated')

api.get('/test',[ensureAuth, isAdmin], serviciosController.test);
api.post('/add',[ensureAuth, isAdmin], serviciosController.addServices);
api.get('/get',ensureAuth, serviciosController.getServices);
api.post('/get/:id',[ensureAuth, isAdmin], serviciosController.getService);

module.exports = api;
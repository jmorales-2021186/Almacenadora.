'use strict'

const express = require('express')
const api = express.Router();
const userController = require('./user.controller');

api.get('/test', userController.test);
api.post('/register', userController.registerUser);
api.post('/registerAdmin', userController.registerAdmin);

module.exports = api;
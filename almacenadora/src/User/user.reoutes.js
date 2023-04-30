'use strict'

const express = require('express')
const api = express.Router();
const userController = require('./user.controller');
const { ensureAuth } = require('../services/authenticated')

api.get('/test', ensureAuth,userController.test);
api.post('/register', userController.registerUser);
api.post('/registerAdmin', userController.registerAdmin);
api.get('/getUsers', userController.getUsers)
api.get('/getUser/:_id', userController.getUser);
api.delete('/delete/:id', userController.deleteUser);
api.post('/login', userController.login);

module.exports = api;
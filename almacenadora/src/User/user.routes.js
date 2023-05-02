'use strict'

const express = require('express')
const api = express.Router();
const userController = require('./user.controller');
const { ensureAuth, isAdmin } = require('../services/authenticated')

api.get('/test', ensureAuth,userController.test);
api.post('/register', userController.registerUser);
api.post('/registerAdmin', [ensureAuth, isAdmin], userController.registerAdmin);
api.get('/getUsers', [ensureAuth, isAdmin], userController.getUsers)
api.get('/getUser/:_id',[ensureAuth, isAdmin], userController.getUser);
api.delete('/delete/:id',[ensureAuth, isAdmin], userController.deleteUser);
api.post('/login', userController.login);

module.exports = api;
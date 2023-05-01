'use strict'

const express = require('express');
const api = express.Router()
const storageController = require('./storage.controller');

api.post('/save', storageController.addStorage);
api.get('/get', storageController.getStorages);
api.get('/getByName', storageController.searchByNameStorage);
api.put('/update/:id', storageController.updateStorage);
api.delete('/delete/:id', storageController.deleteStorage);

module.exports = api
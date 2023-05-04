'use strict'

const express = require('express');
const api = express.Router()
const storageController = require('./storage.controller');
const { ensureAuth, isAdmin } = require('../services/authenticated')

api.post('/save',[ensureAuth, isAdmin], storageController.addStorage);
api.get('/get', ensureAuth,storageController.getStorages);
api.get('/get/:id',[ensureAuth, isAdmin], storageController.getStorage)
api.get('/getByName', storageController.searchByNameStorage);
api.put('/update/:id',[ensureAuth, isAdmin], storageController.updateStorage);
api.delete('/delete/:id',[ensureAuth, isAdmin], storageController.deleteStorage);

module.exports = api
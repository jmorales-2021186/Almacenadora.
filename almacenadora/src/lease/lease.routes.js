'use strict'

const express = require('express');
const api = express.Router();
const leaseController = require('./lease.controller');
const {ensureAuth, isAdmin} = require('../services/authenticated');


api.post('/newLease', ensureAuth, leaseController.createLease);
api.get('/get', ensureAuth, leaseController.getLeases);
api.delete('/delete/:id', ensureAuth, leaseController.deleteLease);




module.exports=api;
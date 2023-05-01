'use strict'

const express = require('express');
const api = express.Router();
const leaseController = require('./lease.controller');
const {ensureAuth} = require('../services/authenticated');


api.post('/newLease', ensureAuth, leaseController.createLease);


module.exports=api;
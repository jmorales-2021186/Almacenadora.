'use strict'

require('dotenv').config();
const app = require('./configs/app')
const mongo = require('./configs/mongo');
const userDefault = require('./src/User/user.controller')

app.initServer();
mongo.connect();
userDefault.userDefault();

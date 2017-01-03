// Dependencies
var express = require('express');
var router = express.Router();

// Model
var Job = require('../models/todo.js');

// Routes
Job.methods(['get','put','post','delete']);
Job.register(router,'/todo');

// Return 
module.exports = router;
/************ Requirements *************/
var express = require('express');
var router = express.Router();

/********* Own Requirements ***********/
const usersController = require('../controllers/usersController')

/* GET users listing. */
router.get('/', usersController.index);

module.exports = router;

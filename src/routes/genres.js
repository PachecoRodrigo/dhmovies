/************ Requirements *************/
var express = require('express');
var router = express.Router();
var path = require('path');

/********* Own Requirements ***********/
// var genresController = require(path.join(__dirname, '..', 'controllers', 'genresController'));
var genresController = require('../controllers/genresController')
/*** GET ALL GENRES ***/ 
router.get('/', genresController.all);

/*** GET ONE GENRE ***/
router.get('/detail/:idGenre', genresController.detail);

module.exports = router;

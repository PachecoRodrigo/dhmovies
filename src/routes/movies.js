/************ Requirements *************/
var express = require('express');
var router = express.Router();
var path = require('path');

/********* Own Requirements ***********/
const moviesController = require(path.join(__dirname, '..','controllers','moviesController'));

/*** GET ALL MOVIES ***/ 
router.get('/', moviesController.all);

/*** GET ONE MOVIE ***/
router.get('/detail/:idMovie', moviesController.detail);

/*** NEW MOVIES ***/ 
router.get('/new', moviesController.new);

/*** RECOMMENDED  ***/ 
router.get('/recommended', moviesController.recommended);

/*** SEARCH ***/ 
router.post('search', moviesController.search);

/*** CREATE NEW MOVIE ***/ 
router.get('/create', moviesController.create);
router.post('/create', moviesController.create);

/*** EDIT MOVIE ***/ 
router.get('/edit/:idMovie', moviesController.edit); 
router.post('/edit/:idMovie', moviesController.update); 

/*** DELETE MOVIE ***/ 
router.get('/delete/:idMovie', moviesController.destroy);

module.exports = router;
/************ Requirements *************/
var express = require('express');
var router = express.Router();

/********* Own Requirements ***********/
const moviesController = require('../controllers/moviesController')

/*** GET ALL MOVIES ***/ 
router.get('/', moviesController.all);

/*** GET ONE MOVIE ***/
router.get('/detail/:id', moviesController.detail);

/*** CREATE NEW MOVIE ***/ 
router.get('/new', moviesController.new);
router.post('/create', moviesController.create)

/*** EDIT MOVIE ***/ 
router.get('/edit/:idMovie', moviesController.edit); 
router.post('/edit/:idMovie', moviesController.update); 

/*** DELETE MOVIE ***/ 
router.get('/delete/:idMovie', moviesController.destroy)

/*** RECOMmENDED  ***/ 
router.get('/recommended', moviesController.recommended);

/*** SEARCH ***/ 
router.post('search-form/:idProduct', moviesController.search);

module.exports = router;
/************ Requirements *************/
var express = require('express');
var router = express.Router();

/********* Own Requirements ***********/
const actorsController = require('../controllers/actorsController')

/*** GET ALL ACTORS ***/ 
router.get('/', actorsController.all);

/*** GET ONE ACTORS ***/
router.get('/detail/:id', actorsController.detail);

/*** CREATE NEW ACTORS ***/
router.get('/new', actorsController.new);
router.post('/create', actorsController.create);

/*** EDIT ACTORS ***/ 
router.get('/edit/:idMovie', actorsController.edit);
router.post('/edit/:idMovie', actorsController.update);

/*** DELETE ACTORS ***/ 
router.get('/delete/:idMovie', actorsController.destroy)

/*** RECOMMENDED  ***/ 
router.get('/recommended', actorsController.recommended);

/*** SEARCH ***/ 
router.post('search-form/:idProduct', actorsController.search);

module.exports = router;
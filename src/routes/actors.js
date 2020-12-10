/************ Requirements *************/
var express = require('express');
var router = express.Router();
var path = require('path');

/********* Own Requirements ***********/
const actorsController = require(path.join(__dirname, '..','controllers','actorsController'));

/*** GET ALL ACTORS */ 
router.get('/', actorsController.all);

/*** GET ONE ACTORS */
router.get('/detail/:idActor', actorsController.detail);

/*** CREATE NEW ACTORS */
router.get('/new', actorsController.new);
router.post('/create', actorsController.create);

/*** SHOW ACTING */ 
router.get('/acting', actorsController.acting)
router.post('/acting', actorsController.store)

/*** EDIT ACTORS */ 
router.get('/edit/:idActor', actorsController.edit);
router.post('/edit/:idActor', actorsController.update);

/*** DELETE ACTORS */ 
router.get('/delete/:idActor', actorsController.destroy)

/*** RECOMMENDED  */ 
router.get('/discover', actorsController.discover);

/*** SEARCH */ 
router.post('search-form/:idProduct', actorsController.search);

module.exports = router;
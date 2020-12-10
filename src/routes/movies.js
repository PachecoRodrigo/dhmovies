/************ Requirements *************/
var express = require('express');
var router = express.Router();
var path = require('path');
let { check } = require('express-validator');

/********* Own Requirements ***********/
const moviesController = require(path.join(__dirname, '..','controllers','moviesController'));

/*** GET ALL MOVIES ***/ 
router.get('/', moviesController.all);

/*** GET ONE MOVIE ***/
router.get('/detail/:idMovie', moviesController.detail);

/*** NEW MOVIES ***/ 
router.get('/new', moviesController.new);

/*** RECOMMENDED  ***/ 
router.get('/discover', moviesController.discover);

/*** SEARCH ***/ 
router.post('/search', moviesController.search);

/*** CREATE NEW MOVIE ***/ 
router.get('/create', moviesController.create);
router.post('/create',
  [ /*** VALIDATING ENTRIES ***/
    check('title').notEmpty().withMessage('El titulo es obligatorio'),
    check('rating').isFloat().withMessage('Rating es un numero'),
    check('awards').isInt().withMessage('Premios es un numero'),
    check('length').isInt().withMessage('Duración es un numero'),
    check('release_date').isDate().withMessage('Seleccionar fecha'),
    check('genre_id').isInt().withMessage('Seleccione el genero'),
  ],  moviesController.store);
  
  /*** EDIT MOVIE ***/
  router.get('/edit/:idMovie', moviesController.edit);
  router.post('/edit/:idMovie',
  [ /*** VALIDATING ENTRIES ***/
    check('title').notEmpty().withMessage('El titulo es obligatorio'),
    check('rating').isFloat().withMessage('Rating es un numero'),
    check('awards').isInt().withMessage('Premios es un numero'),
    check('length').isInt().withMessage('Duración es un numero'),
    check('release_date').isDate().withMessage('Seleccionar fecha'),
    check('genre_id').isInt().withMessage('Seleccione el genero'),
  ],  moviesController.update); 

/*** DELETE MOVIE ***/ 
router.post('/delete/:idMovie', moviesController.destroy);

module.exports = router;
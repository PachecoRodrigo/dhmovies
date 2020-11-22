var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('gender', { title: 'Todos los generos' });
});

module.exports = router;

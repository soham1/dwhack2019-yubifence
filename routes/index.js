var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/registerOptions', function(req, res, next) {
  res.render('registerOptions');
});

router.get('/jointRegister', function(req, res, next) {
  res.render('jointRegister');
});

module.exports = router;

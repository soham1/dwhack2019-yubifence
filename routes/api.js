var express = require('express');
var router = express.Router();
var selfsigned = require('selfsigned');
var fs = require('fs');

/* GET home page. */
router.get('/test', function(req, res, next) {
  res.json({result: 'OK'});
});

router.get('/getData', function(req, res, next) {
  // var data = JSON.parse(fs.readFileSync('data/data.json', 'utf8'));
  res.json(req.data);
});

router.get('/generateCert/:id', function(req, res, next) {
  var id = +req.params.id;
  var user = req.data.users[id - 1];
  console.log('Generating cert for:', user.name);
  var attrs = [{ name: 'commonName', value: user.name }];
  var pems = selfsigned.generate(attrs, {pkcs7: true});
  var fileName = 'data/cert-' + id + '.json';
  fs.writeFileSync(fileName, JSON.stringify(pems, null, 2), 'utf8');
  console.log('File generated', fileName);
  res.json({cert: pems.cert});
});


router.post('/registerUsers', function(req, res, next) {
  var body = req.body;
  console.log("REGISTER Body", body);
  res.json({result: 'OK'});
});

router.post('/authenticate', function(req, res, next) {
  var body = req.body;
  console.log("LOGIN Body", body);
  res.json({result: 'OK'});
});

module.exports = router;

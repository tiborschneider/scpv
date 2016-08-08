var express = require('express');
var router = express.Router();
var database123 = require('../bin/db.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("start");
  res.render('index', { title: 'Express' });
  //database123.login("test");
});



module.exports = router;

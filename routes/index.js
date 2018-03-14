var express = require('express');
var router = express.Router();
var exchangeRates = require('../model/currencyDB');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/convert', function(req, res, next) {
  var dollars = req.query.dollars;
  var rate = req.query.to_currency;

  var converted = dollars* exchangeRates[rate];

  res.render('results', {
    dollars: dollars,
      toCurrency: rate,
      converted:converted
  });
});
router.get('/about', function(req, res, next){
  res.render('about', {name: " this work"})
});

module.exports = router;

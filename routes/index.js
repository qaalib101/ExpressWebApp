var express = require('express');
var router = express.Router();
var exchangeRates = require('../model/currencyDB');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
/*Get the conversion result page*/
router.get('/convert', function(req, res, next) {
  //amount of currency
  var currency_amount = req.query.currency_amount;
  // to and from rates
  var to_rate = req.query.to_currency;
  var from_rate = req.query.from_currency;
  // connect strings to get the currency rate from the currencydb file
  var rate = from_rate.toString() + "to" + to_rate.toString();
  var converted = currency_amount * exchangeRates[rate];

  res.render('results', {
    currency: currency_amount,
      fromCurrency: from_rate,
      toCurrency: to_rate,
      converted: converted
  });
});
/*get the about page*/
router.get('/about', function(req, res, next){
  res.render('about', {
    name: "Qaalib Farah",
      description: "This site is used to convert US " +
      "dollars into foreign currency"})
});

module.exports = router;

var express = require('express');
var router = express.Router();
var exchangeRates = require('../model/currencyDB');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
/*Get the conversion result page*/
router.get('/convert', function(req, res, next) {
  var currency_amount = req.query.currency_amount;
  var to_rate = req.query.to_currency;
  var from_rate = req.query.from_currency;
  var fromCurrency = from_rate.textContent;
  var rate = to_rate.toString() + "to" + from_rate.toString();
  var converted = currency_amount * exchangeRates[rate];

  res.render('results', {
    currency: currency_amount,
      type: fromCurrency,
      toCurrency: to_rate,
      converted:converted
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

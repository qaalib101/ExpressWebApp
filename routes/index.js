var express = require('express');
var router = express.Router();
var exchangeRates = require('../model/currencyDB');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
/*Get the conversion result page*/
router.get('/convert', function(req, res, next) {
    var to_rate = req.query.to_currency;
    var from_rate = req.query.from_currency;
   exchangeRates(function(err, json) {

          // handle JSON here.
          console.log(json);
           //amount of currency
           var currency_amount = req.query.currency_amount;
           // to and from rates
           var to_rate = req.query.to_currency;
           var from_rate = req.query.from_currency;
           // connect to API pass rates in function
       var rate;
       // if the rates are the same the rate will equal 1
       if(to_rate == from_rate){
           rate = 1;
       }else{
           rate = json.rates[to_rate];
       }

          var converted = currency_amount * rate;


          res.render('results', {
              currency: currency_amount,
              fromCurrency: from_rate,
              toCurrency: to_rate,
              converted: converted
          });
      }
      , from_rate,to_rate);

});


/*get the about page*/
router.get('/about', function(req, res, next){
  res.render('about', {
    name: "Qaalib Farah",
      description: "This site is used to convert currency " +
      "into foreign currency"})
});

module.exports = router;

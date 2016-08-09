var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cat click' });
});
router.get('/two', function(req, res, next) {
  res.render('cat-two', { title: 'Cat click', subTitle: 'Cat click two' });
});

module.exports = router;

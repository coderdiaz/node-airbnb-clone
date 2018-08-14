var express = require('express');
var router = express.Router();
var House = require('../models/house');

/* GET home page */
router.get('/', async function (req, res, next) {
  const items = await House.find().exec();
  res.render('index', { places: items });
});

module.exports = router;
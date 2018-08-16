var express = require('express');
var router = express.Router();
var House = require('../models/house');

/* GET home page */
router.get('/', async (req, res, next) => {
  try {
    const items = await House.find().exec();
    res.render('index', { places: items });
  } catch (err) {
    // TODO: Catch exception
  }
});

/* GET dashboard create page */
router.get('/create', (req, res, next) => {
  try {
    res.render('dashboard/create');
  } catch (err) {
    // TODO: Catch exception
  }
});

module.exports = router;
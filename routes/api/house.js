const express = require('express');
const router = express.Router();
const House = require('../../models/house');

/* GET / */
router.get('/', async function (req, res, next) {
  const houses = await House.find().exec();
  const data = houses;
  res.json({data});
});

/* POST / */
router.post('/', function (req, res, next) {
  const request = req.body;
  const newHouse = new House(request);
  newHouse.save();
  res.status(201).json({
    message: 'House Created'
  });
});

module.exports = router;
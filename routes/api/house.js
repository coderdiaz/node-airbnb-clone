const express = require('express');
const router = express.Router();
const House = require('../../models/house');

/* GET / */
router.get('/', async (req, res, next) => {
  try {
    const houses = await House.find().exec();
    const data = houses;
    return res.json({data});
  } catch (err) {
    // TODO: Catch exception
  }
});

/* POST / */
router.post('/', (req, res, next) => {
  try {
    const request = req.body;
    const newHouse = new House(request);
    newHouse.save();
    res.status(201).json({
      message: 'House Created'
    });
  } catch (err) {
    // TODO: Catch exception
  }
});

module.exports = router;
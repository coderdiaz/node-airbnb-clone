const mongoose = require('mongoose');
const Schema = mongoose.Schema

const HouseSchema = new Schema({
  name: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  cover: {
    type: String,
    default: ''
  },
  price: {
    type: Number,
    default: 0
  },
  location: {
    lat: {
      type: String,
      default: ''
    },
    lng: {
      type: String,
      default: ''
    }
  }
}, {
  timestamps: true
});

// Model
const HouseModel = mongoose.model('House', HouseSchema);

module.exports = HouseModel;
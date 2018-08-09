var express = require('express');
var router = express.Router();

/* GET home page */
router.get('/', function (req, res, next) {
  const items = [
    {
      id: 1,
      name: 'Esta es una bonita casa',
      description: 'Esta es una casa chida, buena, bonita y barata',
      price: '15000',
      location: {
        lat: 19.4258614,
        lng: -99.1709761
      },
      cover: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9fc409d72ac99c1a6d2590c883ed2f62&auto=format&fit=crop&w=400&q=60'
    },
    {
      id: 2,
      name: 'Esta es otra bonita casa',
      description: 'Esta es una casa chida, buena, bonita y barata',
      price: '10000',
      location: {
        lat: 19.4258614,
        lng: -99.1709761
      },
      cover: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f3619a27d02a9cbafafbb9d94d477160&auto=format&fit=crop&w=400&q=60'
    },
    {
      id: 3,
      name: 'Mi casa ideal',
      description: 'Esta es una casa chida, buena, bonita y barata',
      price: '10000',
      location: {
        lat: 19.4258614,
        lng: -99.1709761
      },
      cover: 'https://images.unsplash.com/photo-1467987506553-8f3916508521?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f07ed120eeba6a2720aeb6422f566f74&auto=format&fit=crop&w=400&q=60'
    },
    {
      id: 4,
      name: 'Mi casa ideal',
      description: 'Esta es una casa chida, buena, bonita y barata',
      price: '10000',
      location: {
        lat: 19.4258614,
        lng: -99.1709761
      },
      cover: 'https://images.unsplash.com/photo-1510563800743-aed236490d08?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b77d29430b0eac84f5eb80614d20b78c&auto=format&fit=crop&w=400&q=60'
    },
    {
      id: 5,
      name: 'Mi casa ideal',
      description: 'Esta es una casa chida, buena, bonita y barata',
      price: '10000',
      location: {
        lat: 19.4258614,
        lng: -99.1709761
      },
      cover: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6ba2b9dcc1af593a7d93ed9b4ed952ac&auto=format&fit=crop&w=400&q=60'
    }
  ];
  res.render('index', { places: items });
});

module.exports = router;
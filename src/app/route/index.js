var express = require('express');
var router = express.Router();
var React = require('React');
var searchApp = require('../component/search/server_render.jsx');

/* GET home page. */
router.get('/', function(req, res, next) {
  var App = React.createFactory(searchApp);
  res.render('index', {
    title: 'Search',
    reactHtml: React.renderToString(App())
  });
});

module.exports = router;

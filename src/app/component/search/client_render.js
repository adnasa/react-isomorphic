var React = require('react');
var SearchInput = require('./searchinput.jsx');
var SearchResultList = require('./searchresultlist.jsx');
var App = require('./server_render.jsx');

/*** @jsx React.DOM */
React.render(<App />, document.getElementById('react-main-container'));

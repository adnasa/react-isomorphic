var React = require('react');
var SearchInput = require('./searchinput.jsx');
var SearchResultList = require('./searchresultlist.jsx');
var $ = require('jquery');

/*** @jsx React.DOM */
var App = React.createClass({
  getInitialState: function() {
    return {
      result: []
    };
  },
  render: function() {
    return (
      <div>
        <SearchInput onClick={this.handleResult} />
        <SearchResultList results={this.state.result} />
      </div>
    );
  },
  /** Expected to be used only by the searchInput-component */
  handleResult: function(term) {
    var updateResult = function(response, textStatus, jqXHR) {
      this.setState({
        result: (response instanceof Array) ? response : [response]
      });
    }.bind(this);

    $.ajax('http://www.omdbapi.com', {
      method: 'GET',
      data: {
        't': term,
        'type': 'movie',
        'plot': 'full'
      },
      success: updateResult
    });
  }
});

module.exports = App;

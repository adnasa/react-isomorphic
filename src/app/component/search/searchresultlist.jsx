var React = require('react');

/** @jsx React.DOM */
var SearchResultList = React.createClass({
  render: function() {
    return (
      <div className="search-output">
        {this.props.results.map(function(result) {
          return (
            <div key={result.imdbID} className="result">
              <img src={result.Poster} alt={result.Title}/>
              <div className="content">
                <h4>{result.Title}</h4>
                <p>{result.Plot}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
});

module.exports = SearchResultList;

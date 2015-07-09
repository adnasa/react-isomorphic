var React = require('React');
/*** @jsx React.DOM */

var NativeInput = React.createClass({
  getInitialState: function() {
    return {
      value: null
    };
  },

  render: function() {
    return (
      <input type="text" value={this.state.value} onChange={this.handleChange} />
    );
  },

  handleChange: function(e) {
    this.setState({
      value: e.target.value
    });

    if (this.props.hasOwnProperty('onChange')) {
      this.props.onChange(e.target.value);
    }
  }
});

var SearchInput = React.createClass({
  render: function() {
    return (
      <div className="search-input">
        <NativeInput onChange={this.handleChange} />
        <button onClick={this.handleResult}>Search</button>
      </div>
    );
  },
  getInitialState: function() {
    return {
      term: null
    }
  },
  handleChange: function(term) {
    this.setState({
      term: term
    });
  },
  handleResult: function() {
    if (this.props.hasOwnProperty('onClick')) {
      this.props.onClick(this.state.term);
    }
  }
});

module.exports = SearchInput;

'use strict';

var React = require('react');

var Player = React.createClass({
  render: function () {
    return <div>{this.props.children}</div>;
  }
});

var Lineup = React.createClass({
  propTypes: {
    players: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      name: React.PropTypes.string.isRequired,
      salary: React.PropTypes.number.isRequired,
    })).isRequired,
    total: React.PropTypes.string.isRequired
  },

  render: function () {
    var players = this.props.players;

    var hasPlayers = players.length > 0;
    var nodes = !hasPlayers ?
      <div>Please add some players to the lineup.</div> :
      players.map(function(p) {
      return <Player key={p.id}>{p.name} - $;{p.salary}</Player>;
    });

    return (
      <div className="cart uk-panel uk-panel-box uk-panel-box-primary">
        <div className="uk-badge uk-margin-bottom">Your Lineup</div>
        <div className="uk-margin-small-bottom">{nodes}</div>
        <div className="uk-margin-small-bottom">Total: ${this.props.total}</div>
      </div>
    );
  },
});

module.exports = Lineup;

'use strict';

var React = require('react');

var Player = React.createClass({
  propTypes: {
    player: React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      salary: React.PropTypes.number.isRequired,
      display: React.PropTypes.bool.isRequired,
    }).isRequired,
    clickHandler: React.PropTypes.func.isRequired
  },

  render: function() {
    var player = this.props.player;

    return (
      <div className={'uk-panel uk-panel-box uk-margin-bottom ' + ((this.props.player.display || this.props.player.inLineup) ? 'active' : 'hide')}>
        <h4 className="uk-h4">{player.title} - ${player.salary}</h4>
        <button className="uk-button uk-button-small uk-button-primary"
          onClick={this.props.clickHandler}>
          {player.inLineup ? 'Remove' : 'Add'}
        </button>
        <hr />
      </div>
    );
  }
});

module.exports = Player;

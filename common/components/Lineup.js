'use strict';

import React, {Component, PropTypes} from 'react/addons';

class Player extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

export default class Lineup extends Component {
  static get propTypes() {
    return {
      players: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
        salary: React.PropTypes.number.isRequired,
      })).isRequired,
      total: React.PropTypes.string.isRequired
    }
  }

  render() {
    var players = this.props.players;
    var hasPlayers = players.length > 0;
    var nodes = !hasPlayers ?
      <div>Please add some players to the lineup.</div> :
      players.map(function(p) {
      return <Player key={p.id}>{p.name} - $;{p.salary}</Player>;
    });

    return (
      <div>
        <div>Your Lineup</div>
        <div>{nodes}</div>
        <div >Total: ${this.props.total}</div>
      </div>
    );
  }
}

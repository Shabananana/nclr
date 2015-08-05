'use strict';

import React, {Component, PropTypes} from 'react/addons';

export default class Player extends Component {
  static get propTypes() {
    return {
      player: React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        salary: React.PropTypes.number.isRequired,
        display: React.PropTypes.bool.isRequired,
      }).isRequired,
      clickHandler: React.PropTypes.func.isRequired
    };
  }

  render() {
    var player = this.props.player;

    return(
      <div className={((this.props.player.display || this.props.player.inLineup) ? 'active' : 'hide')}>
        <h4>{player.name} - ${player.salary}</h4>
        <button onClick={this.props.clickHandler}>
          {player.inLineup ? 'Remove' : 'Add'}
        </button>
        <hr />
      </div>
    );
  }
}

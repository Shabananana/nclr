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
      addPlayer: PropTypes.func.isRequired
    };
  }

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {player, addPlayer} = this.props;


    return(
      <div>
        <h4>{player.name} - ${player.salary}</h4>
        <button onClick={() => addPlayer(player)}>
          Add
        </button>
        <hr />
      </div>
    );
  }
}

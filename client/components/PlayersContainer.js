import React, { Component, PropTypes } from 'react';
import Player from '../../common/components/Player';

export default class PlayersContainer extends Component {
  static propTypes = {
    players: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { players, actions } = this.props;

    return (
      <section className='main'>
        <ul className='todo-list'>
          {players.map(player =>
            <Player key={player.id} player={player} {...actions} />
          )}
        </ul>
      </section>
    );
  }
}

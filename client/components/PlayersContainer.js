import React from 'react';
import Player from '../../common/components/Player';
import PlayersList from '../../common/components/PlayersList';
import reactor from '../reactor';
import getters from '../getters';
import actions from '../actions';


const PlayerContainer = React.createClass({
  onAddPlayerClicked() {
    actions.addPlayer(this.props.player);
  },

  render() {
    return (
      <Player player={this.props.player} clickHandler={this.onAddPlayerClicked} />
    );
  }
});

export default React.createClass({
  mixins: [reactor.ReactMixin],

  getDataBindings() {
    return {
      players: getters.players,
    };
  },

  render: function() {
    return (
      <PlayersList title="Player Picker)">
        {this.state.players.map(player => {
          return <PlayerContainer key={player.get('id')} player={player.toJS()} />;
        }).toList()}
      </PlayersList>
    );
  },
});

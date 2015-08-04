import React from 'react';
import reactor from '../reactor';
import Lineup from '../../common/components/Lineup';
import Player from '../../common/components/Player';
import PlayersList from '../../common/components/PlayersList';
import getters from '../getters';
import actions from '../actions';

const PlayerContainer = React.createClass({
  onRemovePlayerClicked() {
    actions.removePlayer(this.props.player);
  },

  render() {
    return (
      <Player player={this.props.player} clickHandler={this.onRemovePlayerClicked} />
    );
  }
});

export default React.createClass({
  mixins: [reactor.ReactMixin],

  getDataBindings() {
    return {
      lineup: getters.lineupPlayers,
      total: getters.lineupSalaryTotal,
    };
  },

  onClearClick() {
    actions.clearLineup(this.state.lineup);
  },

  render: function() {
    return (
      //<Lineup players={this.state.lineup.toJS()} total={this.state.total} />
      <div>
        <PlayersList title="Lineup">
          {this.state.lineup.map(player => {
            return <PlayerContainer key={player.get('id')} player={player.toJS()} />;
          }).toList()}
        </PlayersList>
        <button onClick={this.onClearClick}>reset Lineup</button>
        <h4>Total Salary: ${this.state.total}</h4>
    </div>
    );
  }
});

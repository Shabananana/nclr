import React, {Component, PropTypes} from 'react/addons';
import Player from '../../common/components/Player';
import PlayersList from '../../common/components/PlayersList';
import reactor from '../reactor';
import getters from '../getters';
import actions from '../actions';

function reactorMixin(target, name, descriptor) {
  target.testDecorator = 'testing the decorator!';
}

@reactorMixin
class PlayerContainer extends Component {
  constructor(props){
    super(props);
    this.onAddPlayerClicked = this.onAddPlayerClicked.bind(this);
  }

  onAddPlayerClicked() {
    actions.addPlayer(this.props.player);
  }

  render() {
    return (
      <Player player={this.props.player} clickHandler={this.onAddPlayerClicked} />
    );
  }
}

console.log(PlayerContainer.testDecorator);

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

import React, {Component, PropTypes} from 'react/addons';
import Player from '../../common/components/Player';
import PlayersList from '../../common/components/PlayersList';
import reactor, {ReactMixin} from '../reactor';
import getters from '../getters';
import actions from '../actions';

function reactorMixin(target, name, descriptor) {
  let test = ReactMixin;
  target.state = ReactMixin.getInitialState;
  target.componentDidMount = ReactMixin.componentDidMount;
  target.componentWillUnmount = ReactMixin.componentWillUnmount;
  target.testDecorator = 'testing the decorator!';
  target.prototype.testDecorator2 = 'testing decorator again!';
}

class PlayerContainer extends Component {
  constructor(props){
    super(props);
  }

  onAddPlayerClicked = () => {
    actions.addPlayer(this.props.player);
  }

  render() {
    return (
      <Player player={this.props.player} clickHandler={this.onAddPlayerClicked} />
    );
  }
}

/*@reactorMixin
export default class extends Component {
  getDataBindings() {
    return {
      players: getters.players,
    };
  }

  render() {
    return (
      <PlayersList title="Player Picker)">
        {this.state.players.map(player => {
          return <PlayerContainer key={player.get('id')} player={player.toJS()} />;
        }).toList()}
      </PlayersList>
    );
  }
}*/

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

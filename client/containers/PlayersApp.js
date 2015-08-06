import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Connector } from 'redux/react';
import * as Actions from '../actions';
import PlayersContainer from '../components/PlayersContainer';

export default class PlayersApp extends Component {
  render() {
    return (
      <Connector select={state => ({ players: state.players })}>
        {this.renderChild}
      </Connector>
    );
  }

  renderChild({ players, dispatch }) {
    const actions = bindActionCreators(Actions, dispatch);
    return (
      <div>
        <PlayersContainer players={players} actions={actions} />
      </div>
    );
  }
}

import React from 'react';
import App from './components/App';
import reactor from './reactor';
import actions from './actions';
import PlayersStore from './stores/PlayersStore';
import LineupStore from './stores/LineupStore';

reactor.registerStores({
  lineup: LineupStore,
  players: PlayersStore
});

actions.fetchPlayers();

React.render(
  React.createElement(App, null),
  document.getElementById('flux-app')
);

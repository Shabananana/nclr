import reactor from './reactor';
import {
  RECEIVE_PLAYERS,
  ADD_PLAYER,
  REMOVE_PLAYER,
  CLEAR_LINEUP
} from './actionTypes';

export default {
  fetchPlayers() {
    let players = [
      { id: 1, name: 'Shabananana', salary: 6789, display: true, inLineup: false },
      { id: 2, name: 'jefe', salary: 1,  display: true, inLineup: false },
      { id: 3, name: 'Kiba', salary: 456,  display: true, inLineup: false },
      { id: 4, name: 'Mctest', salary: 888,  display: true, inLineup: false }
    ];
    reactor.dispatch(RECEIVE_PLAYERS, { players });
  },
  addPlayer(player) {
    reactor.dispatch(ADD_PLAYER, { player });
  },
  removePlayer(player) {
    reactor.dispatch(REMOVE_PLAYER, { player });
  },
  clearLineup(players) {
    reactor.dispatch(CLEAR_LINEUP, { players });
  }
};

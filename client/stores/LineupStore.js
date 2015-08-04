import { Store, toImmutable } from 'nuclear-js';
import { ADD_PLAYER, REMOVE_PLAYER, CLEAR_LINEUP } from '../actionTypes';

export default Store({
  getInitialState() {
    return toImmutable({ playerSalary: {} });
  },

  initialize() {
    this.on(ADD_PLAYER, addPlayer);
    this.on(REMOVE_PLAYER, removePlayer);
    this.on(CLEAR_LINEUP, clearLineup);
  }
});

function addPlayer(state, { player }) {
  let id = player.id;
  return state.setIn(['playerSalary', id], toImmutable(player));
}

function removePlayer(state, { player }) {
  return state.deleteIn(['playerSalary', player.id]);
}

function clearLineup(state, {}) {
  return state.clear().set(toImmutable({ playerSalary: {} }));
}

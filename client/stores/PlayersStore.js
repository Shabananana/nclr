import { Store, toImmutable } from 'nuclear-js';
import { RECEIVE_PLAYERS, ADD_PLAYER, REMOVE_PLAYER, CLEAR_LINEUP } from '../actionTypes';

export default Store({
  getInitialState() {
    return toImmutable({});
  },

  initialize() {
    this.on(RECEIVE_PLAYERS, receivePlayers);
    this.on(ADD_PLAYER, hidePlayer);
    this.on(REMOVE_PLAYER, displayPlayer);
    this.on(CLEAR_LINEUP, displayPlayers);
  }
});

// All store handlers transform `(currentState, payload) => (newState)`

/**
 * Transforms an array of players to a map keyed by player.id, and merges it
 * with the current state.
 */
function receivePlayers(state, { players }) {
  let newPlayers = toImmutable(players)
    .toMap()
    .mapKeys((k, v) => v.get('id'));
  return state.merge(newPlayers);
}

/**
 * Sets the player's display value to false.
 */
function hidePlayer(state, { player }) {
  return state.update(player.id, player => {
    return player.set('display', false);
  });
}

/**
 * Sets the player's display value to true.
 */
function displayPlayer(state, { player }) {
  return state.update(player.id, player => {
    return player.set('display', true);
  });
}

/**
 * Sets all players display values to true.
 */
function displayPlayers(state, { players }) {
  return state.update(players, players.map(player => {
    player.set('display', true);
  }));
}

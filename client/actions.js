import * as types from './actionTypes';

export function addPlayer(player) {
  return {
    type: types.ADD_PLAYER,
    player
  };
}

export function removePlayer(player) {
  return {
    type: types.REMOVE_PLAYER,
    player
  };
}

export function clearLineup() {
  return {
    type: types.CLEAR_LINEUP
  };
}

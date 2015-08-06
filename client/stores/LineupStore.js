import { ADD_PLAYER, REMOVE_PLAYER, CLEAR_LINEUP } from '../actionTypes';

const initialState = [];

export default function lineup(state = initialState, action) {
  switch (action.type) {

  case ADD_PLAYER:
    return [player, ...state];

  case REMOVE_PLAYER:
    return state.filter(player =>
      player.id !== action.player.id
    );

  case CLEAR_LINEUP:
    return [];

  default:
    return state;
}

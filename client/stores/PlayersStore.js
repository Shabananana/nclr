import { ADD_PLAYER, REMOVE_PLAYER, CLEAR_LINEUP } from '../actionTypes';

const initialState = [
    { id: 1, name: 'Shabananana', salary: 6789, display: true, inLineup: false },
    { id: 2, name: 'jefe', salary: 1,  display: true, inLineup: false },
    { id: 3, name: 'Kiba', salary: 456,  display: true, inLineup: false },
    { id: 4, name: 'Mctest', salary: 888,  display: true, inLineup: false }
];

export default function players(state = initialState, action) {
  switch (action.type) {

    case ADD_PLAYER:
      return state.filter(player =>
        player.id !== action.player.id
      );

    case REMOVE_PLAYER:
      return [player, ...state];


    case CLEAR_LINEUP:
      return [players, ...state];

    default:
      return state;
  }
}

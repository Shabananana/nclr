import React from 'react';
import LineupContainer from './LineupContainer';
import PlayersContainer from './PlayersContainer';

export default class Component {
  render() {
    return(
      <div>
        <PlayersContainer />
        <LineupContainer />
      </div>
    );
  }
}

import React from 'react';
import LineupContainer from './LineupContainer';
import PlayersContainer from './PlayersContainer';

export default React.createClass({
  render() {
    return (
      <div>
        <PlayersContainer />
        <LineupContainer />
      </div>
    );
  }
});

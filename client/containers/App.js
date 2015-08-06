import React, { Component } from 'react';
import PlayersApp from './PlayersApp';
import { createRedux } from 'redux';
import { Provider } from 'redux/react';
//import * as lineupStore from '../stores/lineupStoreExport';
import * as playersStore from '../stores/playersStoreExport';

const redux = createRedux(playersStore);

export default class App extends Component {
  render() {
    return (
      <Provider redux={redux}>
        {() => <PlayersApp />}
      </Provider>
    );
  }
}

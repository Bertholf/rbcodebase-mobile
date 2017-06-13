import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';
// import Realm from 'realm';
import reducers from './reducers';
import Routing from './containers/Router';
import Warning from './services/WarningDisconnect';
import { getNetworkStatus } from './actions/networkStatus';

const logger = createLogger();
const store = createStore(
  combineReducers({ app: reducers }),
  applyMiddleware(logger, thunkMiddleware),
  autoRehydrate(),
);

store.dispatch(getNetworkStatus());

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routing />
      </Provider>
    );
  }
}

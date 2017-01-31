import React, { Component } from 'react';
import codePush from 'react-native-code-push';
import { AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';
import reducers from './reducers';
import Routing from './containers/Router';

const logger = createLogger();
const store = createStore(combineReducers({ app: reducers }),
  applyMiddleware(logger, thunkMiddleware),
  autoRehydrate());
  // uncomment this when you build it
// persistStore(store, {
//   storage: AsyncStorage,
// });
export default class App extends Component {
  componentDidMount() {
    console.log('1234');
  }
  render() {
    return (
      <Provider store={store}>
        <Routing />
      </Provider>
    );
  }
}

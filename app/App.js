import React from 'react';
import { AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { routerReducer } from 'react-native-redux-router';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';
import todoApp from './reducers';
import Routing from './containers/Router';

const logger = createLogger();
const store = createStore(combineReducers({ routerReducer, todoApp }),
  applyMiddleware(logger, thunkMiddleware),
  autoRehydrate());
  // uncomment this when you build it
// persistStore(store, {
//   storage: AsyncStorage,
// });

const App = () => (<Provider store={store}>
  <Routing />
</Provider>);
export default App;

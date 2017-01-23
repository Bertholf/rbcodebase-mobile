import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { routerReducer } from 'react-native-redux-router';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import todoApp from './reducers';
import Routing from './containers/Router';

const logger = createLogger();
const store = createStore(combineReducers({ routerReducer, todoApp }),
  applyMiddleware(logger, thunkMiddleware));
const App = () => (<Provider store={store}>
  <Routing />
</Provider>);
export default App;

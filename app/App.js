import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';
import Realm from 'realm';
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

/**
 * Sample from documentation
 */
const realmTest = () => {
  let realm = new Realm({
      schema: [{ name: 'Dog', properties: { name: 'string' } }],
    });

    realm.write(() => {
      realm.create('Dog', { name: 'Rex' });
    });

    return realm.objects('Dog').length;
}
export default class App extends Component {
  componentDidMount() {
    console.log('1234');
    console.log('TESTING REALM', realmTest());
  }
  render() {

    return (
      <Provider store={store}>
        <Routing />
      </Provider>
    );
  }
}

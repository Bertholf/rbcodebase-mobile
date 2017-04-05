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
// uncomment this when you build it
// persistStore(store, {
//   storage: AsyncStorage,
// });

/**
 * Sample from documentation
 */
// const realmTest = () => {
//   let realm = new Realm({
//       schema: [{ name: 'Dog', properties: { name: 'string' } }],
//     });

//     realm.write(() => {
//       realm.create('Dog', { name: 'Rex' });
//     });

//     return realm.objects('Dog').length;
// }
store.dispatch(getNetworkStatus());

export default class App extends Component {
  componentDidMount() {
    // console.log('TESTING REALM', realmTest()); return sample of realm
  }
  render() {
    return (
      <Provider store={store}>
        <Routing />
      </Provider>
    );
  }
}

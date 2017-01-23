import React from 'react';
import { View } from 'react-native';
import { Router, routerReducer, Route, Container, Animations, Schema } from 'react-native-redux-router';
// import your components below here
import NavBar from './layouts/NavBar';
import SplashScreen from './components/Splash/SplashScreen';

const Routing = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, backgroundColor: '#F5FCFF' }} />
      <Router>
        {/* <Schema
          name="modal" sceneConfig={Animations.FlatFloatFromBottom} navBar={NavBarModal }/> */}
        <Schema name="default" sceneConfig={Animations.FlatFloatFromRight} navBar={NavBar} />
        <Schema name="tab" navBar={NavBar} />

        <Route name="launch" component={SplashScreen} initial={true} hideNavBar={true} title="Launch"/>
        {/* <Route name="register" component={Register} title="Register"/> */}
      </Router>
    </View>
  );
};
export default Routing;

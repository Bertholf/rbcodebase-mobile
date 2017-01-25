import React from 'react';
import { View } from 'react-native';
import { Router, Route, Animations, Schema } from 'react-native-redux-router';
// import your components below here
import NavBar from './layouts/NavBar';
import SplashScreen from './containers/Splash/Splash';
import Welcome from './containers/Welcome/Welcome';
import Login from './containers/Auth/Login';
import TimelineDetail from './containers/Timeline/TimelineDetail';
import Profile from './components/Profile/ProfileView';

const Routing = () => (
  <View style={{ flex: 1 }}>
    <View style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, backgroundColor: '#F5FCFF' }} />
    <Router>
      {/* <Schema
        name="modal" sceneConfig={Animations.FlatFloatFromBottom} navBar={NavBarModal }/> */}
      <Schema name="default" sceneConfig={Animations.FlatFloatFromRight} navBar={NavBar} />
      <Schema name="tab" navBar={NavBar} />

      <Route
        name="launch" component={SplashScreen} initial={true} hideNavBar={true} title="Launch"
      />
      <Route
        name="welcome" component={Welcome} title="Welcome"
      />
      <Route
        name="login" component={Login} title="Login Screen"
      />
      <Route
        name="TimelineDetail" component={TimelineDetail} title="Timeline Detail"
      />
      <Route
        name="profile" component={Profile} title="Profile"
      />
    </Router>
  </View>
);
export default Routing;

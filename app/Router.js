import React from 'react';
import { View } from 'react-native';
import { Router, Scene, Modal } from 'react-native-router-flux';
// import your components below here
import NavBar from './layouts/NavBar';
import Chat from './components/Chat/ChatView';
import SplashScreen from './containers/Splash/Splash';
import Welcome from './containers/Welcome/Welcome';
import Login from './containers/Auth/Login';
import Register from './components/Auth/RegisterScreen';
import Inbox from './components/Profile/Inbox';
import ForgotPassword from './components/Auth/ForgotPassword';
import TimelineList from './components/Timeline/TimelineComp';
import TimelineDetail from './containers/Timeline/TimelineDetail';
import Profile from './components/Profile/ProfileView';
import Privacy from './components/Privacy/privacy.js';

import Setting from './components/Setting/Setting'
import NavigationDrawer from './layouts/NavigationDrawer';

const Routing = () => (
  <View style={{ flex: 1 }}>
    <Router>
      <Scene key={'modal'} component={Modal}>
        <Scene key={'drawer'} component={NavigationDrawer}>
          <Scene key={'root'} navBar={NavBar}>
          {/* <Schema
            key={'modal'} sceneConfig={Animations.FlatFloatFromBottom} navBar={NavBarModal }/> */}

        <Scene
          key="launch" component={SplashScreen} initial={true} hideNavBar={true} title="Launch"
        />
        <Scene
          key="Privacy" component={Privacy} initial={true} title="Privacy"
        />
        <Scene
          key="welcome" component={Welcome} title="Welcome"
        />
        <Scene
          key="login" component={Login} hideNavBar={true} title="Login Screen"
        />
        <Scene
          key="register" component={Register} hideNavBar={true} title="Register Screen"
        />
        <Scene
          key="forgotPassword" component={ForgotPassword} hideNavBar={true} title="forgotPassword"
        />
        <Scene
          key="timelineDetail" component={TimelineDetail} title="Timeline Detail"
        />
        <Scene
          key="timelineList" component={TimelineList} title="Timeline Detail"
        />
        <Scene
          key="listInbox" component={Inbox} title="Timeline Detail"
        />
        <Scene
          key="profile" component={Profile} title="Profile"
        />
        <Scene
          key="chat" component={Chat} title="Profile"
        />
        <Scene
          key="setting" component={Setting} title="Setting"
        />
          </Scene>
        </Scene>
      </Scene>
    </Router>
  </View>
);
export default Routing;

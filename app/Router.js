import React from 'react';
import { View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
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
import Setting from './components/Setting/Setting'

const Routing = () => (
  <View style={{ flex: 1 }}>
    <Router>
      <Scene key={"root"}>
      {/* <Schema
        key="modal" sceneConfig={Animations.FlatFloatFromBottom} navBar={NavBarModal }/> */}

        <Scene
          key="launch" component={SplashScreen} initial={true} hideNavBar={true} title="Launch"
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
    </Router>
  </View>
);
export default Routing;

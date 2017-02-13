import React from 'react';
import { View } from 'react-native';
import { Router, Scene, Modal } from 'react-native-router-flux';
// import your components below here
import NavBar from './layouts/NavBar';
import Chat from './components/Chat/ChatView';
import SplashScreen from './containers/Splash/Splash';
import Welcome from './containers/Welcome/Welcome';
import Login from './containers/Auth/Login';
import TOSContainer from './containers/TOS/TOSContainer';
import PPContainer from './containers/PrivacyPolicy/PPContainer';
import Register from './components/Auth/RegisterScreen';
import LoginScreenEmail from './components/Auth/LoginScreenEmail';
import Inbox from './components/Profile/Inbox';
import ForgotPassword from './components/Auth/ForgotPassword';
import TimelineList from './components/Timeline/TimelineComp';
import TimelineDetail from './containers/Timeline/TimelineDetail';
import Profile from './components/Profile/Profile';
import Setting from './components/Setting/Setting';
import ChatListFriendView from './components/Chat/ChatListFriendView';
import Privacy from './components/Privacy/privacy';
import Email from './components/Setting/EmailNotif';
import NavigationDrawer from './layouts/NavigationDrawer';
import Notifications from './components/Timeline/notification';
import Loader from './containers/Loader';
import Account from './components/Profile/AccountSetting';
import EmailEdit from './components/Setting/EmailEdit';
import NameEdit from './components/Setting/ChangeName';
import PassEdit from './components/Setting/PasswordEdit';
import Gender from './components/Setting/GenderEdit';
import About from './components/Setting/About';
import Friendlist from './components/Profile/friendlist';
import Deactivate from './components/Deactivate/Deactivate';
import Location from './components/Timeline/StatusPostCard/createLocation';
import TimelineShare from './components/Timeline/TimelineShare';


const Routing = (props) => (
  <View style={{ flex: 1 }}>
    <Router>
      <Scene key={'modal'} component={Modal}>
        <Scene key={'drawerLayout'} component={NavigationDrawer} open={false} >
          <Scene key={'root'} navBar={NavBar}>
            {/* <Schema
            key={'modal'} sceneConfig={Animations.FlatFloatFromBottom} navBar={NavBarModal }/> */}
            <Scene
              key="setting" component={Setting} title={'Setting'}
            />
            <Scene
              key="chatfriend" component={ChatListFriendView} title={'Chat'}
            />
            <Scene
              key="inbox" component={Inbox} title={'Inbox'}
            />
            <Scene
              key={'launch'} component={SplashScreen} initial hideNavBar title={'Launch'}
            />
            <Scene
              key={'notifications'} component={Notifications} title={'Notifications'}
            />
            <Scene
              key={'chat'} component={Chat} title={'Chat'}
            />
            <Scene
              key={'chatlist'} component={ChatListFriendView} title={'Chat List'}
            />
            <Scene
              key={'friendlist'} component={Friendlist} title={'Friend list'}
            />
            <Scene
              key={'account'} component={Account} title={'Account'}
            />
            <Scene
              key={'privacy'} component={Privacy} title={'Privacy'}
            />
            <Scene
              key={'email'} component={Email} title={'Email'}
            />
            <Scene
              key={'emailEdit'} component={EmailEdit} title={'Edit Email'}
            />
            <Scene
              key={'genderEdit'} component={Gender} title={'Edit Gender'}
            />
            <Scene
              key={'passEdit'} component={PassEdit} title={'Edit Password'}
            />
            <Scene
              key={'about'} component={About} title={'Edit Bio'}
            />
            <Scene
              key={'nameEdit'} component={NameEdit} title={'Edit Name'}
            />
            <Scene
              key={'welcome'} component={Welcome} title={'Welcome'}
            />
            <Scene
              key={'login'} component={Login}  hideNavBar title={'Login Screen'}
            />
            <Scene
              key={'loginEmail'} component={LoginScreenEmail} title={'Sign In'}
            />
            <Scene
              key={'register'} component={Register} hideNavBar title={'Register Screen'}
            />
            <Scene
              key={'forgotPassword'} component={ForgotPassword} title={'Password Reset'}
            />
            <Scene
              key={'timelineDetail'} component={TimelineDetail} title={'Timeline Detial'}
            />
            <Scene
              key={'timelineList'} component={TimelineList} title={'Timeline List'}
            />
            <Scene
              key={'listInbox'} component={Inbox} title={'Timeline Detial'}
            />
            <Scene
              key={'timelineshare'} component={TimelineShare} title={'Timeline Share'}
            />
            <Scene
              key={'profile'} component={Profile} title={'Profile'}
            />
            <Scene
              key={'chat'} component={Chat} title={'Profile'}
            />
            <Scene
              key={'deactive'} component={Deactivate} title={'Deactivate'}
            />
            <Scene
              key={'createLocation'} component={Location} title={'Location'}
            />
          </Scene>
        </Scene>
        <Scene key={'tos'} component={TOSContainer} />
        <Scene key={'pp'} component={PPContainer} />
        <Scene
          key={'loader'} component={Loader}
        />
      </Scene>
    </Router>
  </View>
);
export default Routing;

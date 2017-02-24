import React from 'react';
import { View } from 'react-native';
import { Router, Scene, Modal } from 'react-native-router-flux';
// import your components below here
import NavBar from './layouts/NavBar';
import Chat from './components/Chat/ChatView';
import SplashScreen from './containers/Splash/Splash';
import Walkthrough from './components/Splash/Walkthrough';
import Welcome from './containers/Welcome/Welcome';
import Login from './containers/Auth/Login';
import TOSContainer from './containers/TOS/TOSContainer';
import PPContainer from './containers/PrivacyPolicy/PPContainer';
import SupportContainer from './containers/Support/SupportContainer';
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
import Notifications from './components/Timeline/notification';
import Loader from './containers/Loader';
import Account from './components/Profile/AccountSetting';
import EmailEdit from './components/Setting/EmailEdit';
import NameEdit from './components/Setting/ChangeName';
import editBirthday from './components/Setting/editBirthday';
import PassEdit from './components/Setting/PasswordEdit';
import Gender from './components/Setting/GenderEdit';
import About from './components/Setting/About';
import UsernameEdit from './components/Setting/ChangeUsername';
import Friendlist from './components/Profile/friendlist';
import Deactivate from './components/Deactivate/Deactivate';
import Location from './components/Timeline/StatusPostCard/createLocation';
import TimelineShare from './components/Timeline/TimelineShare';
import RegistrationForm from './components/Auth/RegistrationForm';
import Dashboard from './components/Timeline/Dashboard';
import LoginScreen from './components/Auth/LoginScreen';
import LeftDashboard from './components/Timeline/LeftDashboard';
import ActionSwiper from './components/ActionSwipe';
import UserPanel from './components/UserPanel/UserPanel';
import strings from './localizations';
import ReserveScreen from './components/ReserveScreen';
import AppListing from './components/Listing/listing';
import License from './containers/License/LicenseContainer';
import MobilePhone from './components/Setting/mobilePhone';
import AdPref from './components/Setting/AdPreference';

const Routing = (props) => (
  <View style={{ flex: 1 }}>
    <Router>
      <Scene key={'modal'} component={Modal}>
          <Scene key={'navbar'} component={NavBar}>
        <Scene key={'root'}>
          <Scene
            key="setting" component={Setting} title={strings.settings.title}
          />
          <Scene
            key={'walkthrough'} hideNavBar component={Walkthrough} title={'Walkthrough Screen'}
          />
          {/* <Scene
            key="Walkthrough" component={Walkthrough} title={'Walkthrough Screen'}
          /> */}
          <Scene
            key="chatfriend" component={ChatListFriendView} title={'Chat'}
          />
          <Scene
            key={'editbirthday'} component={editBirthday} title={strings.editBirthday.title}
          />
          <Scene
            key="inbox" component={Inbox} title={'Inbox'}
          />
          <Scene
            key={'launch'} initial component={SplashScreen} hideNavBar title={'Launch'}
          />
          <Scene
            key={'notifications'} component={Notifications} title={'Notifications'}
          />
          <Scene
            key={'dashboard'} component={Dashboard} title={'Dashboard'}
          />
          <Scene
            key={'leftdashboard'} component={LeftDashboard} title={'LeftDashboard'} direction={'leftToRight'}
          />
          <Scene
            key={'chat'} component={Chat} title={'Chat'}
          />
          <Scene
            key={'chatlist'} component={ChatListFriendView} title={'Chat List'} direction={'vertically'}
          />
          <Scene
            key={'friendlist'} component={Friendlist} title={'Friend list'}
          />
          <Scene
            key={'loginscreenemail'} component={LoginScreenEmail} title={'Sign in'}
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
            key={'usernameEdit'} component={UsernameEdit} title={'Edit Username'}
          />
          <Scene
            key={'nameEdit'} component={NameEdit} title={'Edit Name'}
          />
          <Scene
            key={'welcome'} component={Welcome} title={'Welcome'}
          />
          <Scene
            key={'login'} component={Login} hideNavBar title={'Login Screen'}
          />
          <Scene
            key={'register'} component={Register} title={'Register Screen'}
          />
          <Scene
            key={'forgotPassword'} component={ForgotPassword} title={'Forgot Password'}
          />
          <Scene
            key={'timelineDetail'} component={TimelineDetail} title={'Timeline Detial'}
          />
          <Scene
            key={'timelineList'} hideNavBar component={TimelineList} title={'Timeline List'} direction={'horizontal'}
          />
          <Scene
            key={'listInbox'} component={Inbox} title={'Timeline Detial'}
          />
          <Scene
            key={'timelineshare'} component={TimelineShare} title={'Timeline Share'}
          />
          <Scene
            key={'profile'} component={Profile} title={'Profile'} direction={'vertical'}
          />
          <Scene
            key={'chat'} component={Chat} title={'Chat'}
          />
          <Scene
            key={'deactive'} component={Deactivate} title={'Deactivate'}
          />
          <Scene
            key={'createLocation'} component={Location} title={'Location'}
          />
          <Scene
            key={'registrationform'} component={RegistrationForm} title={'Register'}
          />
          <Scene
            key={'adpref'} component={AdPref} title={'Ad Preference'}
          />
          <Scene
            key={'loginscreen'} component={LoginScreen} hideNavBar title={'Login'}
          />
          <Scene
            key={'actionswiper'} hideNavBar component={ActionSwiper} title={'Dashboard'} hideNavBar
          />
          <Scene
            key={'userpanel'} component={UserPanel} hideNavBar title={'User Panel'} direction={'vertical'}
          />
          <Scene key={'license'} hideNavBar component={License} />
          <Scene
            key={'reservescreen'} component={ReserveScreen} title={'Reserve Screen'} direction={'vertical'}
          />
          <Scene
            key={'appListing'} hideNavBar component={AppListing} title={'App Listing'} direction={'leftToRight'}
          />
          <Scene
            key={'mobilephone'} component={MobilePhone} title={'Mobile Phone'}
          />

          <Scene key={'tos'} hideNavBar component={TOSContainer} />
          <Scene key={'pp'} hideNavBar component={PPContainer} />
          <Scene key={'support'} hideNavBar component={SupportContainer} />
        </Scene>
            <Scene key={'loader'} component={Loader} />
          </Scene>
      </Scene>
    </Router>
  </View>
);
export default Routing;

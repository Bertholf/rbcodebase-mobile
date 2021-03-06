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
import AddFriend from './components/Profile/AddFriend';
import Setting from './containers/Settings/networkContainer';
import ChatListFriendView from './components/Chat/ChatListFriendView';
import Privacy from './components/Privacy/privacy';
import Email from './components/Setting/EmailNotif';
import Notifications from './components/Timeline/notification';
import Loader from './containers/Loader';
import Account from './components/Profile/AccountSetting';
import EmailEdit from './containers/Settings/emailContainer';
import NameEdit from './containers/Settings/changeNameContainer';
import editBirthday from './containers/Settings/birthdayContainer';
import PassEdit from './components/Setting/PasswordEdit';
import Gender from './containers/Settings/genderContainer';
import About from './components/Setting/About';
import UsernameEdit from './containers/Settings/UsernameContainer';
import Following from './components/Profile/Following';
import Deactivate from './components/Deactivate';
import Location from './components/Timeline/StatusPostCard/createLocation';
import TimelineShare from './components/Timeline/TimelineShare';
import RegistrationForm from './components/Auth/RegistrationForm';
import Dashboard from './components/Timeline/Dashboard';
import LoginScreen from './components/Auth/LoginScreen';
// import LeftDashboard from './components/Timeline/LeftDashboard';
import ActionSwiper from './components/ActionSwipe';
import UserPanel from './components/UserPanel/UserPanel';
import strings from './localizations';
import ReserveScreen from './components/ReserveScreen';
import AppListing from './components/Listing/listing';
import License from './containers/License/LicenseContainer';
import MobilePhone from './containers/Settings/phoneContainer';
import AdPref from './containers/Settings/privacySetContainer';
import EmailSetting from './containers/Settings/emailPrivacyContainer';
import Follower from './components/Profile/Follower';
import AddFriendScreen from './components/Profile/AddFriend';
import LoaderView from './views/Loader';
import Approval from './components/Profile/approval';
import ResultForgot from './components/Auth/ForgotPasswordResult';
import Notification from './components/Notification/App';
import SearchPage from './components/Profile/search';
import emailVarification from './components/Setting/emailVarification';
import WarningDisconnect from './services/WarningDisconnect';
import SqliteDemo from './db/sqliteSample';

const lang = strings.getInterfaceLanguage();
let setlang;
switch (lang) {
  case 'in-ID':
    setlang = 'id';
    break;
  case 'en-US':
    setlang = 'en';
    break;
  default:
    setlang = 'en';
    break;
}
strings.setLanguage(setlang);

const Routing = props => (
/**
   * Register Your Component to Router here
   * <Scene key={keyname} component={ComponentName} title={ScreenTitle} />
   *
   */
  <View style={{ flex: 1 }}>
    <Router>
      <Scene key={'modal'} component={Modal}>
        <Scene key={'navbar'} component={NavBar}>
          <Scene key={'root'}>
            <Scene key="setting" component={Setting} title={strings.settings.title} />
            <Scene key="demo" component={SqliteDemo} hideNavBar title={'THIS IS DEMO'} />
            <Scene
              key="emailVarification"
              hideNavBar
              component={emailVarification}
              title={strings.settings.emailVarification}
            />
            <Scene
              key={'resetresult'}
              hideNavBar
              component={ResultForgot}
              title={'Walkthrough Screen'}
            />
            <Scene
              key={'walkthrough'}
              hideNavBar
              component={Walkthrough}
              title={'Walkthrough Screen'}
            />
            <Scene
              key={'notification'}
              hideNavBar
              component={Notification}
              title={'notification'}
            />
            <Scene key="Walkthrough" component={Walkthrough} title={'Walkthrough Screen'} />
            <Scene key="chatfriend" component={ChatListFriendView} title={'Chat'} />
            <Scene
              key={'editbirthday'}
              component={editBirthday}
              hideNavBar
              title={strings.editBirthday.title}
            />
            <Scene key="inbox" component={Inbox} title={'Inbox'} />
            <Scene key={'launch'} initial component={SplashScreen} hideNavBar title={'Launch'} />
            <Scene
              key={'notifications'}
              component={Notifications}
              title={strings.settings.notification}
            />
            <Scene key={'dashboard'} component={Dashboard} title={'Dashboard'} />
            {/*<Scene
              key={'leftdashboard'}
              component={LeftDashboard}
              title={'LeftDashboard'}
              direction={'leftToRight'}
            />*/}
            <Scene key={'chat'} component={Chat} title={'Chat'} />
            <Scene
              key={'chatlist'}
              component={ChatListFriendView}
              title={'Chat List'}
              direction={'vertically'}
            />
            <Scene key={'following'} component={Following} title={strings.settings.following} />
            <Scene
              key={'loginscreenemail'}
              component={LoginScreenEmail}
              title={strings.settings.signin}
            />
            <Scene key={'account'} component={Account} title={'Account'} />
            <Scene key={'privacy'} component={Privacy} title={'Privacy'} />
            <Scene key={'email'} component={Email} title={'Email'} />
            <Scene key={'emailEdit'} component={EmailEdit} hideNavBar title={'Edit Email'} />
            <Scene key={'genderEdit'} hideNavBar component={Gender} title={'Edit Gender'} />
            <Scene key={'passEdit'} component={PassEdit} hideNavBar title={'Edit Password'} />
            <Scene key={'about'} component={About} hideNavBar title={'Edit Bio'} />
            <Scene
              key={'usernameEdit'}
              component={UsernameEdit}
              hideNavBar
              title={'Edit Username'}
            />
            <Scene
              key={'nameEdit'}
              component={NameEdit}
              hideNavBar
              title={strings.ChangeName.title}
            />
            <Scene key={'welcome'} component={Welcome} title={'Welcome'} />
            <Scene key={'login'} component={Login} hideNavBar title={'Login Screen'} />
            <Scene
              key={'register'}
              component={Register}
              title={strings.settings.register}
              hideNavBar
            />
            <Scene
              key={'forgotPassword'}
              component={ForgotPassword}
              title={strings.settings.forgotpass}
            />
            <Scene key={'timelineDetail'} component={TimelineDetail} title={'Timeline Detial'} />
            <Scene
              key={'timelineList'}
              hideNavBar
              component={TimelineList}
              title={'Timeline List'}
              direction={'horizontal'}
            />
            <Scene key={'listInbox'} component={Inbox} title={'Timeline Detial'} />
            <Scene key={'timelineshare'} component={TimelineShare} title={'Timeline Share'} />
            <Scene
              key={'profile'}
              component={Profile}
              hideNavBar
              title={strings.settings.profile}
              direction={'vertical'}
            />
            <Scene
              key={'addfriendscreen'}
              component={AddFriend}
              hideNavBar
              title={strings.listfollow.searchResult}
              direction={'vertical'}
            />
            <Scene key={'chat'} component={Chat} title={'Chat'} />
            <Scene key={'deactive'} component={Deactivate} title={'Deactivate'} />
            <Scene key={'createLocation'} component={Location} title={'Location'} />
            <Scene
              key={'registrationform'}
              component={RegistrationForm}
              title={strings.settings.register}
            />
            <Scene key={'adpref'} component={AdPref} hideNavBar title={'Ad Preference'} />
            <Scene
              key={'EmailSetting'}
              component={EmailSetting}
              hideNavBar
              title={'EmailSetting'}
            />
            <Scene key={'loginscreen'} component={LoginScreen} hideNavBar title={'Login'} />
            <Scene
              key={'actionswiper'}
              hideNavBar
              component={ActionSwiper}
              title={'Dashboard'}
              hideNavBar
            />
            <Scene
              key={'userpanel'}
              component={UserPanel}
              hideNavBar
              title={'User Panel'}
              direction={'vertical'}
            />
            <Scene key={'license'} hideNavBar component={License} />
            <Scene
              key={'reservescreen'}
              component={ReserveScreen}
              title={'Reserve Screen'}
              direction={'vertical'}
            />
            <Scene
              key={'appListing'}
              hideNavBar
              component={AppListing}
              title={'App Listing'}
              direction={'leftToRight'}
            />
            <Scene key={'mobilephone'} hideNavBar component={MobilePhone} title={'Mobile Phone'} />
            <Scene key={'follower'} component={Follower} title={strings.settings.follower} />
            <Scene key={'approval'} component={Approval} title={strings.settings.approval} />
            <Scene
              key={'addfriendscreen'}
              component={AddFriendScreen}
              title={strings.settings.adduser}
            />
            <Scene key={'searchpage'} component={SearchPage} title={strings.listfollow.search} />
            <Scene key={'loaderview'} component={LoaderView} hideNavBar />
            <Scene key={'tos'} hideNavBar component={TOSContainer} />
            <Scene key={'pp'} hideNavBar component={PPContainer} />
            <Scene key={'support'} hideNavBar component={SupportContainer} />
          </Scene>
          <Scene key={'loader'} component={Loader} />
        </Scene>
      </Scene>
    </Router>
    <WarningDisconnect />
  </View>
);
export default Routing;

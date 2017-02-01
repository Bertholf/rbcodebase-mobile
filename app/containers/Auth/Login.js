import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import LoginScreen from '../../components/Auth/LoginScreen';
import { updateUsername, updatePassword, submitLogin } from '../../actions/Auth';
import profile from '../../services/profile';
import userFactory from '../../factories/user';

const mapStateToProps = ({ app }) => ({
  username: app.auth.username,
  password: app.auth.password,
});
const mapDispatchToProps = dispatch => ({
  updateUsername: text => dispatch(updateUsername(text)),
  updatePassword: text => dispatch(updatePassword(text)),
  loginWithGoogle: () => {
    console.log(userFactory());
    profile.getProfile().then(profile=>console.log(profile)).catch(err=>console.log(err));
  },
  loginWithFacebook: () => {
    Actions.timelineList();
  },
  submitLogin: () => {
    Actions.timelineList();
  },
  forgotPassword: () => {
    Actions.forgotPassword();
  },
  register: () => {
    Actions.register();
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import LoginScreen from '../../../components/Auth/LoginScreen';
import { errorLogin, updateUsername, updatePassword, submitLogin, loginWithGoogle, loginWithFacebook, loginWithTwitter } from '../../../actions/Auth';


const mapStateToProps = ({ app }) => ({
  username: app.auth.username,
  password: app.auth.password,
  message: app.auth.message,
  is_loading: app.auth.is_loading,
});
const mapDispatchToProps = dispatch => ({
  updateUsername: text => dispatch(updateUsername(text)),
  updatePassword: text => dispatch(updatePassword(text)),
  loginWithGoogle: () => dispatch(loginWithGoogle()),
  loginWithFacebook: () => dispatch(loginWithFacebook()),
  loginWithTwitter: () => dispatch(loginWithTwitter()),
  submitLogin: (username, password, okCallback, failCallback) => {
    return dispatch(submitLogin(username, password, okCallback, failCallback));
  },
  forgotPassword: () => {
    Actions.forgotPassword();
  },
  register: () => {
    Actions.register();
  },
  errorLogin: () => {
    Actions.errorLogin();
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

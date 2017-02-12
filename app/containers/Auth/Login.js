import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import LoginScreen from '../../components/Auth/LoginScreen';
import { errorLogin, updateUsername, updatePassword, submitLogin, loginWithGoogle, loginWithFacebook } from '../../actions/Auth';
import AuthLoginService from '../../services/AuthLogin';


const mapStateToProps = ({ app }) => ({
  username: app.auth.username,
  password: app.auth.password,
  message: app.auth.message,
});
const mapDispatchToProps = dispatch => ({
  updateUsername: text => dispatch(updateUsername(text)),
  updatePassword: text => dispatch(updatePassword(text)),
  loginWithGoogle: () => dispatch(loginWithGoogle()),
  loginWithFacebook: () => dispatch(loginWithFacebook()),
  submitLogin: (username, password) => {
    dispatch(submitLogin(username, password));
  },
  forgotPassword: () => {
    Actions.forgotPassword();
  },
  register: () => {
    Actions.register();
  },
  errorLogin: () => {
    Action.errorLogin();
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

import { connect } from 'react-redux';
import { Actions } from 'react-native-redux-router';
import LoginScreen from '../../components/Auth/LoginScreen';
import { updateUsername, updatePassword, submitLogin } from '../../actions/Auth';

const mapStateToProps = ({ app }) => ({
  username: app.auth.username,
  password: app.auth.password,
});
const mapDispatchToProps = dispatch => ({
  updateUsername: text => dispatch(updateUsername(text)),
  updatePassword: text => dispatch(updatePassword(text)),
  loginWithGoogle: () => console.log('login with google'),
  loginWithFacebook: () => console.log('login with facebook'),
  submitLogin: () => {
    Actions.timelineList();
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

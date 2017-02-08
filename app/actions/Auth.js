import { Actions } from 'react-native-router-flux';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import google from './../modules/google';
import auth from '../services/auth';
import {AsyncStorage} from 'react-native';

export const UPDATE_USERNAME_TEXT = 'UPDATE_USERNAME_TEXT';
export const UPDATE_PASSWORD_TEXT = 'UPDATE_PASSWORD_TEXT';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const DONE_LOGIN = 'SUBMIT_LOGIN';
export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const ERROR_LOGIN = 'ERROR_LOGIN';

export function updateUsername(username) {
  return { type: UPDATE_USERNAME_TEXT, username };
}
export function updatePassword(password) {
  return { type: UPDATE_PASSWORD_TEXT, password };
}
export function submitLogin(username, password) {
  return dispatch => {
    dispatch (requestLogin())
    return auth.login(username, password).then(({data})=> {
     return AsyncStorage.setItem('accessToken', data.accessToken);
   }).then(() =>{
     return AsyncStorage.getItem('accessToken');
   })
   .then((token)=>{
     dispatch(doneLogin());
     Actions.timelineList();
   })
   .catch(err => console.log(err));
  }
}
export function doneLogin(response) {
  Actions.pop();
  Actions.timelineList();
  return { type: DONE_LOGIN, response };
}
export function errorLogin(error) {
  Actions.pop();
  return { type: ERROR_LOGIN, error };
}
export function requestLogin(message) {
  Actions.loader({ message });
  return { type: REQUEST_LOGIN };
}

export function loginWithGoogle() {
  return (dispatch) => {
    dispatch(requestLogin('Login With Google'));
    return google.signIn()
    .then(user => dispatch(doneLogin({ accessToken: user.idToken, provider: 'google' })))
    .catch(err => dispatch(errorLogin(err)));
  };
}
export function loginWithFacebook() {
  return (dispatch) => {
    dispatch(requestLogin('Login with Facebook'));
    return LoginManager.logInWithReadPermissions(['public_profile'])
    .then((result) => {
      if (result.isCancelled) {
        return Promise.reject(result);
      }
      return AccessToken.getCurrentAccessToken();
    }).then(({ accessToken }) => dispatch(doneLogin({ provider: 'facebook', accessToken })))
    .catch(err => errorLogin(err));
  };
}

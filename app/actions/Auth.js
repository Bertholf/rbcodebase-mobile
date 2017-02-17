
//app/actions
import { Actions } from 'react-native-router-flux';
import OAuthManager from 'react-native-oauth';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import google from './../modules/google';
import twitter from './../modules/twitter';
import auth from '../services/auth';

import config from '../config';
import { AsyncStorage } from 'react-native';

const { TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET } = config;
export const UPDATE_USERNAME_TEXT = 'UPDATE_USERNAME_TEXT';
export const UPDATE_PASSWORD_TEXT = 'UPDATE_PASSWORD_TEXT';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const DONE_LOGIN = 'SUBMIT_LOGIN';
export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const ERROR_LOGIN = 'ERROR_LOGIN';

export const SUBMIT_REGISTER = 'SUBMIT_REGISTER';
export const DONE_REGISTER = 'DONE_REGISTER';
export const REQUEST_REGISTER = 'REQUEST_REGISTER';
export const ERROR_REGISTER = 'ERROR_LOGIN';

export function updateUsername(username) {
  return { type: UPDATE_USERNAME_TEXT, username };
}
export function updatePassword(password) {
  return { type: UPDATE_PASSWORD_TEXT, password };
}
export function submitLogin(username, password, okCallback, failCallback) {
  return () => {
    return auth.login(username, password).then((data) => {
      return AsyncStorage.setItem('accessToken', data.access_token);
    })
    .then(() => {
      return AsyncStorage.getItem('accessToken');
    })
   .then((token) => {
     Actions.actionswiper({ type: 'reset' });
     okCallback();
   })
   .catch(err => failCallback());
  }
}
export function doneLogin(response = {}) {
  if (response) {
    AsyncStorage.setItem('provider', response.provider);
    AsyncStorage.setItem('accessToken', response.accessToken);
  }
  Actions.pop();
  Actions.actionswiper();
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

//register
export function submitRegister(name_first, name_last, name_slug, email, password, password_confirmation) {
  return(dispatch)=> {
    dispatch(requestLogin)
  }
  Actions.pop();
  return { type: SUBMIT_REGISTER, response };
}
export function doneRegister(response = '') {
  if (response) {
  }
  Actions.pop();

  return { type: DONE_REGISTER, response };
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

export const manager = new OAuthManager('RB Codebase');

export function loginWithTwitter() {
  return (dispatch) => {
    return twitter.signIn()
      .then(response => {
        dispatch(doneLogin({ accessToken: response.token, provider: 'twitter' }))
      })
      .catch(err => console.log('TWITTER ERR', err));
  };
}

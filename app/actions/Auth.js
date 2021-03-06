import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import OAuthManager from 'react-native-oauth';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import google from './../modules/google';
import twitter from './../modules/twitter';
import auth from '../services/auth';
import strings from '../localizations';
import config from '../config';

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
  return () =>
    auth
      .login(username, password)
      .then(data => AsyncStorage.setItem('accessToken', data.access_token))
      .then(() => AsyncStorage.getItem('accessToken'))
      .then((token) => {
        Actions.actionswiper();
        okCallback();
      })
      .catch(() => failCallback());
}
const registered = (token, provider) => {
  AsyncStorage.setItem('provider', provider);
  AsyncStorage.setItem('accessToken', token).then(() => {
    Actions.loaderview({
      message: strings.loader.registered,
      onPress: () => Actions.actionswiper({ type: 'reset' }),
    });
    setTimeout(() => Actions.actionswiper({ type: 'reset' }), 1000);
  });
};

export function doneLogin(response = {}) {
  if (response) {
    /**
     * catch the response and do next step after
     * Login request is success
     *
     * if(response from facebook) {
     *  send token and take to after-oauth check
     * } else if( response from twitter) {
     *  send token and take to after-oauth check
     * } else if (response from GOOGLE) {
     *  ....@TODO need after-oauth check
     * }
     */

    AsyncStorage.setItem('provider', response.provider);
    if (response.provider === 'twitter') {
      auth
        .checktwitter(
          response.accessToken,
          response.provider,
          response.secret,
          response.oauth_provider_id,
        )
        .then((resL) => {
          /**
         * if after-oauth checking = not registered,
         * send user's data to registration form.
         *
         * else just login to dashboard
         */
          if (resL.data.registered === false) {
            Actions.registrationform({
              firstName: resL.data.name.split(' ')[0],
              lastName: resL.data.name.split(' ')[1],
              username: resL.data.nickname,
              email: resL.data.email,
              accessToken: resL.data.access_token,
              secret: response.secret,
              provider: response.provider,
            });
          } else {
            registered(resL.data.access_token, 'twitter');
          }
        })
        .catch(err => err);
    } else if (response.provider === 'facebook') {
      auth
        .check(response.accessToken, 'facebook', response.userID)
        .then((resL) => {
          /**
         * if after-oauth checking = not registered,
         * send user's data to registration form.
         *
         * else just login to dashboard
         */
          if (resL.data.registered === false) {
            Actions.registrationform({
              firstName: resL.data.name.split(' ')[0],
              lastName: resL.data.name.split(' ')[1],
              email: resL.data.email,
              username: '',
              provider: 'facebook',
              accessToken: response.accessToken,
              oauthProviderId: response.userID,
            });
          } else {
            registered(resL.data.access_token, 'facebook');
          }
        })
        .catch(err => err);
    } else if (response.provider === 'google') {
      auth
        .checkgoogle('google', response.user.email)
        .then((res) => {
          console.log('response google after oauth', res);
          if (res.data === null) {
            if (response.user.displayName === undefined) {
              Actions.registrationform({
                firstName: response.user.name.split(' ')[0],
                lastName: response.user.name.split(' ')[1],
                email: response.user.email,
                provider: 'google',
                oauthProviderId: response.user.email,
              });
            } else {
              Actions.registrationform({
                firstName: response.user.displayName.split(' ')[0],
                lastName: response.user.displayName.split(' ')[1],
                email: response.user.email,
                provider: 'google',
                oauthProviderId: response.user.email,
              });
            }
          } else {
            registered(res.data.access_token, 'google');
          }
        })
        .catch(err => console.log('error google done login', err));
    }
  }

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

// register
export function submitRegister(
  name_first,
  name_last,
  name_slug,
  email,
  password,
  password_confirmation,
) {
  return (dispatch) => {
    dispatch(requestLogin);
  };
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
  /**
   * App authorize with Google SSO Provider
   */
  return (dispatch) => {
    dispatch(requestLogin('Login With Google'));
    return google
      .signIn()
      .then((user) => {
        console.log('googel res', user);
        Actions.pop();
        dispatch(doneLogin({ ...user, provider: 'google' }));
      })
      .catch(err => dispatch(errorLogin(err)));
  };
}

export function loginWithFacebook() {
  /**
   * App authorize with Facebook SSO provider
   */
  return dispatch =>
    LoginManager.logInWithReadPermissions(['public_profile'])
      .then((result) => {
        if (result.isCancelled) {
          return Promise.reject(result);
        }
        return AccessToken.getCurrentAccessToken();
      })
      .then((response) => {
        dispatch(doneLogin({ provider: 'facebook', ...response }));
      })
      .catch(err => errorLogin(err));
}

export const manager = new OAuthManager('RB Codebase');

export function loginWithTwitter() {
  /**
   * Authorize SSO Twitter with the app
   */
  return dispatch =>
    twitter
      .signIn()
      .then((response) => {
        const secretCode = response.secret;
        if (secretCode === undefined) {
          console.log('THIS IS TWTITTER======', response);
          Actions.pop();
          dispatch(
            doneLogin({
              accessToken: response.token,
              provider: 'twitter',
              secret: response.tokenSecret,
              oauth_provider_id: response.userId,
            }),
          );
        } else {
          console.log('THIS IS TWTITTER======', response);
          dispatch(
            doneLogin({
              accessToken: response.token,
              provider: 'twitter',
              secret: response.secret,
              oauth_provider_id: response.userId,
            }),
          );
        }
      })
      .catch(err => err);
}

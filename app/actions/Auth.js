import google from './../modules/google';

export const UPDATE_USERNAME_TEXT = 'UPDATE_USERNAME_TEXT';
export const UPDATE_PASSWORD_TEXT = 'UPDATE_PASSWORD_TEXT';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const DONE_LOGIN = 'SUBMIT_LOGIN';
export const REQUEST_LOGIN = 'REQUEST_LOGIN';

export function updateUsername(username) {
  return { type: UPDATE_USERNAME_TEXT, username };
}
export function updatePassword(password) {
  return { type: UPDATE_PASSWORD_TEXT, password };
}
export function submitLogin() {
  return { type: SUBMIT_LOGIN };
}
export function doneLogin(response) {
  return { type: DONE_LOGIN, response };
}

export function requestLogin() {
  return { type: REQUEST_LOGIN };
}

export function loginWithGoogle() {
  return (dispatch) => {
    dispatch(requestLogin());
    return google.signIn()
    .then(user => dispatch(doneLogin(user))).catch(err => console.log(err));
  };
}

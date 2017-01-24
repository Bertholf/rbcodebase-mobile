export const UPDATE_USERNAME_TEXT = 'UPDATE_USERNAME_TEXT';
export const UPDATE_PASSWORD_TEXT = 'UPDATE_PASSWORD_TEXT';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const DONE_LOGIN = 'SUBMIT_LOGIN';
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

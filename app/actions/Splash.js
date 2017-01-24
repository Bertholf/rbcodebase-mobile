export const MOVE_TO_DASHBOARD = 'MOVE_TO_DASHBOARD';
export const MOVE_TO_AUTH_LOGIN = 'MOVE_TO_AUTH_LOGIN';

export function moveToDashboard() {
  return { type: MOVE_TO_DASHBOARD };
}
export function moveToAuthLogin() {
  return { type: MOVE_TO_AUTH_LOGIN };
}

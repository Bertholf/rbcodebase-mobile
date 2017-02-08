import { Actions } from 'react-native-router-flux';

export const MOVE_TO_DASHBOARD = 'MOVE_TO_DASHBOARD';
export const MOVE_TO_AUTH_LOGIN = 'MOVE_TO_AUTH_LOGIN';

export function moveToDashboard() {
  Actions.timelineList();
}
export function moveToAuthLogin() {
  Actions.login({ type: 'replace' });
}

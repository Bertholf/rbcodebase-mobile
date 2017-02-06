import { AsyncStorage } from 'react-native';
import querystring from 'qs';
import { Actions } from 'react-native-router-flux';
import auth from './auth';

const saveToken = (token) => {
  AsyncStorage.setItem('loginToken', token)
  .then(() => console.log('save token to file success'))
  .catch(err => console.log(err));
};

const submitLogin = (username, password) => {
  auth.login(username, password)
  .then((token) => {
    console.log('TOKEN : ', token.data.accessToken);
    saveToken(token.data.accessToken);
    Actions.timelineList();
  })
  .catch(err => console.log(err));
}

export default submitLogin;

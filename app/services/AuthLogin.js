import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import auth from './auth';
import me from './me';

const saveToken = (token) => {
  AsyncStorage.setItem('loginToken', token)
  .then(() => console.log('save token to file success'))
  .catch(err => console.log(err));
};

const secondRequest = (token) => {
  me.getMe(token)
  .then((response) => {
    console.log('response', response);
  });
};

const submitLogin = (username, password, callback) => {
  auth.login(username, password)
  .then((token) => {
    console.log('TOKEN : ', token.access_token);
    saveToken(token.access_token);
    secondRequest(token.access_token);
    Actions.actionswiper();
  })
  .catch((err) => {
    console.log('ERORbroo', err);
    callback();
  });
};

export default submitLogin;

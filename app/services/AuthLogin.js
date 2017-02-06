import { AsyncStorage } from 'react-native';
import querystring from 'qs';
import { Actions } from 'react-native-router-flux';
import auth from './auth';

const saveToken = (token) => {
  const accesToken = querystring.stringify(token)
    AsyncStorage.setItem('loginToken', accesToken);
};

const submitLogin = ({ username, password }) => {
  console.log(username, password);
  auth.login(username, password)
  .then((token) => {
    console.log('TOKEN : ', token.data.accessToken);
    saveToken(token);
  //  Actions.timelineList();
  })
  .catch(err => console.log(err));
}

export default submitLogin;

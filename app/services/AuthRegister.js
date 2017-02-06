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

class Register {
   register({ name, email, username, password }) {
     auth.register(name, email, username, password)
     .then((response) => {
       saveToken(response.accessToken);
       secondRequest(response.accessToken);
       Actions.timelineList();
     });
   }
}

const register = new Register();
export default register;

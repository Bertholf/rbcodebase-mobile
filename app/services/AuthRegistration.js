import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import auth from './auth';
import me from './me';
import submitLogin from './AuthLogin'


const submitRegister = (name_first, name_last, name_slug, gender, email, password, password_confirmation, callback) => {
  auth.register(name_first, name_last, name_slug, gender, email, password, password_confirmation)
  .then((resp) => {
    console.log('++++++++++++++', resp);
    // auth.login(name_slug, password)
    // .then((respL) => {
      AsyncStorage.setItem('accessToken', resp.access_token)
    //})
    //.catch(err => console.log('LOGIN ERR', err));
  })
  .then(() => Actions.loginscreenemail())
  .catch((err) => {
    callback(err.response.data.message);
  });
};

const registerService = submitRegister;

export default registerService;

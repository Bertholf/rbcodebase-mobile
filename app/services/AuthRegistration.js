import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import auth from './auth';
import me from './me';
import submitLogin from './AuthLogin'


const submitRegister = (name_first, name_last, name_slug, email, password, password_confirmation, callback) => {
  auth.register(name_first, name_last, name_slug, email, password, password_confirmation)
  .then((response) => console.log(response))
  .catch((err) => {
    console.log('ERORbroo', err);
    callback();

  });
};

const registerService = submitRegister;

export default registerService;

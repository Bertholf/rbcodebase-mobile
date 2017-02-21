import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import auth from './auth';
import me from './me';

const saveProfile = (name_first, name_last, name_slug, email, phone, birthday, password, password_confirmation) => {
  auth.updateProfile(name_first, name_last, name_slug, email, phone, birthday, password, password_confirmation)
  .then((response) => {
    console.log("update===", response);
  });
};


export default saveProfile;

import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import auth from './auth';
import me from './me';

const saveName = (name_first, name_last) => {
  auth.updateProfile(name_first, name_last)
  .then((response) => {
    console.log("update===", response);
  });
};


export default saveName;

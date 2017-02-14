import google from './../modules/google';
import { Actions } from 'react-native-router-flux';

const registerWithGoogle = () => {
     google.signIn()
    .then(user => console.log(user))
    .catch(err => dispatch(errorLogin(err)));
}

export default registerWithGoogle;

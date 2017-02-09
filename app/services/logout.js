import { Acctions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';


const Logout = () => {
  try{
    const accessToken = AsyncStorage.getItem();
    if (accessToken !== null && accessToken !== '') {
      AsyncStorage.removeItem('accessToken', () => {
        console.log('Failed to delete token');
      });
    }
  } catch(err) {

  }
}
export default Logout;

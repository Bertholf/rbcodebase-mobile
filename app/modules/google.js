import { NativeModules, Platform } from 'react-native';

const google = NativeModules.GoogleSignInModule;
if (Platform.OS === 'ios') {
  google.configure();
}
export default google;

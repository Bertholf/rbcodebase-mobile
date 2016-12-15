import { NativeModules } from 'react-native';

module.exports = {
  RestAndroid: NativeModules.RestModule,
  SharedPrefsAndroid: NativeModules.SharedPrefsModule,
  ToastAndroid: NativeModules.ToastAndroid,
  ContactProviderAndroid: NativeModules.ContactProviderModule
}

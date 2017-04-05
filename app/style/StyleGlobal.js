import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginLeft: 20,
    marginRight: 20,
  },
  pickerstyle: {
    ...Platform.select({
      ios: {
        width: 130,
        justifyContent: 'center',
        alignSelf: 'center',
      },
      android: {
        width: 115,
        justifyContent: 'center',
      },
    }),
  },
  picker: {
    ...Platform.select({
      ios: {
        maxHeight: 20,
      },
      android: {
        maxHeight: 14,
      },
    }),
  },
  logo: {
    marginTop: 16,
    height: 300 * 0.33,
    width: 300 * 0.33,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderColor: '#000000',
    marginBottom: 30,
  },
  // ================== //
  // Style Adpreference //
  // ================== //
  styleView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    borderColor: '#2196F3',
    borderWidth: 0.8,
    borderRadius: 3,
    height: 40,
    alignItems: 'center',
    marginBottom: 6,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },

  textPreference: {
    color: '#000000',
    fontSize: 14,
    marginLeft: 10,
  },

  // End Style Adpreference //
  // ====================== //
  logoGoogle: {
    height: 23,
    width: 35,
    ...Platform.select({
      ios: {
        tintColor: '#fff',
        alignSelf: 'stretch',
        justifyContent: 'center',
        marginRight: -5,
        marginLeft: 10,
      },
      android: {
        tintColor: '#fff',
        alignSelf: 'stretch',
        justifyContent: 'center',
        borderRadius: 48,
        marginRight: -5,
        marginLeft: 10,
      },
    }),
  },
  facebookLogo: {
    height: 30,
    width: 30,
    borderRadius: 7,
    marginLeft: 7,
    justifyContent: 'center',
  },
  logoTwitter: {
    tintColor: '#fff',
    height: 24,
    width: 24,
    marginLeft: 13,
  },
  otherlog: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  buttonEmail: {
    height: 50,
    width: 320,
    borderColor: '#01579b',
    backgroundColor: '#01579b',
    alignSelf: 'stretch',
    justifyContent: 'center',
    elevation: 2,
  },
  buttonTwitter: {
    height: 50,
    width: 320,
    backgroundColor: '#55acee',
    borderColor: '#55acee',
    borderWidth: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    elevation: 2,
  },
  buttonFacebook: {
    height: 50,
    width: 320,
    backgroundColor: '#3b5998',
    borderColor: '#3b5998',
    borderWidth: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    elevation: 2,
  },
  buttonGoogle: {
    height: 50,
    width: 320,
    backgroundColor: '#DC4A38',
    borderColor: '#DC4A38',
    borderWidth: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    elevation: 2,
  },
  icon: {
    height: 30,
    width: 30,
    marginLeft: 7,
  },
  text: {
    fontSize: 18,
    color: 'white',
    marginLeft: 20,
  },
  textfb: {
    fontSize: 18,
    color: 'white',
    marginLeft: 22,
  },
  texttw: {
    fontSize: 18,
    color: 'white',
    marginLeft: 21,
  },
  textInput: {
    height: 40,
    borderWidth: 0.5,
    borderRadius: 2,
    paddingLeft: 15,
    paddingRight: 15,
    borderColor: '#2196f3',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
  button: {
    height: 36,
    backgroundColor: '#039be5',
    borderColor: '#0288d1',
    borderWidth: 1,
    borderRadius: 3,
    marginTop: 15,
    marginBottom: 5,
    elevation: 2,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  invalid: {
    color: 'red',
    fontSize: 15,
    alignSelf: 'center',
  },
});
export default styles;

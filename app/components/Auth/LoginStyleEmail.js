import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    height,
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  contentLoginEmail: {
    marginTop: 20,
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 30,
  },
  otherlog: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginTop: 5,
    marginBottom: 5,
  },
  loginEmail: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginBottom: 5,
  },
  email: {
    height: 50,
    width: 320,
    borderColor: '#01579b',
    backgroundColor: '#01579b',
    alignSelf: 'stretch',
    justifyContent: 'center',
    elevation: 2,

  },
  logoEmail: {
    width: 30,
    height: 30,
    justifyContent: 'space-around',
    marginTop: 5,
    marginBottom: 5,
  },
  facebook: {
    height: 45,
    width: 23,
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderRadius: 48,
  },
  twitter: {
    marginTop: 5,
    height: 45,
    width: 320,
    backgroundColor: '#55acee',
    borderColor: '#55acee',
    borderWidth: 1,
    borderRadius: 0,
    alignSelf: 'stretch',
    justifyContent: 'center',
    elevation: 2,
  },
  logoTwitter: {
    width: 23,
    height: 23,
    marginRight: 10,
    tintColor: '#fff',
  },
  buttonTextTwitter: {
    fontSize: 18,
    fontWeight: '400',
    color: 'white',
  },
  google: {
    marginTop: 10,
    height: 45,
    width: 320,
    backgroundColor: '#DC4A38',
    borderColor: '#DC4A38',
    borderWidth: 1,
    borderRadius: 0,
    alignSelf: 'stretch',
    justifyContent: 'center',
    elevation: 2,
  },
  logoGoogle: {
    height: 35,
    width: 35,
    justifyContent: 'center',
  },
  buttonTextGoogle: {
    fontSize: 18,
    fontWeight: '400',
    color: 'white',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '400',
    color: 'white',
    textAlign:'center'
  },
  button: {
    height: 36,
    backgroundColor: '#039be5',
    borderColor: '#0288d1',
    borderWidth: 1,
    borderRadius: 2,
    marginTop: 5,
    alignSelf: 'stretch',
    justifyContent: 'center',
    elevation: 2,
    padding: 15,
  },
  errBox: {
    marginTop: 20,
    marginBottom: 30,
    height: 40,
    backgroundColor: '#f44336',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
  },
  wrong: {
    color: '#ff0000',
    alignSelf: 'flex-start',
  },
  facebookBtn: {
    height: 45,
    width: 320,
    backgroundColor: '#3b5998',
    borderColor: '#3b5998',
    borderWidth: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    elevation: 2,
  },
  facebookLogo: {
    height: 30,
    width: 30,
  },
  facebookText: {
    fontSize: 18,
    fontWeight: '400',
    color: 'white',
  },
  textInput: {
    height: 40,
    borderWidth: 0.5,
    borderRadius: 2,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 20,
    borderColor: '#2196f3',
  }
});
export default styles;

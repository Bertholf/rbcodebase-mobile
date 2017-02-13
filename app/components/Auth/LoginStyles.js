import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    height,
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30,
  },
  contentLoginEmail: {
   marginTop: 20,
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
   marginTop: 5,
   marginBottom: 5,
 },
 email: {
    marginTop: 10,
    height: 50,
    width: 320,
    backgroundColor: '#0277bd',
    borderColor: '#01579b',
    borderWidth: 0,
    borderRadius: 0,
    alignSelf: 'stretch',
    justifyContent: 'center',
    elevation: 2,
  },
  logoEmail: {
    width: 30,
    height: 30,
  },
  facebook: {
    height: 25,
    width: 25,
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderRadius: 48,
  },
  twitter: {
    height: 50,
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
    width: 30,
    height: 30,
    marginRight: 10,
  },
  buttonTextTwitter: {
    fontSize: 18,
    fontWeight: '400',
    color: 'white',
  },
  google: {
    height: 50,
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
    height: 30,
    width: 30,
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderRadius: 48,
  },
  buttonTextGoogle: {
    fontSize: 18,
    fontWeight: '400',
    color: 'white',
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '400',
    color: 'white',
    alignSelf: 'center',
  },
  button: {
    height: 36,
    backgroundColor: '#2196F3',
    borderColor: '#2196F3',
    borderWidth: 1,
    borderRadius: 2,
    marginTop: 5,
    alignSelf: 'stretch',
    justifyContent: 'center',
    elevation: 2,
  },
  errBox: {
    marginTop: 20,
    marginBottom: 30,
    height: 40,
    backgroundColor: 'rgba(255, 0, 0, 0.7)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  wrong: {
    color: '#ff0000',
    alignSelf: 'flex-start',
  },
  facebookBtn: {
    height: 50,
    width: 320,
    backgroundColor: '#3B5998',
    borderColor: '#3B5998',
    borderWidth: 1,
    borderRadius: 0,
    marginTop: 10,
    marginBottom: 4,
    alignSelf: 'stretch',
    elevation: 2,
  },
  facebookLogo: {
    height: 40,
    width: 40,
    borderRadius: 7,
  },
  facebookText: {
    fontSize: 18,
    fontWeight: '400',
    color: 'white',
    alignSelf: 'center',
  },
});
export default styles;

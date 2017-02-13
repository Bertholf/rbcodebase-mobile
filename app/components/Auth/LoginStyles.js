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
  logo: {
    width: 10,
    height: 10,
    marginBottom: 5,

  },
  otherlog: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginTop: 5,
    marginBottom: 5,
  },
  facebook: {
    height: 48,
    width: 48,
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderRadius: 48,
  },
  twitter: {
    height: 48,
    width: 48,
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderRadius: 48,
  },
  google: {
    height: 50,
    width: 320,
    backgroundColor: '#DC4A38',
    borderColor: '#DC4A38',
    borderWidth: 1,
    borderRadius: 7,
    alignSelf: 'stretch',
    justifyContent: 'center',
    elevation: 2,
  },
  logoGoogle: {
    width: 52,
    height: 52,
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
});
export default styles;

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
  contentLoginEmail: {
    marginTop: 20,
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 5,
  },
  otherlog: {
    flexDirection: 'row',
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
    height: 48,
    width: 48,
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderRadius: 48,
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

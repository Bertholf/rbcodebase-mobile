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
  buttonText: {
    fontSize: 18,
    fontWeight: '400',
    color: 'white',
    textAlign: 'center',
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
  textInput: {
    height: 40,
    borderWidth: 0.5,
    borderRadius: 2,
    paddingLeft: 15,
    paddingRight: 15,
    borderColor: '#2196f3',
    marginBottom: 20,
  },
});
export default styles;

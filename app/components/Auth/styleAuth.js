import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30,
  },
  textInput: {
    height: 50,
    color: '#2196f3',
    borderColor: '#2196f3',
    borderRadius: 2,
    borderWidth: 0.5,
    padding: 15,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
  image: {
    marginBottom: 100,
    alignSelf: 'center',
    width: 150,
    height: 150,
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

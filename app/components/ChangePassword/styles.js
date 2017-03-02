import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  box: {
    marginTop: 70,
    width: width * 0.9,
  },
  title: {
    alignItems: 'center',
    top: 20,
    marginBottom: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  new_password: {
    marginTop: 20,
    color: '#2196f3',
  },
  button_save: {
    backgroundColor: '#2196F3',
    padding: 10,
    marginTop: 50,
    borderRadius: 5,
    alignItems: 'center',
    width: width * 0.5,
  },
  middle_line: {
    borderWidth: 0.4,
    borderColor: 'grey',
    width: width * 0.2,
    height: 0.5,
  },
  invalid: {
    color: 'red',
    fontSize: 15,
    alignSelf: 'center',
  },
});

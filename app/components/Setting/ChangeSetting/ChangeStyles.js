import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');


const styles = StyleSheet.create({
  OuterView: {
    flexDirection: 'column',
    flex: 1,
  },
  View1: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingTop: 80,
    marginLeft: width * 0.1,
    marginRight: width * 0.1,
  },
  View2: {
    // justifyContent: 'center',//
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    elevation: 2,
    backgroundColor: '#2196f3',
    marginLeft: 16,
    marginRight: 16,
  },
  Button: {
    paddingTop: 6,
    paddingBottom: 6,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  Text2: {
    fontSize: 12,
    alignSelf: 'flex-start',
    paddingTop: 8,
    paddingBottom: 8,
  },

  TextInput1: {
    height: 0.07 * height,
    width: 0.7 * width,
    paddingTop: 2,
    paddingLeft: 8,
    paddingBottom: 5,
    color: '#2196f3',
    fontSize: 14,
    borderWidth: 0.5,
    borderRadius: 2,
    borderColor: '#2196f3',
    paddingLeft: 8,

  },
  invalid: {
    color: 'red',
    fontSize: 15,
    alignSelf: 'flex-start',
  },

  // style for edit change username screen
  container: {
    height,
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#fff',
  },
  inputUsernameContainer: {
    marginTop: 50,
  },
  textInputUsername: {
    height: 40,
    borderWidth: 0.5,
    borderRadius: 2,
    borderColor: '#2196f3',
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 10,
  },
  buttonSave: {
    height: 36,
    backgroundColor: '#039be5',
    borderColor: '#0288d1',
    borderWidth: 1,
    borderRadius: 2,
    alignSelf: 'stretch',
    justifyContent: 'center',
    elevation: 2,
    padding: 15,
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
    alignSelf: 'stretch',
    justifyContent: 'center',
    elevation: 2,
    padding: 15,
    marginTop: 20,
  },
});

module.exports = styles;

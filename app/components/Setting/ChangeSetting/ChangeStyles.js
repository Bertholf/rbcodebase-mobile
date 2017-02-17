import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');


const styles = StyleSheet.create({
  OuterView: {
    height,
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  View1: {
    // alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingTop: 50,

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
    fontSize: 17,
    alignSelf: 'flex-start',
    paddingTop: 8,
    paddingBottom: 8,
  },
  TextInput1: {
    height: 40,
    // width: 0.7 * width,
    // paddingTop: 2,
    // color: '#2196f3',
    // fontSize: 19,
    borderWidth: 0.5,
    borderRadius: 2,
    borderColor: '#2196f3',
    // height: 40,
    // borderWidth: 0.5,
    // borderRadius: 2,
    paddingLeft: 15,
    paddingRight: 15,
    // // paddingRight: 15,
    marginBottom: 20,
    // borderColor: '#2196f3',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '400',
    color: 'white',
    textAlign:'center',
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
  invalid: {
    color: 'red',
    fontSize: 15,
    alignSelf: 'flex-start',
  },
});

module.exports = styles;

import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');


const styles = StyleSheet.create({
  OuterView: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  View1: {
    justifyContent: 'space-between',
    paddingTop: 80,
  },
  View2: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    elevation: 2,
    backgroundColor: '#2196f3',
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
    // width: 0.1 * width,
    paddingTop: 2,
    paddingLeft: 8,
    paddingBottom: 5,
    color: '#2196f3',
    fontSize: 14,
    borderWidth: 0.5,
    borderRadius: 2,
    borderColor: '#2196f3',

  },
  invalid: {
    color: 'red',
    fontSize: 15,
    alignSelf: 'flex-start',
  },
});

module.exports = styles;

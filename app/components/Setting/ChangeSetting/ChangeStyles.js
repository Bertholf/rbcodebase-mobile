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
    justifyContent: 'space-between',
    paddingTop: 80,
    marginLeft: 16,
    marginRight: 16,
  },
  View2: {
    justifyContent: 'center',
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
  View3: {
    flexDirection: 'row',
    flex: 1,
  },
});

module.exports = styles;

import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  OuterView: {
    flexDirection: 'column',
    flex: 1,
  },
  View1: {
    paddingLeft: 30,
    alignItems: 'flex-start',
    paddingTop: 50,

  },
  View2: {
    // justifyContent: 'center',//
    alignItems: 'center',
    marginTop: 80,
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
  Text1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    alignItems: 'flex-start',
    paddingTop: 16,
    paddingBottom: 10,
  },
  Text2: {
    fontSize: 18,
    alignItems: 'flex-start',
    paddingTop: 8,
  },
  Text3: {
    fontSize: 14,
    alignItems: 'flex-start',
    paddingTop: 20,
  },
  Text4: {
    fontSize: 30,
    color: '#ffffff',
  },
  Text5: {
    fontSize: 18,
    alignItems: 'flex-start',
    paddingTop: 20,

  },
  TextInput1: {
    height: 50,
    width: 250,
    paddingTop: 2,
    color: '#2196f3',
  },
});

module.exports = styles;

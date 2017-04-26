import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  OuterView: {
    flexDirection: 'column',
    flex: 1,
  },
  View1: {
    marginLeft: 55,
    alignItems: 'flex-start',
    paddingTop: 70,

  },
  View2: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
    backgroundColor: '#435172',
    elevation: 2,
  },
  Text1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#435172',
    alignItems: 'flex-start',
    paddingTop: 16,
    paddingBottom: 10,
    borderBottomWidth: 3,
    borderBottomColor: '#435172',
    marginLeft: 16,
    marginRight: 16,
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
  },
  TextInput2: {
    height: 50,
    width: 250,
    paddingTop: 2,
  },
});

module.exports = styles;

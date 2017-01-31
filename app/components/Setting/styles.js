import {
  AppRegistry,
  StyleSheet,
} from 'react-native';

module.exports = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  checkbox: {
    width: 26,
    height: 26,
  },
  labelContainer: {
    marginLeft: 10,
    marginRight: 10,
  },
  label: {
    fontSize: 15,
    color: 'grey',
  },
  container1: {
    flex: 1,
  },
  listNotifContainer: {
    flex: 1,
  },
  textListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#aaa',
    height: 40,
  },
  textListNotif: {
    fontSize: 15,
    fontWeight: '700',
    color: 'rgba(0, 0, 0, 0.5)',
    marginLeft: 15,
  },
  saveBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2196F3',
    height: 35,
    width: 100,
    borderRadius: 3,
  },
  txtBtn: {
    fontSize: 20,
    fontWeight: '100',
    color: 'white',
  },
});

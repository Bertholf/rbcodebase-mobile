import {
  StyleSheet,
} from 'react-native';

module.exports = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 6,
    marginBottom: 5,
    flex: 1,
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
    paddingRight: 16,
  },
  textListNotif: {
    fontSize: 15,
    fontWeight: '700',
    color: 'rgba(0, 0, 0, 0.5)',
    marginLeft: 15,
  },
  saveBtn: {
    backgroundColor: '#2196F3',
    borderRadius: 2,
    elevation: 2,
    marginLeft: 16,
    padding: 10,
  },
  txtBtn: {
    color: '#fff',
    fontSize: 20,
  },
});

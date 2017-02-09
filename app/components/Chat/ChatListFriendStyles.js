import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    right: 0,
    left: 0,
    flexDirection: 'column',

  },
  container1: {
    flex: 8,
    backgroundColor: '#fff',
    elevation: 2,
  },
  page: {
    margin: 10,
    backgroundColor: '#fff',
    elevation: 4,
    borderRadius: 4,
  },
  contactImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    paddingRight: 20,
  },
  name: {
    fontSize: 18,
    color: '#2196f3',
    paddingLeft: 20,
  },
  viewlist: {
    flexDirection: 'row',
    flex: 1,
    padding: 8,
    paddingRight: 8,
    paddingLeft: 8,
    borderBottomWidth: 0.5,
    borderColor: '#2196f3',
    marginLeft: 16,
    marginRight: 16,
  },
});
module.exports = styles;

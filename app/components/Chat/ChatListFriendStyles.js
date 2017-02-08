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
  title: {
    paddingTop: 15,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    paddingLeft: 5,
  },
  header: {
    flexDirection: 'row',
    height: 55,
    backgroundColor: '#2196f3',
    paddingLeft: 16,
    elevation: 2,
    borderBottomWidth: 0.5,
    borderColor: '#fff',
  },
  menu: {
    marginTop: 6,
    width: 40,
    height: 40,
  },
  page: {
    alignItems: 'flex-start',
    margin: 10,
    justifyContent: 'center',
    backgroundColor: '#fff',
    elevation: 4,
    borderRadius: 4,
  },
  contactImg: {
    width: 60,
    height: 60,
  },
  listFriend: {
    marginLeft: 6,
    marginRight: 6,
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: 5,
    borderBottomWidth: 0.5,
    borderColor: '#2196f3',
  },
  setlist: {
    height: 1,
    backgroundColor: '#000000',
    opacity: 0.3,
    margin: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  date: {
    fontSize: 14,
  },
  text: {
    fontSize: 16,
  },
});
module.exports = styles;

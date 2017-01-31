import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    right: 0,
    left: 0,
    height: 270,
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
    backgroundColor: '#2962FF',
    shadowColor: '#2979FF',
    shadowOpacity: 5,
    shadowRadius: 1,
    paddingLeft: 10,
  },
  menu: {
    width: 35,
    height: 35,
    marginTop: 10,
  },
  page: {
    margin: 10,
    justifyContent: 'center',
  },
  contactImg: {
    width: 60,
    height: 60,
  },
  listFriend: {
    marginLeft: 5,
    justifyContent: 'space-around',
    flexDirection: 'row',
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

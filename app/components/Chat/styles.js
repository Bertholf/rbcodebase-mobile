import {
  AppRegistry,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  attachFile: {
    width: 25,
    height: 25,
    marginTop: 5,
  },
  avatarFriend: {
    flexDirection: 'row',
  },
  avatarImg: {
    width: 40,
    height: 40,
    marginTop: 3,
    marginBottom: 3,
    marginLeft: 3,
  },
  content: {
    flex: 1,
    backgroundColor: '#1565c0',
  },
  contentLeft: {
    marginLeft: 10,
  },
  contentRight: {
    alignItems: 'flex-end',
    marginRight: 10,
  },
  chatText: {
    fontSize: 15,
    color: '#263238',
  },
  footer: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'skyblue',
    marginBottom: 5,
    height: 45,
  },
  inputChat: {
    width: 295,
    height: 35,
    backgroundColor: 'white',
    marginBottom: 5,
    marginLeft: 5,
    borderRadius: 3,
  },
  inputSeac: {
    width: 295,
    height: 35,
    backgroundColor: 'white',
    marginBottom: 5,
    marginLeft: 5,
    borderRadius: 3,
  },
  sendBtn: {
    fontSize: 15,
    fontWeight: '100',
    backgroundColor: '#fff',
    color: '#2979FF',
    height: 35,
    width: 50,
    borderRadius: 3,
    marginBottom: 5,
    marginLeft: 5,
    paddingLeft: 7,
    paddingTop: 5,
  },
  searchBtn: {
    fontSize: 15,
    fontWeight: '100',
    backgroundColor: '#fff',
    color: '#2979FF',
    height: 30,
    width: 50,
    borderRadius: 3,
    marginBottom: 5,
    marginLeft: 5,
    paddingLeft: 3,
    paddingTop: 5,
  },

});

export default styles;

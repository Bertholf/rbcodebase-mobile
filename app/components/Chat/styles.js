import {
  AppRegistry,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
  },
  header: {
    borderBottomWidth: 1,
    borderColor: '#2962ff',
  },
  containerImgMenu: {
    backgroundColor: '#2962ff',
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: '#26A69A',
  },
  imgMenu: {
    width: 30,
    height: 55,
    marginTop: 1,
  },
  inputSearch: {
    width: 300,
    height: 55,
    color: 'white',
    borderRadius: 3,
    fontSize: 20,
  },
  attachFile: {
    width: 25,
    height: 35,
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
    marginBottom: 429,

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
    backgroundColor: '#2962FF',
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
  sendBtn: {
    fontSize: 15,
    fontWeight: '100',
    backgroundColor: '#fff',
    color: '#2962FF',
    height: 35,
    width: 50,
    borderRadius: 3,
    marginBottom: 5,
    marginLeft: 5,
    paddingLeft: 7,
    paddingTop: 5,
  },

});

export default styles;

import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    marginBottom: 10,
  },
  imgUser: {
    left: 5,
    top: 10,
    width: 30,
    height: 30,
    borderRadius: 6,
  },
  body: {
    flexDirection: 'row',
  },
  bodyChat: {
    marginLeft: 15,
    padding: 5,
    backgroundColor: '#fff',
    borderRadius: 6,
    elevation: 4,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  txtChat: {
    fontSize: 14,
  },
  date: {
    fontSize: 10,
    marginTop: 8,
  },
  view: {
    height: 5,
  },
  TextInput: {
    fontSize: 16,
    borderRadius: 3,
    color: '#2196f3',
    height: 60,
  },
  TextSend: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    paddingLeft: 8,
    paddingRight: 8,
  },
});
export default styles;

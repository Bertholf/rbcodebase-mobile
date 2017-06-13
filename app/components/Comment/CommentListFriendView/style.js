import {StyleSheet, Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    paddingRight: 10,
    paddingLeft: 10,
    flexDirection: 'row',
  },
  imgUser: {
    marginTop: 5,
    left: 5,
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  body: {
    flexDirection: 'row',
    bottom: 5,
    marginLeft: 20,
    borderBottomWidth: 0.5,
    borderColor: '#ddd',
    width,
    height: height * 0.15,
  },
  content: {
    padding: 3,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  txtChat: {
    fontSize: 14,
    width: 150,
  },
  date: {
    fontSize: 10,
    justifyContent: 'center',
  },
  reply: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#333',
    paddingRight: 10,
  },
  comment: {
    bottom: 5,
  },
});

export default styles;

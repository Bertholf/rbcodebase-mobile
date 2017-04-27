import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  imgUser: {
    left: 5,
    top: 10,
    width: 30,
    height: 30,
    borderRadius: 6,
  },
  img: {
    width: 100,
    height: 50,
    bottom: 5,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  date: {
    fontSize: 10,
    justifyContent: 'center',
  },
  number: {
    fontSize: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 3,
  },
  content: {
    paddingRight: 10,
    paddingLeft: 5,
    paddingBottom: 10,
    backgroundColor: '#fff',
    elevation: 5,
  },
  thumb: {
    width: 10,
    height: 10,
  },
  action: {
    flexDirection: 'row',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    height: 20,
    borderColor: '#ddd',
    width: 75,
  },
  headerContent: {
    marginLeft: -5,
    flexDirection: 'row',
  },
  headerText: {
    padding: 3,
    margin: 5,
  },
  comment: {
    bottom: 5,
  },
  heart: {
    width: 20,
    height: 20,
  },
});

export default styles;

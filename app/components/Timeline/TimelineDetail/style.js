import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  fntui: {
    color: 'black',
    height: 40,
    fontSize: 18,
    padding: 8,
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#009688',
  },
  user: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 10,
  },
  img: {
    width: 300,
    height: 250,
    margin: 15,
    marginLeft: 20,
  },
  detail: {
    marginRight: 15,
    marginLeft: 15,
    fontSize: 15,
  },
  comment: {
    height: 25,
    margin: 15,
    padding: 5,
    borderColor: 'gray',
  },
  container: {
    flex: 1,
  },
  buttonPost: {
    borderRadius: 3,
    flex: 1,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;

import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    elevation: 20,
  },
  imagesLeft: {
    width: 25,
    height: 25,
    marginRight: 10,
    paddingRight: 8,
  },
  list: {
    marginTop: 10,
    flexDirection: 'row',
    paddingLeft: 15,
    backgroundColor: '#ffffff',
    borderColor: '#2196F3',
    borderWidth: 0.8,
    borderRadius: 2,
    justifyContent: 'space-between',
    marginBottom: 8,
    height: 40,
  },
  list1: {
    backgroundColor: '#D50000',
    padding: 0,
    borderRadius: 3,
    height: 35,
    elevation: 2,
    marginTop: 40,
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 13,
  },
  deactive: {
    fontSize: 25,
    color: 'white',
  },
  titleText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  image:{
    height: 30,
    width: 30,
    alignSelf: 'center',
  }
});

module.exports = styles;

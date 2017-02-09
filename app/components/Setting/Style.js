import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
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
    padding: 15,
    backgroundColor: '#ffffff',
    borderColor: '#2196F3',
    borderWidth: 0.8,
    borderRadius: 4,
    justifyContent: 'flex-start',
    marginBottom: 8,
  },
  list1: {
    backgroundColor: '#D50000',
    padding: 5,
    borderRadius: 3,
    height: 50,
    elevation: 2,
    marginTop: 40,
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    paddingLeft: 16,
  },
  deactive: {
    fontSize: 25,
    color: 'white',
  },
});

module.exports = styles;

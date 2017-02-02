import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    elevation: 20,
  },
  imagesLeft: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  list: {
    marginTop: 10,
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#ffffff',
    borderColor: '#2196F3',
    borderBottomWidth: 4,
    justifyContent: 'space-between',
  },
  list1: {
    backgroundColor: '#2196F3',
    padding: 5,
    borderRadius: 3,
    elevation: 1,
    height: 50,
    marginTop: 40,
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 20,
  },
  deactive: {
    fontSize: 25,
    color: 'white',
  },
  kotakView: {
    flex: 5,
    borderWidth: 4,
    borderColor: 'white',
  },
  icon: {
    height: 40,
    width: 40,
  },
});

module.exports = styles;

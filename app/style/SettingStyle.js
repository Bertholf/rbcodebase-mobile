import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  OuterView: {
    flexDirection: 'column',
    flex: 1,
  },
  View1: {
    justifyContent: 'space-between',
    paddingTop: 15,
    marginLeft: 16,
    marginRight: 16,
  },
  View2: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    elevation: 2,
    backgroundColor: '#2196f3',
    marginLeft: 16,
    marginRight: 16,
  },
  Button: {
    paddingTop: 6,
    paddingBottom: 6,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  Text2: {
    fontSize: 17,
    alignSelf: 'flex-start',
    paddingTop: 8,
    paddingBottom: 8,
  },
  TextInput1: {
    height: 40,
    paddingTop: 2,
    paddingLeft: 8,
    paddingBottom: 5,
    color: '#2196f3',
    fontSize: 14,
    borderWidth: 0.5,
    borderRadius: 2,
    borderColor: '#2196f3',
  },
  invalid: {
    color: 'red',
    fontSize: 15,
    alignSelf: 'flex-start',
  },
  TextInput3: {
    paddingTop: 10,
    paddingLeft: 8,
    paddingBottom: 5,
    color: 'grey',
    marginLeft: 16,
    marginRight: 16,
  },
  TextInput5: {
    paddingTop: 10,
    paddingLeft: 8,
    paddingBottom: 5,
    color: 'grey',
  },
  currentName: {
    height: 40,
    paddingTop: 2,
    paddingLeft: 8,
    paddingBottom: 5,
    color: '#2196f3',
    fontSize: 14,
    borderWidth: 0.5,
    borderRadius: 2,
    borderColor: '#2196f3',
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  image: {
    height: 30,
    width: 30,
    alignSelf: 'center',
  },
});

module.exports = styles;

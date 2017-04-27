import {StyleSheet, Dimensions} from 'react-native';

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    height,
    width,
  },
  header: {
    height: 60,
    backgroundColor: '#009688',
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 8,
  },
  imgMenu: {
    width: 30,
    height: 30,
    top: 15,
    left: 10,
  },
  menubar: {
    width: width * 0.8,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuBtn: {
    width: 30,
    height: 30,
    top: 15,
  },
  arrow: {
    width: 20,
    height: 30,
  },
  imageSide: {
    width: 100,
    height: 100,
  },
  listTrail: {
    flexDirection: 'row',
    top: 5,
    marginLeft: 5,
    alignItems: 'center',
  },
  menupert: {
    width: 25,
    height: 25,
  },
  list: {
    backgroundColor: '#00BFA5',
    flexDirection: 'row',
    height: 50,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    margin: 5,
  },
  sub: {
    color: '#FFFFFF',
    fontSize: 16,
    margin: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    backgroundColor: '#00BFA5',
    paddingLeft: 3,
    paddingRight: 3,
  },
  chart: {
    width: 200,
    height: 200,
  },
  border: {
    flexDirection: 'row',
    borderColor: '#00BFA5',
    elevation: 4,
  },
});

export default styles;

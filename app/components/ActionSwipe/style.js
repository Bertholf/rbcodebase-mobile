import {StyleSheet, Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');
const screenWidth = width * 3;
const screenHeight = height * 3;
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
  card: {
    width,
    height,
    padding: 15,
  },
  arrowLeft: {
    position: 'absolute',
    top: height / 2,
    left: 0,
    zIndex: 10,
  },
  arrowRight: {
    position: 'absolute',
    top: height / 2,
    right: 0,
    zIndex: 10,
  },
});

export default styles;

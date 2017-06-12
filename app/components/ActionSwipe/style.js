import {StyleSheet, Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');
const screenWidth = width * 3;
const screenHeight = height * 3;
const styles = StyleSheet.create({
  card: {
    width,
    height,
    padding: 15,
  },
});

export default styles;

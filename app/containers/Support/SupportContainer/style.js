import {StyleSheet, Dimensions} from 'react-native';

const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
});

export default styles;

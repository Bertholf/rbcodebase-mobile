import {StyleSheet, Dimensions} from 'react-native';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    height,
    width,
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
  },
});

export default styles

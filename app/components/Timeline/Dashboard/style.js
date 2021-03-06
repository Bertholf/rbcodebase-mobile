import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    height,
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  account: {
    width: 40 ,
    height: 40,
    marginBottom: 30,
  },

  icon: {
    height: 20,
    width: 20,
    justifyContent: 'space-around',
  },
});
export default styles;

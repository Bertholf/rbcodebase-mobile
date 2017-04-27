import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#4CAF50',
  },
  row: {
    padding: 16,
    backgroundColor: 'white',

  },
});

export default styles;

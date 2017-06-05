import {StyleSheet, Dimensions} from 'react-native';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#B3E5FC',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 50,
  },
  page2: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 8,
  },
  btnContent: {
    backgroundColor: '#2196F3',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  btn: {
    width,
    flex: 1,
    backgroundColor: '#2196F3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    padding: 10,
    fontWeight: '200',
    fontSize: 17,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;

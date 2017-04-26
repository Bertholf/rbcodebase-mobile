import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderColor: '#2196F3',
    borderBottomWidth: 0.5,
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 8,
    paddingBottom: 16,
  },
  user: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00008b',
  },
  photo: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  detail: {
    fontSize: 14,
    color: '#2196F3',
    flexWrap: 'wrap',
  },
  time: {
    fontSize: 12,
    color: '#9091AC',
    fontWeight: 'bold',
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
});

export default styles;

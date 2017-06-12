import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 13,
    paddingLeft: 10,
    paddingRight: 10,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 0.5,
    borderColor: '#2196f3',
    paddingBottom: 10,
  },
  name: {
    fontSize: 22,
    marginBottom: 3,
    color: '#2196f3',
  },
  icon: {
    width: 25,
    height: 25,
  },
});

export default styles;

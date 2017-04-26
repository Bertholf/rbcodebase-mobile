import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  marker: {
    backgroundColor: '#550bbc',
    padding: 5,
    borderRadius: 5,
  },
  text: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
  square: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 13,
    paddingVertical: 12,
  },
});

export default styles;

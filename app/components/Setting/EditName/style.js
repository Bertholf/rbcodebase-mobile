import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    marginLeft: 16,
    marginRight: 16,
    paddingLeft: 14,
    paddingRight: 14,
  },
  titleButton: {
    fontSize: 15,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 2,
    elevation: 2,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 14,
    paddingBottom: 14,
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    color: '#212121',
  },
  inputMargin: {
    marginBottom: 20,
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#9E9E9E',
  },
  imageContaioner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputStyle: {
    ...Platform.select({
      ios: {
        borderColor: '#E0E0E0',
        borderWidth: 0.5,
        height: 55,
        borderRadius: 2,
      },
      android: {
        height: 55,
      },
    }),
  },
});

module.exports = styles;

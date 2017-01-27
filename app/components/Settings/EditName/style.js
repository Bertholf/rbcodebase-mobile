import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    marginLeft: 16,
    marginRight: 16,
    paddingLeft: 14,
    paddingRight: 14,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 14,
    color: '#212121',
    marginBottom: 5,
  },
  button: {
    marginTop: 34,
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
        height: 35,
        borderRadius: 2,
      },
      android: {
      },
    }),
  },
});

module.exports = styles;

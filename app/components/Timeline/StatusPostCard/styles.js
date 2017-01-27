import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  containerCard: {
    ...Platform.select({
      ios: {
        margin: 20,
        padding: 14,
        backgroundColor: '#ffffff',
        borderRadius: 2,
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowColor: '#212121',
        shadowOpacity: 75,
        shadowRadius: 12,
      },
      android: {
        margin: 20,
        padding: 14,
        backgroundColor: '#ffffff',
        borderRadius: 2,
        elevation: 2,
      },
    }),
  },
  titleText: {
    color: '#757575',
    fontWeight: 'bold',
    fontSize: 17,
  },
  containerBottom: {
    flexDirection: 'row',
    flex: 3,
  },
  image: {
    paddingTop: 14,
    paddingBottom: 14,
    height: 24,
    width: 24,
    flexDirection: 'row',
    marginRight: 7,
  },
});

module.exports = styles;

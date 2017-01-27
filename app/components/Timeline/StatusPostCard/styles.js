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
        shadowRadius: 2,
      },
      android: {
        margin: 20,
        padding: 14,
        backgroundColor: '#ffffff',
        borderRadius: 2,
        elevation: 2,
        marginBottom: 25,
      },
    }),
  },
  titleText: {
    ...Platform.select({
      ios: {
        color: '#757575',
        fontWeight: 'bold',
        fontSize: 17,
        paddingBottom: 7,
        borderBottomWidth: 0.2,
        borderColor: '#9E9E9E',
      },
      android: {
        color: '#757575',
        fontWeight: 'bold',
        fontSize: 17,
        paddingBottom: 17,
      },
    }),
  },
  containerBottom: {
    paddingTop: 10,
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
  border: {
    ...Platform.select({
      ios: {
        flexDirection: 'row',
        borderTopWidth: 0.2,
        borderColor: '#9E9E9E',
      },
      android: {
        flexDirection: 'row',
      },
    }),
  },
});

module.exports = styles;

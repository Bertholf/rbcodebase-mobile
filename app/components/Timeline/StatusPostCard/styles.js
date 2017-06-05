import { StyleSheet, Platform, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
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
        paddingBottom: 23,
      },
      android: {
        margin: 20,
        padding: 14,
        backgroundColor: '#ffffff',
        borderRadius: 2,
        elevation: 2,
        marginBottom: 25,
        paddingBottom: 23,
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
        borderBottomWidth: 0.2,
        borderColor: '#9E9E9E',
      },
    }),
  },
  containerBottom: {
    paddingTop: 10,
    flexDirection: 'row',
    flex: 3,
  },
  image: {
    marginTop: 4,
    paddingTop: 8,
    paddingBottom: 8,
    height: height * 0.001,
    width: width * 0.05,
    flexDirection: 'row',
    marginRight: 16,
  },
  border: {
    ...Platform.select({
      ios: {
        flexDirection: 'row',
        borderTopWidth: 0.2,
        borderColor: '#fff',
      },
      android: {
        flexDirection: 'row',
      },
    }),
  },
  post: {
    color: '#fff',
    backgroundColor: '#2196F3',
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: width * 0.03,
    alignSelf: 'center',
    fontWeight: 'bold',
  }
});

module.exports = styles;

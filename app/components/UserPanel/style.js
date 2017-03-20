import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  btnSettingContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  iconImage: {
    margin: 15,
    width: 25,
    height: 25,
  },
  userContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  userButton: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  userImage: {
    ...Platform.select({
      ios: {
        width: 120,
        height: 120,
        borderRadius: 120/2,
      },
      android: {
        width: 120,
        height: 120,
        borderRadius: 120,
      }
    }),
  },
  linksContainer: {
    flexDirection: 'column',
    marginTop: 45,
  },
  imgLinksContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  imgLinks: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  textLinks: {
    fontSize: 16,
    fontWeight: '500',
    color: 'rgba(0,0,0,0.9)',
  },
  swapContainer: {
    flex: 1,
    marginTop: 40,
    alignItems: 'center',
  },
  swapImage: {
    width: 70,
    height: 50,
  },
});

export default styles;

import { StyleSheet } from 'react-native';

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
  linksContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  userButton: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  userImage: {
    width: 130,
    height: 130,
    borderRadius: 130,
  },
  imgLinksContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
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
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  swapImage: {
    width: 70,
    height: 50,
  },
});

export default styles;

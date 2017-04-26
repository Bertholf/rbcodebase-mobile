import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgBg: {
    width: 360,
    height: 200,
  },
  btnBackground: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    height: 200,
  },
  btnContainer: {
    flexDirection: 'row',
    height: 200,
    paddingTop: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  backArrow: {
    width: 40,
    marginLeft: 15,
  },
  textTown: {
    color: 'white',
    fontSize: 25,
    fontWeight: '500',
    marginLeft: 30,
  },
  createImg: {
    marginLeft: 50,
  },
  photoLibraryImg: {
    marginLeft: 20,
    marginRight: 20,
  },
  textInformContainer: {
    height: 100,
    backgroundColor: '#009688',
  },
  textInform: {
    marginLeft: 20,
  },
});

export default styles;

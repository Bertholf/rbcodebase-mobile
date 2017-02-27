import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF',
  },
  touchable: {
    borderRadius: 100,
  },
  backgroundContainer: {
    // position: 'absolute',
    height: height * 0.28,
  },
  backgroundname: {
    width,
  },
  container: {
    flex: 1,
  },
  backdrop: {
    flex: 1,
    flexDirection: 'row',
  },
  mapmain: {
    paddingTop: height * 0.47,
  },
  viewImgpp: {
    paddingTop: height * 0.13,
    width: width * 0.35,
    position: 'relative',
  },
  logo: {
    backgroundColor: 'rgba(0,0,0,0)',
    width: 90,
    height: 90,
    borderRadius: 50,
    paddingTop: height * 0.15,
    marginLeft: 16,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'grey',
  },
  headline: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#212121',
    marginTop: -28,
    width,
    backgroundColor: 'hsla(20,100%,100%,0.3)',
  },
  overlay: {
    opacity: 0.5,
    backgroundColor: '#000000',
  },

  button: {
    flexDirection: 'row',
    padding: 8,
    backgroundColor: '#2196F3',
    color: 'white',
    alignItems: 'center',
    marginTop: 5,
    borderRadius: 2,
  },
  follow: {
    padding: 8,
    alignItems: 'center',
    backgroundColor: '#2196F3',
    color: 'white',
    fontSize: 15,
    borderRadius: 10,
  },
  images: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  icon: {
    height: 20,
    width: 20,
    borderRadius: 50,
  },
  location: {
    height: 20,
    width: 20,
    borderRadius: 50,
    marginBottom: 12,
  },
  profile: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 40,
  },
  foto: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 2,
  },
  gambar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 6,
  },
  pos: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 6,
    padding: 6,
    color: '#2196F3',
  },
  followers: {
    flexDirection: 'row',
    marginTop: 6,
    justifyContent: 'space-around',
    padding: 6,
    color: '#2196F3',
  },
  bio: {
    flexDirection: 'row',
    fontWeight: 'bold',
    padding: 6,
    color: 'black',
    marginLeft: 2.5,
  },
  isi: {
    flexDirection: 'row',
    color: 'grey',
    marginLeft: 10,
  },
  isi2: {
    color: '#FF5722',
    margin: 12,
  },
  daki: {
    textAlign: 'right',
    color: 'blue',
    marginLeft: 100,
  },
  nama: {
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
  },
  textInform: {
    marginLeft: 120,
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  posisi: {
    marginLeft: 8,
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: 5,
  },
  biodata: {
    flexDirection: 'column',
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: 20,
    borderBottomWidth: 1,
    borderColor: 'grey',
    marginLeft: 20,
    marginRight: 20,
    paddingTop: height * 0.01,
  },
  imgCameraContainer: {
    position: 'absolute',
    bottom: 60,
    right: 10,
    borderRadius: 80,
    width: 100,
    height: 100,
    backgroundColor: '#004D40',
  },
});

module.exports = styles;

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backdrop: {
    flex: 1,
    height: 200,
  },
  backgroundname: {
  },
  headline: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'rgba(255,255,255,0.9)',
    bottom: 50,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF',
  },
  touchable: {
    borderRadius: 100,
  },
  overlay: {
    opacity: 0.5,
    backgroundColor: '#000000',
  },
  logo: {
    position: 'absolute',
    left: 3,
    bottom: 30,
    width: 90,
    height: 90,
    borderRadius: 50,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'grey',
  },
  button: {
    flexDirection: 'row',
    padding: 8,
    backgroundColor: '#2196F3',
    color: 'white',
    marginLeft: 10,
    marginTop: 2,
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
    color: 'rgba(0,0,0,0.9)',
    textAlign: 'center',
  },
  followers: {
    color: '#000',
    textAlign: 'center',
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
    flexDirection: 'row',
    color: '#2196F3',
    marginLeft: 240,
    marginBottom: 12,
    borderRadius: 2,
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
    flexDirection: 'row',
    backgroundColor: 'hsla(20,100%,100%,0.3)',
    top: -25,
    paddingBottom: 2,
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  posisi: {
    marginLeft: 8,
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: 5,
  },
  biodata: {
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderColor: 'grey',
    marginLeft: 20,
    marginRight: 20,
    top: -25,
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

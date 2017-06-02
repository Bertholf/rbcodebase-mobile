import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  backgroundContainer: {
    flexDirection: 'row',
  },
  backgroundname: {
    width,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.03)',
  },
  backdrop: {
    resizeMode: 'cover',
    height: height * 0.28,
    width: width * 1,
  },
  mapmain: {
    paddingTop: height * 0.47,
  },
  viewImgpp: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined
  },
  username: {
    fontSize: 16,
    alignSelf: 'center',
    opacity: 0.5,
  },
  icons: {
    width: 16,
    height: 16,
    tintColor: '#757575',
    opacity: 0.2,
    alignSelf: 'center',
    marginLeft: 8,
  },
  box: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    textAlign: 'center',
    fontSize: 25,
    flex: 2,
    padding: 0,
    height: 30,
  },
  logo: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0)',
    width: undefined,
    height: undefined,
    borderRadius: 100,
    paddingTop: height * 0.15,
    flexDirection: 'row',
    marginBottom: 5,
  },
  back: {
    width: 28,
    height: 20,
    marginTop: 10,
    marginLeft: 10,
  },
  backsetting: {
    width: 25,
    height: 18,
    marginTop: 10,
    marginRight: 10,
  },
  headline: {
    fontSize: 25,
    alignSelf: 'center',
    color: 'black',
  },
  button: {
    flexDirection: 'row',
    color: 'white',
    alignSelf: 'center',
    marginBottom: 5,
    fontSize: 20,
    backgroundColor: '#00E676',
    borderRadius: 100,
    paddingLeft: 10,
    paddingRight: 8,
    borderColor: '#00E676',
    borderWidth: 1,
  },
  buttonEmpty: {
    flexDirection: 'row',
    padding: 8,
    alignItems: 'center',
    marginTop: 35,
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
  buttonUnfollow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: '#00E676',
    alignItems: 'center',
    marginTop: 50,
    borderRadius: 50,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: '#00E676',
    borderWidth: 1,
  },
  icon: {
    height: 25,
    width: 25,
    borderRadius: 50,
    paddingTop: 30,
    alignItems: 'center',
    left: 20,
  },
  location: {
    height: 20,
    width: 20,
    borderRadius: 50,
    marginBottom: 12,
  },
  pos: {
    marginTop: 6,
    textAlign: 'center',
    color: 'grey',
  },
  followers: {
    marginTop: 6,
    color: 'grey',
  },
  followerss: {
    marginTop: 6,
    color: 'grey',
  },
  bio: {
    alignSelf: 'center',
    flexDirection: 'row',
    padding: 6,
    color: 'black',
    fontSize: 25,
  },
  isi: {
    // flexDirection: 'row',
    color: 'grey',
    // marginLeft: 10,
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
  textInform: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  posisi: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    backgroundColor: 'rgba(0,0,0,0)',
    marginVertical: 5,
  },
  biodata: {
    flexDirection: 'column',
    backgroundColor: 'rgba(0,0,0,0)',
    paddingTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
  },
  saveIcon: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    marginRight: 12,
    backgroundColor: 'rgba(0,0,0,0)',
    tintColor: '#2196F3',
  },
});

module.exports = styles;

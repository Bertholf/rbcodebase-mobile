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
    backgroundColor: 'whitesmoke',
  },
  backdrop: {
    resizeMode: 'cover',
    height: height * 0.28,
  },
  mapmain: {
    paddingTop: height * 0.47,
  },
  viewImgpp: {
    width: width * 0.35,
    position: 'relative',
  },
  logo: {
    backgroundColor: 'rgba(0,0,0,0)',
    width: 100,
    height: 100,
    borderRadius: 50,
    paddingTop: height * 0.15,
    marginLeft: 16,
    flexDirection: 'row',
    borderColor: 'white',
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
  },
  headline: {
    fontSize: 25,
    alignSelf: 'center',
    color: 'black',
  },
  button: {
    flexDirection: 'row',
    color: '#00E676',
    alignItems: 'center',
    marginTop: 60,
    fontSize: 15,
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
    height: 20,
    width: 20,
    borderRadius: 50,
    paddingTop: 30,
  },
  location: {
    height: 20,
    width: 20,
    borderRadius: 50,
    marginBottom: 12,
  },
  pos: {
    marginTop: 6,
    color: 'grey',
  },
  followers: {
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
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 15,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  posisi: {
    flexDirection: 'row',
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
    marginBottom: 30,
  },
});

module.exports = styles;

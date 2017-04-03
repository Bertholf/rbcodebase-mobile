import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  backgroundContainer: {
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
    width: width * 0.35,
    position: 'relative',
  },
  logo: {
    backgroundColor: 'rgba(0,0,0,0)',
    width: 110,
    height: 110,
    borderRadius: 55,
    paddingTop: height * 0.15,
    marginLeft: 16,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'white',
  },
  back: {
    width: 25,
    height: 17,
    marginLeft:13,
    marginTop:10,
    flexDirection: 'row',
  },
  headline: {
    fontSize: 25,
    color: 'black',
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
  buttonUnfollow: {
    flexDirection: 'row',
    padding: 6,
    backgroundColor: '#ddd',
    justifyContent: 'space-between',
    color: '#333',
    alignItems: 'center',
    marginTop: 7,
    borderRadius: 2,
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
  pos: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 6,
    padding: 6,
    color: 'grey',
  },
  followers: {
    flexDirection: 'row',
    marginTop: 6,
    justifyContent: 'space-around',
    padding: 6,
    color: 'grey',
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
  textInform: {
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
    paddingTop: 65,
    borderBottomWidth: 1,
    borderColor: 'grey',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 30,
  },
});

module.exports = styles;

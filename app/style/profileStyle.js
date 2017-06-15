import { StyleSheet, Dimensions, Platform } from 'react-native';

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
    height: height * 0.30,
    width: width * 1,
  },
  mapmain: {
    paddingTop: height * 0.47,
  },
  viewImgpp: {
    ...Platform.select({
      ios: {
        flex: 1,
        alignSelf: 'center',
      },
      android: {
        flex: 1,
        alignSelf: 'center',
        width: undefined,
        height: undefined,
      },
    }),
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
    ...Platform.select({
      ios: {
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
        marginTop: 16,
      },
      android: {
        width: 80,
        height: 80,
        marginTop: 20,
        borderRadius: 80,
      },
    }),
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
    ...Platform.select({
      ios: {
        flexDirection: 'row',
        color: '#00E676',
        alignSelf: 'center',
        marginBottom: 12,
        fontSize: 16,
        borderRadius: 30 / 2,
        paddingLeft: 12,
        paddingRight: 8,
        paddingTop: 4,
        paddingBottom: 2,
        borderColor: '#00E676',
        borderWidth: 2,
      },
      android: {
        flexDirection: 'row',
        color: '#00E676',
        alignSelf: 'center',
        marginBottom: 12,
        fontSize: 16,
        borderRadius: 100,
        paddingLeft: 10,
        paddingRight: 8,
        borderColor: '#00E676',
        borderWidth: 2,
      }
    })
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
    marginTop: 8,
    textAlign: 'center',
    color: 'grey',
  },
  followers: {
    marginTop: 8,
    color: 'grey',
  },
  followerss: {
    marginTop: 8,
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
    marginBottom: 8,
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
  camera: {
    width: 25,
    height: 18,
    marginLeft: 12,
    marginBottom: 12,
    backgroundColor: 'rgba(0,0,0,0.3)',
    tintColor: '#fff',
  },
});

module.exports = styles;

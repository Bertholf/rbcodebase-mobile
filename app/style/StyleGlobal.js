import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginLeft: 20,
    marginRight: 20,
  },
  pickerstyle: {
    ...Platform.select({
      ios: {
        width: 130,
        justifyContent: 'center',
        alignSelf: 'center',
      },
      android: {
        width: 115,
        justifyContent: 'center',
      },
    }),
  },
  picker: {
    ...Platform.select({
      ios: {
        maxHeight: 20,
      },
      android: {
        maxHeight: 14,
      },
    }),
  },
  logo: {
    marginTop: 16,
    height: 300 * 0.33,
    width: 300 * 0.33,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderColor: '#000000',
    marginBottom: 30,
  },
  // ================== //
  // Style Adpreference //
  // ================== //
  styleView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    borderColor: '#2196F3',
    borderWidth: 0.8,
    borderRadius: 3,
    height: 40,
    alignItems: 'center',
    marginBottom: 6,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },

  textPreference: {
    color: '#000000',
    fontSize: 14,
    marginLeft: 10,
  },
  // -------end style ---------

  // ------ Styles Edit Birthday ------------ //
  styleViewEditBirthday: {
    marginTop: 10,
    flexDirection: 'row',
    paddingLeft: 15,
    backgroundColor: '#ffffff',
    borderColor: '#2196F3',
    borderWidth: 0.8,
    borderRadius: 2,
    justifyContent: 'space-between',
    marginBottom: 8,
    height: 50,
  },
  textEditBirthday: {
    color: '#000000',
    fontSize: 13,
  },
  // ---------end----------//

  // ---------Styles Gender Edit-------------
  genderRow: {
    paddingTop: 50,
    paddingBottom: 90,
    width: width * 0.91,
    height: 65,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 7,
    marginLeft: 13,
    marginRight: 13,
  },
  btnGender: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderRadius: 2,
    height: 80,
    width: width * 0.85 / 2,
    borderWidth: 1,
    borderColor: 'silver',
  },
  OuterView: {
    flexDirection: 'column',
    flex: 1,
  },
  imgGender: {
    height: 80,
    width: 80,
    marginRight: 10,
  },
  active: {
    borderWidth: 2,
    borderColor: '#2196F3',
  },
  active2: {
    borderWidth: 2,
    borderColor: '#f2003d',
  },
  // --------end-------------

  // -------styles Mobile Phone ------------
  container: {
    padding: 16,
    flex: 1,
    marginTop: 5,
  },
  textinputWrapperStyle: {
    borderColor: '#2196F3',
    borderWidth: 0.8,
    borderRadius: 2,
    flexDirection: 'column',
    paddingLeft: 4,
    paddingRight: 4,
    marginBottom: 10,
    height: 55,
  },
  textinputStyle: {
    height: 55,
  },
  loginInput: {
    height: 50,
    marginTop: 10,
    padding: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 0,
    color: '#48BBEC',
  },
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 2,
    elevation: 2,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },

  // --------------------end---------------

  logoGoogle: {
    height: 24,
    width: 32,
    ...Platform.select({
      ios: {
        tintColor: '#fff',
        alignSelf: 'stretch',
        justifyContent: 'center',
        marginRight: -5,
        marginLeft: 12,
      },
      android: {
        tintColor: '#fff',
        alignSelf: 'stretch',
        justifyContent: 'center',
        borderRadius: 48,
        marginRight: -5,
        marginLeft: 12,
      },
    }),
  },
  facebookLogo: {
    height: 30,
    width: 30,
    borderRadius: 7,
    marginLeft: 7,
    justifyContent: 'center',
  },
  logoTwitter: {
    tintColor: '#fff',
    height: 24,
    width: 24,
    marginLeft: 15,
  },
  otherlog: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  buttonEmail: {
    height: 50,
    width: 320,
    borderColor: '#01579b',
    backgroundColor: '#01579b',
    alignSelf: 'stretch',
    justifyContent: 'center',
    elevation: 2,
  },
  buttonTwitter: {
    height: 50,
    width: 320,
    backgroundColor: '#55acee',
    borderColor: '#55acee',
    borderWidth: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    elevation: 2,
  },
  buttonFacebook: {
    height: 50,
    width: 320,
    backgroundColor: '#3b5998',
    borderColor: '#3b5998',
    borderWidth: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    elevation: 2,
  },
  buttonGoogle: {
    height: 50,
    width: 320,
    backgroundColor: '#DC4A38',
    borderColor: '#DC4A38',
    borderWidth: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    elevation: 2,
  },
  icon: {
    height: 30,
    width: 30,
    marginLeft: 12,
  },
  text: {
    fontSize: 18,
    color: 'white',
    marginLeft: 20,
  },
  textfb: {
    fontSize: 18,
    color: 'white',
    marginLeft: 22,
  },
  texttw: {
    fontSize: 18,
    color: 'white',
    marginLeft: 21,
  },
  textInput: {
    height: 40,
    borderWidth: 0.5,
    borderRadius: 2,
    paddingLeft: 15,
    paddingRight: 15,
    borderColor: '#2196f3',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
  button: {
    height: 36,
    backgroundColor: '#039be5',
    borderColor: '#0288d1',
    borderWidth: 1,
    borderRadius: 3,
    marginTop: 15,
    marginBottom: 5,
    elevation: 2,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  invalid: {
    color: 'red',
    fontSize: 15,
    alignSelf: 'center',
  },
  topContent: {
    flex: 12,
    width,
    padding: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    borderRadius: 50,
  },
  imageresult: {
    height: 200,
    width: 200,
  },
  name: {
    fontSize: 25,
    marginTop: 40,
  },
  email: {
    fontSize: 15,
  },
  layoutborder: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
  borderright: {
    borderWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.5)',
    width: 145,
    height: 1,
    marginLeft: 5,
    marginRight: 5,
  },
  scrollContent: {
    flex: 3,
    marginLeft: 16,
    marginRight: 16,
    paddingTop: 10,
    paddingLeft: 14,
    paddingRight: 14,
  },
  textinputStyle: {
    fontSize: 16,
    color: 'black',
    width: 0.75 * width,
    height: 40,
  },
  textcustomfield: {
    fontSize: 28,
    color: 'black',
    width: 0.75 * width,
    height: 40,
  },
  textinputWrapperStyle: {
    borderColor: '#2196F3',
    borderWidth: 0.8,
    borderRadius: 2,
    flexDirection: 'column',
    paddingLeft: 16,
    paddingRight: 8,
    marginBottom: 6,
    marginTop: 6,
  },
  textWrapperStyle: {
    borderColor: '#2196F3',
    flexDirection: 'column',
    paddingLeft: 16,
    paddingRight: 8,
    marginBottom: 6,
    marginTop: 6,
  },
  btnReg: {
    backgroundColor: '#2196F3',
    borderRadius: 2,
    elevation: 2,
    paddingTop: 10,
    paddingBottom: 10,
    height: 50,
    marginBottom: 40,
    marginRight: 16,
    marginLeft: 16,
  },
  textReg: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  line: {
    borderBottomWidth: 0.8,
    borderColor: 'black',
    marginTop: 20,
    marginBottom: 20,
  },
  fail: {
    color: '#ff0000',
    alignSelf: 'flex-start',
  },
  acceptImg: {
    height: 20,
    width: 20,
    marginTop: 10,
    marginLeft: -40,
  },
  policyStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  errBox: {
    margin: 10,
    borderRadius: 6,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,0,0,0.7)',
    width: 0.75 * width,
    height: 60,
    padding: 10,
  },
  genderStyle: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderColor: '#2196F3',
    borderWidth: 0.8,
    borderRadius: 2,
    paddingLeft: 16,
    paddingRight: 8,
    marginBottom: 6,
    marginTop: 6,
    height: 40,
  },
  box: {
    marginTop: 70,
    width: width * 0.9,
  },
  title: {
    alignItems: 'center',
    top: 20,
    marginBottom: 10,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  textchangPass: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  new_password: {
    marginTop: 20,
    color: '#2196f3',
  },
  button_save: {
    backgroundColor: '#2196F3',
    padding: 10,
    marginTop: 50,
    borderRadius: 5,
    alignItems: 'center',
    width: width * 0.5,
  },
  middle_line: {
    borderWidth: 0.4,
    borderColor: 'grey',
    width: width * 0.2,
    height: 0.5,
  },
  containerpolicy: {
    flex: 1,
    backgroundColor: '#fff',
  },
  viewPolicy: {
    flexDirection: 'row',
    marginBottom: 10,
    padding: 10,
  },
  onpressPolicy: {
    marginRight: 10,
    width: 30,
    height: 30,
  },
  imagePolicy: {
    resizeMode: 'cover',
    width: 30,
    height: 30,
  },
  titleAccount: {
    fontSize: 13,
    paddingLeft: 10,
    paddingRight: 10,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 0.5,
    borderColor: '#2196f3',
    paddingBottom: 10,
  },
  nameAccount: {
    fontSize: 22,
    marginBottom: 3,
    color: '#2196f3',
  },
  iconAccount: {
    width: 25,
    height: 25,
  },
  searchRow: {
    flexDirection: 'row',
    flex: 1,
  },
  searchText: {
    flex: 7,
  },
  searchBtn: {
    flex: 3,
    backgroundColor: '#2196F3',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 5,
    margin: 5,
  },
  listView: {
    flex: 9,
  },
  Indicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewWait: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  textWait: {
    color: '#000',
    fontSize: 15,
    alignItems: 'center',
  },
  onButtonSearchFriend: {
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#313bf9',
    margin: 10,
    padding: 10,
    height: 50,
    width: 120,
  },
  containerApproval: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  containerFollow: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#ffffff',
    borderColor: '#9E9E9E',
    borderWidth: 0.3,
  },
  account: {
    paddingLeft: 10,
  },
  user: {
    marginLeft: 3,
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },
  photo: {
    width: 40,
    height: 40,
    marginLeft: 2,
    marginTop: 6,
    marginBottom: 6,
    borderRadius: 50,
  },
  detail: {
    fontSize: 11,
    color: 'grey',
    marginRight: 5,
    marginLeft: 3,
  },
  buttonFollow: {
    flexDirection: 'row',
    padding: 6,
    backgroundColor: '#2196F3',
    justifyContent: 'space-between',
    color: 'white',
    alignItems: 'center',
    marginTop: 7,
    borderRadius: 2,
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
  time: {
    fontSize: 12,
    color: '#f5f5f5',
    fontWeight: 'bold',
  },
  card: {
    height: 35,
    width: 35,
    borderRadius: 50,
    marginTop: 25,
  },
  nama1: {
    color: 'black',
    margin: 5,
    fontWeight: 'bold',
    fontSize: 10,
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    margin: 20,
  },
});
export default styles;

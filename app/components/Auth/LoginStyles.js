import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
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
    marginBottom: 30
  },
  logoTwitter:{
    tintColor: '#fff',
    height: 24,
    width: 24,
    marginLeft: 10,
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
    backgroundColor: '#4099FF',
    alignSelf: 'stretch',
    justifyContent: 'center',
    elevation: 2,
  },
  buttonTwitter: {
    height: 50,
    width: 320,
    backgroundColor: '#4099FF',
    borderColor: '#4099FF',
    borderWidth: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    elevation: 2,
    tintColor : 'white'
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
  buttonGroup: {
    top: 10,
    width: width * 0.6,
  },
  icon: {
    height: 24,
    width: 24,
    marginLeft: 10,
  },
  picker: {
    height: 50,
    width: width * 0.9,
    borderBottomWidth: 1,
    borderColor: '#f0f0f0',
  },
  imgGender: {
    height: 40,
    width: 40,
    marginRight: 10,
  },
  text: {
    fontSize: 18,
    color: 'white',
    marginLeft: 10,
  },
  separatorText:{
    marginTop: 20,
    marginBottom: 20,
    fontSize: 20,
  }
});

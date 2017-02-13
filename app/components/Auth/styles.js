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
  },
  otherlog: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginTop: 5,
    marginBottom: 5,
  },
  buttonEmail: {
    flexDirection: 'row',
    padding: 10,
    height: 50,
    backgroundColor: '#4099FF',
    marginBottom: 5,
  },
  buttonTwitter: {
    flexDirection: 'row',
    padding: 10,
    height: 50,
    backgroundColor: '#4099FF',
    marginBottom: 5,
  },
  buttonFacebook: {
    flexDirection: 'row',
    padding: 10,
    height: 50,
    backgroundColor: '#3b5998',
    marginBottom: 5,
  },
  buttonGoogle: {
    flexDirection: 'row',
    padding: 10,
    height: 50,
    backgroundColor: '#dd4b39',
    marginBottom: 5,
  },
  buttonGroup: {
    top: 10,
    width: width * 0.6,
  },
  icon: {
    height: 50,
    width: 50,
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

});
export default styles;

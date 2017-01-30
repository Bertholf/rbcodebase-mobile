import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  logo: {
    margin: 20,
    height: 100,
    width: 100,
  },
  textInput: {
    width: width * 0.9,
    height: 50,
    bottom: 10,
  },
  btnReg: {
    width: width * 0.9,
    height: 50,
    backgroundColor: '#1565c0',
    padding: 8,
    borderRadius: 3,
    elevation: 3,
  },
  textReg: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
  },
  buttonGroup: {
    top: 10,
    width: width * 0.6,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    height: 50,
    width: 50,
    alignSelf: 'stretch',
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: '#f0f0f0',
  },
  separatorText: {
    fontSize: 15,
  },
  picker: {
    height: 50,
    width: width * 0.9,
    borderBottomWidth: 1,
    borderColor: '#f0f0f0',
  },
  genderRow: {
    width: width * 0.9,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 7,
  },
  btnGender: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    height: 55,
    width: (width * 0.85) / 2,
    borderWidth: 1,
    borderColor: 'gray',
  },
  imgGender: {
    height: 40,
    width: 40,
    marginRight: 10,
  },
  active: {
    borderWidth: 2,
    borderColor: '#1565c0',
  },
});
export default styles;

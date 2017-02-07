import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    padding: 20,
    flex: 1,
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
  textInput: {
    // // width: width * 0.8,
    // height: 50,
    bottom: 10,
    color: '#2196F3',
  },
  btnReg: {
    backgroundColor: '#2196F3',
    borderRadius: 2,
    elevation: 2,
  },
  textReg: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    paddingBottom:8,
    paddingTop: 8,
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
    marginRight: 20 * 0.5,
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: '#f0f0f0',
  },
  separatorText: {
    fontSize: 15,
    color: 'white',
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
    borderRadius: 2,
    height: 55,
    width: (width * 0.85) / 2,
    borderWidth: 1,
    borderColor: 'silver',
  },
  imgGender: {
    height: 40,
    width: 40,
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
  wrong: {
    color: '#ff0000',
    alignSelf: 'flex-start',
  },
});
export default styles;

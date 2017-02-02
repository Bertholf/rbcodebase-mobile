import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  borderTextT: {
    marginTop: 25,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  styleBackground: {
    flex: 1,
    backgroundColor: 'aliceblue',
  },
  styleText: {
    color: '#2196F3',
    fontSize: 14,
    alignSelf: 'center',
    borderColor: 'black',
    marginLeft: 15,
  },
  styleText2: {
    color: '#08bcde',
    fontSize: 14,
    marginTop: 35,
  },
  icon: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginTop: 20,
  },
  viewBaru: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  pickerStyle: {
    width: 80,
    height: 20,
    margin: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 20,
  },
  saveButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2196F3',
    height: 36,
    width: 100,
    borderRadius: 2,
  },
  txtButton: {
    fontSize: 20,
    fontWeight: '100',
    color: 'white',
  },
});
module.exports = styles;

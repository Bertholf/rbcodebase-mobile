import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  borderTextT: {
    marginTop : 25,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  styleBackground: {
    flex: 1,
    marginTop: 50,
    backgroundColor: 'aliceblue',
  },
  styleText: {
    color: '#08bcde',
    fontSize: 14,
    alignSelf: 'center',
    borderColor: 'black'
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
  viewBaru:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  pickerStyle:{
    width: 80,
    height: 20,
    margin: 5,
  }
});
module.exports = styles;

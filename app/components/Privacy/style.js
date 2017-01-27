import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  borderTextT: {
    borderWidth: 8,
    borderColor: 'white',
    marginTop : 20,
  },
  styleBackground: {
    flex: 1,
    marginTop: 20,
    backgroundColor: 'aliceblue',
    padding: 30,
  },
  styleText: {
    color: '#08bcde',
    fontSize: 20,
    borderWidth: 4,
    borderColor: 'white',
    marginTop: 20,
    justifyContent: 'center',
    textAlign: 'center',
  },
  sinopsis: {
    paddingLeft: 5
  },
  conteiner:{
    flex: 1,
    flexDirection: 'column',
  },
  textCenter: {
    color: '#08bcde',
    fontSize: 20,
    marginTop: 20,
    justifyContent : 'center',
    textAlign: 'center',
  },
});
module.exports = styles;

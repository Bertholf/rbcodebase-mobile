import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    marginTop:0,
    flexDirection:'row',
    flex:1,
    paddingRight:20,
    marginTop :5,
  },
  comment: {
    flex:2,
    paddingTop: 0,
    borderWidth: 1,
    fontFamily:'sans-serif-medium',
    paddingBottom: 0,
    marginRight:5,
    height: 30,
  },
  Button:{
    flex:1,
    padding: 5,
    borderWidth: 1,
    borderColor: '#fff',
    color:'#fff',
    textAlign :'center',
    backgroundColor: '#2196F3',
    fontFamily:'sans-serif-medium',
    fontSize: 15,
    fontWeight: 'bold',
  }
})

export default styles;

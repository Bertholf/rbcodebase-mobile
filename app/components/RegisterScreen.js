import React,{Component} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';

var {width,height} = Dimensions.get('window');

export default class RegisterScreen extends Component{
  constructor(props){
    super(props);
    this.state={
      name:'',
      phone:'',
      email:'',
    }
  }
  pressed(){
    Alert.alert("button pressed");
  }
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={this.pressed} >
          <Image style={styles.backButton} source={require('../image/back.png')}/>
        </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <Image
            source={require('../image/user.png')}
            style={{
              height:100,
              width:100,
            }}
          />
          <TextInput
            placeholder="Name"
            style={styles.input}
            onChangeText={(name) => this.setState({name})}
          />
          <TextInput
            placeholder="Phone"
            style={styles.input}
            onChangeText={(phone) => this.setState({phone})}
          />
          <TextInput
            placeholder="Email"
            style={styles.input}
            onChangeText={(email) => this.setState({email})}
          />
          <TouchableHighlight style={styles.button} onPress={this.pressed} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.pressed} underlayColor='#99d9f4'>
            <Text style={{fontSize:20,color:"#009688"}}>Agreement</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    height:height,
    width:width,
  },
  header:{
    flex:1,
    height:60,
    width:width,
    height:60,
    justifyContent:'center',
    backgroundColor:'#fff',
  },
  backButton:{
    height:50,
    width:50,
  },
  content:{
    flex:6,
    backgroundColor:"#fff",
    justifyContent:'center',
    alignItems:'center',
  },
  image:{
    width:50,
    height:50,
  },
  input :{
    width:width*0.9,
    height:50,
  },
  buttonText: {
   fontSize: 18,
   color: 'white',
   alignSelf: 'center'
 },
 button: {
   height: 40,
   width:width*0.9,
   backgroundColor: '#009688',
   borderColor: '#009688',
   borderWidth: 1,
   borderRadius: 3,
   marginBottom: 10,
   alignSelf: 'center',
   justifyContent: 'center'
 },
});

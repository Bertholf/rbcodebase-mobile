import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
  TouchableHighlight,
  Alert
} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Deactivate extends Component{
  render(){
    return(
        <View style={styles.container}>
          <View style={styles.box}>
            <Text style={styles.title}>Are You Sure?</Text>
            <Text style={{textAlign: 'center', margin:20}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            <TouchableOpacity activeOpacity={0.5} style={styles.deactivate}
                              onPress={() => Alert.alert('Permission',
                                       'Are You Sure',[
                                        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                        {text: 'Yes', onPress: () => console.log('OK Pressed')},
              ])}>
              <Text style={{color: 'white'}}>Deactivate</Text>
            </TouchableOpacity>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    color: '#2196F3',
    marginBottom: 10
  },
  box: {
    marginTop: 70,
    alignItems: 'center',
    justifyContent: 'center',
    width: 300
  },
  deactivate: {
    backgroundColor: '#2196F3',
    alignSelf: 'stretch',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center'
  }
})

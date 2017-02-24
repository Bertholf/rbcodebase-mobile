import React, { Component } from 'react';
import {
   Text,
   View,
   TextInput,
   TouchableOpacity,
   StyleSheet,
   Alert,
 } from 'react-native';
import saveProfile from '../../services/updateProfile';
import NavigationBar from 'react-native-navbar';
import IconClose from './../../layouts/IconClose';
import {Actions} from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    marginTop: 50,
  },
  textinputWrapperStyle: {
    borderColor: '#2196F3',
    borderWidth: 0.8,
    borderRadius: 2,
    flexDirection: 'column',
    paddingLeft: 4,
    paddingRight: 4,
    marginBottom: 10,
    marginTop: 10,
    height: 40,
  },
  loginInput: {
    height: 50,
    marginTop: 10,
    padding: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 0,
    color: '#48BBEC',
  },
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 2,
    elevation: 2,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
});

export default class MobilePhone extends Component {
  onChanged(text) {
    let newText = '';
    const numbers = '^[0-9]';

    for (let i=0; i < text.length; i++) {
      if (numbers.indexOf(text[i] >-1)) {
          newText = newText + text[i];
      }
      this.setState({ myNumber: newText });
    }
  }
  render() {
    const rightButtonConfig = {
    title: 'Save',
    handler: () => alert('successfully!'),
  };
    const leftButtonConfig = {
    title: 'Cancel',
    handler: () => Actions.pop(),
  };

  const titleConfig = {
    title: 'Edit Phone',
  };
    const savePhone = () => {
      const mNumber = this.state.myNumber;
      console.log(mNumber);
      saveProfile(mNumber);
      Alert.alert('Success', 'Your Phone Number has been Changed');
    };
    return (
      <View>
      <View style={{ backgroundColor: '#f0f0f0', borderColor: '#c0c0c0', borderBottomWidth: 2}}>
        <NavigationBar
          title={titleConfig}
          rightButton={rightButtonConfig}
          leftButton={<IconClose onPress={Actions.pop} />}/>
      </View>
      <View style={styles.container}>
        <Text style={styles.heading}></Text>
        <View style={styles.textinputWrapperStyle}>
          <TextInput
            placeholder="Old Phone Number"
            placeholderTextColor="silver"
            selectionColor="silver"
            underlineColorAndroid="rgba(0,0,0,0)"
            style={styles.textinputStyle}
            keyboardType="numeric"
            onChangeText={text => this.onChanged(text)}
            maxLength={12}
            />
        </View>
        <View style={styles.textinputWrapperStyle}>
          <TextInput
            placeholder=" New Phone Number"
            placeholderTextColor="silver"
            selectionColor="silver"
            underlineColorAndroid="rgba(0,0,0,0)"
            style={styles.textinputStyle}
            keyboardType="numeric"
            onChangeText={text => this.onChanged(text)}
            maxLength={12}
            />
        </View>
      </View>
      </View>
       );
     }
}

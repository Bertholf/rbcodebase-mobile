import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image,
  Text,
  Alert,
  Picker,
} from 'react-native';

const { width, height } = Dimensions.get('window');
const logo = require('./../../images/RegisterScreen/user.png');
const google = require('./../../images/google-plus.png');
const facebook = require('./../../images/facebook.png');
const twitter = require('./../../images/twitter.png');

const styles = StyleSheet.create({
  container: {
    width,
    height,
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
    backgroundColor: '#2196f3',
    padding: 8,
    borderRadius: 3,
    bottom: 10,
  },
  textReg: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
  },
  buttonGroup: {
    top: 10,
    width: width * 0.8,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    height: 50,
    width: 50,
    alignSelf: 'stretch',
  },
  separatorText: {
    fontSize: 18,
  },
  picker: {
    height: 50,
    width: width * 0.9,
    borderBottomWidth: 1,
    borderColor: '#f0f0f0',
  },

});

const Register = () => {
  // dummy button action
  const register = () => {
    Alert.alert('Button pressed');
  };
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <TextInput
        placeholder={'Name'}
        style={styles.textInput}
        onChangeText={name => console.log({ name })}
      />
      <TextInput
        placeholder={'Email'}
        style={styles.textInput}
        onChangeText={email => console.log({ email })}
      />
      <TextInput
        placeholder={'Username'}
        style={styles.textInput}
        onChangeText={username => console.log({ username })}
      />
      <View style={{ alignItems: 'flex-start', width: width * 0.87, height: 20 }} >
        <Text>Gender</Text>
      </View>
      <Picker
        style={styles.picker}
        selectedValue={''}
        onValueChange={gender => console.log({ gender })}
      >
        <Picker.Item label={'Male'} value={'male'} />
        <Picker.Item label={'Female'} value={'female'} />
      </Picker>
      <TextInput
        placeholder={'Password'}
        style={styles.textInput}
        onChangeText={password => console.log({ password })}
      />
      <TouchableOpacity
        style={styles.btnReg}
        onPress={register}
      >
        <Text style={styles.textReg}>Register</Text>
      </TouchableOpacity>
      <Text style={styles.separatorText}>Register with:</Text>
      <View style={styles.buttonGroup}>
        <TouchableOpacity onPress={register} >
          <Image source={google} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={register} >
          <Image source={facebook} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={register}>
          <Image source={twitter} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;

import React from 'react';
import {
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image,
  Text,
  Alert,
  Picker,
} from 'react-native';

const { width } = Dimensions.get('window');
const logo = require('./../../images/RegisterScreen/user.png');
const google = require('./../../images/google-plus.png');
const facebook = require('./../../images/facebook.png');
const twitter = require('./../../images/twitter.png');
const male = require('./../../images/male.png');
const female = require('./../../images/female.png');

const styles = StyleSheet.create({
  container: {
    width,
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
    shadowOffset: { width: 15, height: 15 },
    shadowColor: '#000',
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
    justifyContent: 'flex-start',
    marginBottom: 7,
  },
  btnGender: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 55,
    width: 55,
    marginRight: 10,
    borderWidth: 1,
  },
  imgGender: {
    height: 40,
    width: 40,
  },
});

const Register = () => {
  // dummy button action
  const register = () => {
    Alert.alert('Button pressed');
  };
  let selected = false;
  return (
    <ScrollView>
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
        <TextInput
          placeholder={'Password'}
          style={styles.textInput}
          onChangeText={password => console.log({ password })}
        />
        <View style={{ alignItems: 'flex-start', width: width * 0.87, height: 20 }} >
          <Text>Gender</Text>
        </View>
        <View style={styles.genderRow} >
          <TouchableOpacity style={styles.btnGender} >
            <Image source={male} style={styles.imgGender} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnGender}>
            <Image source={female} style={styles.imgGender} />
          </TouchableOpacity>
        </View>
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
    </ScrollView>
  );
};

export default Register;

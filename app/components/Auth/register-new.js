import React, { Component } from 'react';
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
    backgroundColor: '#1565c0',
    padding: 8,
    borderRadius: 3,
    elevation: 3,
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
    justifyContent: 'space-between',
    marginBottom: 7,
  },
  btnGender: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 55,
    width: (width * 0.85) / 2,
  },
  imgGender: {
    height: 40,
    width: 40,
    marginRight: 10,
  },
  active: {
    borderWidth: 2,
    borderColor: '#1565c0',
  },
});

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectMale: true,
      selectFemale: false,
    };
  }
  // dummy button action
  register() {
    Alert.alert('Button pressed');
  }
  render(){
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
            secureTextEntry={true}
            onChangeText={password => console.log({ password })}
          />
          <View style={{ alignItems: 'flex-start', width: width * 0.87, height: 20 }} >
            <Text>Gender</Text>
          </View>
          <View style={styles.genderRow} >
            <TouchableOpacity
              style={[styles.btnGender, this.state.selectMale && styles.active]}
              onPress={() => this.setState({selectMale: !this.state.selectMale, selectFemale: !this.state.selectFemale})}
            >
              <Image source={male} style={styles.imgGender} />
              <Text>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btnGender, this.state.selectFemale && styles.active]}
              onPress={() => this.setState({selectMale: !this.state.selectMale, selectFemale: !this.state.selectFemale})}
            >
              <Image source={female} style={styles.imgGender} />
              <Text>Female</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.btnReg} onPress={() => this.register()} >
            <Text style={styles.textReg}>Register</Text>
          </TouchableOpacity>

          <View style={{ alignItems: 'center', top: 10, marginBottom: 10, justifyContent: 'space-between', flexDirection: 'row' }}>
            <View style={{ borderWidth: 1, borderColor: 'grey', width: 140, height: 1, marginLeft: 5 }} />
            <Text style={{ width: 20, marginRight: 5, marginLeft: 5, top: -7 }}> OR </Text>
            <View style={{ borderWidth: 1, borderColor: 'grey', width: 140, height: 1, marginRight: 5 }} />
          </View>

          <Text style={styles.separatorText}>Register with:</Text>
          <View style={styles.buttonGroup}>
            <TouchableOpacity onPress={() => this.register()} >
              <Image source={google} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.register()} >
              <Image source={facebook} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.register()}>
              <Image source={twitter} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
};

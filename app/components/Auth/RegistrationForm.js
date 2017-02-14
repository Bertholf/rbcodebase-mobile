import React, { Component } from 'react';
import {
     View,
     Text,
     Dimensions,
     TouchableOpacity,
     Image,
     TextInput,
     ScrollView,
     StyleSheet,
     ActivityIndicator,
} from 'react-native';
import { Actions } from 'react-native-router-flux';


const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  textinputStyle: {
    fontSize: 16,
    color: '#2196f3',
    width: 0.75 * width,
  },
  textinputWrapperStyle: {
    borderColor: '#2196F3',
    borderWidth: 0.8,
    borderRadius: 6,
    flexDirection: 'column',
    paddingLeft: 16,
    paddingRight: 8,
    marginBottom: 6,
    marginTop: 6,
  },
  btnReg: {
    backgroundColor: '#2196F3',
    borderRadius: 2,
    elevation: 2,
    paddingTop: 10,
    paddingBottom: 16,
    height: 50,
    marginBottom: 40,
  },
  textReg: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  line: {
    borderBottomWidth: 0.8,
    borderColor: 'silver',
    marginTop: 20,
    marginBottom: 20,
  },
  fail: {
    color: '#ff0000',
    alignSelf: 'flex-start',
  },
  acceptImg: {
    height: 30,
    width: 30,
    marginTop: 20,
    marginRight: 20,
  },
  policyStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
});

export default class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      availableUser: true,
      app: 'RBCodeBase'
    };
  }
  render() {
    return (
      <View style={{ flex: 1 }} >
        <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: 20 }} >
          <TouchableOpacity onPress={Actions.register}>
            <Image source={require('../../images/backbuttonblue.png')} style={{ width: 50, height: 50 }} />
          </TouchableOpacity>
          <Text style={{ fontSize: 24, color: '#2196F3', fontWeight: 'bold', paddingTop: 8 }}>Register</Text>
        </View>
        <ScrollView>
          <View style={{ flex: 3, marginLeft: 16, marginRight: 16,  }} >
            <View style={styles.textinputWrapperStyle}>
              <TextInput
                placeholder="First Name"
                placeholderTextColor="silver"
                selectionColor="silver"
                underlineColorAndroid="rgba(0,0,0,0)"
                style={styles.textinputStyle}
                value={this.props.firstName ? this.props.firstName : ''}
              />
            </View>
            <View style={styles.textinputWrapperStyle}>
              <TextInput
                placeholder="Last Name"
                placeholderTextColor="silver"
                selectionColor="silver"
                underlineColorAndroid="rgba(0,0,0,0)"
                style={styles.textinputStyle}
              />
            </View>
            <View style={styles.line} />
            <View style={[styles.textinputWrapperStyle, { flexDirection: 'row', justifyContent: 'space-between' }]}>
              <TextInput
                placeholder="Username"
                placeholderTextColor="silver"
                selectionColor="silver"
                underlineColorAndroid="rgba(0,0,0,0)"
                style={styles.textinputStyle}
                value={this.props.username ? this.props.username : ''}
              />
              {this.state.availableUser === true ? (<Image source={require('../../images/accept.png')} style={styles.acceptImg} />)
              : (<Image source={require('../../images/wrong.png')} style={styles.acceptImg} />)
              }
            </View>
            {this.state.availableUser === true ? (<Text style={styles.fail}>
              Yes! The username @entry is available</Text>) : (<Text />)
            }
            <View style={styles.textinputWrapperStyle}>
              <TextInput
                placeholder="Email"
                placeholderTextColor="silver"
                selectionColor="silver"
                underlineColorAndroid="rgba(0,0,0,0)"
                style={styles.textinputStyle}
              />
            </View>
            <View style={styles.textinputWrapperStyle}>
              <TextInput
                placeholder="Password"
                placeholderTextColor="silver"
                selectionColor="silver"
                underlineColorAndroid="rgba(0,0,0,0)"
                style={styles.textinputStyle}
                secureTextEntry
              />
            </View>
            <View style={styles.textinputWrapperStyle}>
              <TextInput
                placeholder="Confirm Password"
                placeholderTextColor="silver"
                selectionColor="silver"
                underlineColorAndroid="rgba(0,0,0,0)"
                style={styles.textinputStyle}
                secureTextEntry
              />
            </View>
            <View style={styles.line} />
            <View style={styles.textinputWrapperStyle}>
              <TextInput
                placeholder="{{ custom field }}"
                placeholderTextColor="silver"
                selectionColor="silver"
                underlineColorAndroid="rgba(0,0,0,0)"
                style={styles.textinputStyle}
              />
            </View>
            <View style={styles.textinputWrapperStyle}>
              <TextInput
                placeholder="{{ custom field }}"
                placeholderTextColor="silver"
                selectionColor="silver"
                underlineColorAndroid="rgba(0,0,0,0)"
                style={styles.textinputStyle}
              />
            </View>
          </View>
          <View style={styles.line} />
          <View style={styles.btnReg} >
            <Text style={styles.textReg} >
              Register
            </Text>
          </View>
          <View style={styles.policyStyle} >
            <Text>
              By registering, you agree to {this.state.app}
            </Text>
          </View>
          <View style={[styles.policyStyle, { justifyContent: 'space-between', flex: 1, marginBottom: 10 }]}>
            <TouchableOpacity onPress={Actions.tos}>
              <Text style={{ color: '#01579B', borderBottomWidth: 0.5, borderColor: '#01579B' }}>
                Terms of Use
              </Text>
            </TouchableOpacity>
            <Text>  </Text>
            <Text>
              and
            </Text>
            <Text>  </Text>
            <TouchableOpacity onPress={Actions.pp}>
              <Text style={{ color: '#01579B', borderBottomWidth: 0.5, borderColor: '#01579B' }}>
                Privacy Policy
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

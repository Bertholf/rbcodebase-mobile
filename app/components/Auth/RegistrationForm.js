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
     Alert,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import registerService from '../../services/AuthRegistration'


const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  textinputStyle: {
    fontSize: 16,
    color: '#2196f3',
    width: 0.75 * width,
    height: 60,
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
    paddingBottom: 10,
    height: 50,
    marginBottom: 40,
    marginRight: 16,
    marginLeft: 16,
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
    marginTop: 15,
    marginLeft: -40,
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
      availableUser: false,
      app: 'RBCodeBase',
      // name_first: this.props.firstName,
      // name_last: this.props.lastName,
      // email: this.props.email
      name_first: '',
      name_last: '',
      email: '',
      name_slug: '',
      password: '',
      password_confirmation: '',
      valid: false,
    };
  }
  submitRegister() {
    this.props
  }
  render() {

    return (
      <View style={styles.container} >
        <ScrollView>
          <View style={{ flex: 3, marginLeft: 16, marginRight: 16 }} >
            <View style={styles.textinputWrapperStyle}>
              <TextInput
                placeholder="First Name"
                placeholderTextColor="silver"
                selectionColor="silver"
                underlineColorAndroid="rgba(0,0,0,0)"
                style={styles.textinputStyle}
                onChangeText={name_first => this.setState({ name_first })}
                value={this.state.name_first}
              />
            </View>

            <View style={styles.textinputWrapperStyle}>
              <TextInput
                placeholder="Last Name"
                placeholderTextColor="silver"
                selectionColor="silver"
                underlineColorAndroid="rgba(0,0,0,0)"
                style={styles.textinputStyle}
                editable
                onChangeText={name_last => this.setState({ name_last })}
                value={this.state.name_last}
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
                onChangeText={name_slug => this.setState({ name_slug })}
                value={this.state.name_slug}
                editable
              />
                          </View>

            <View style={styles.textinputWrapperStyle}>
              <TextInput
                placeholder="Email"
                placeholderTextColor="silver"
                selectionColor="silver"
                underlineColorAndroid="rgba(0,0,0,0)"
                style={styles.textinputStyle}
                editable
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
              />
            </View>

            <View style={styles.textinputWrapperStyle}>
              <TextInput
                placeholder="Password"
                placeholderTextColor="silver"
                selectionColor="silver"
                underlineColorAndroid="rgba(0,0,0,0)"
                style={styles.textinputStyle}
                onChangeText={password => this.setState({ password })}
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
                onChangeText={password_confirmation => this.setState({ password_confirmation })}
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
          <TouchableOpacity onPress= {() => registerService(this.state.name_first, this.state.name_last, this.state.name_slug, this.state.email,this.state.password, this.state.password_confirmation, )}>
            <View style={styles.btnReg} >
              <Text style={styles.textReg} >
                Register
              </Text>
            </View>
          </TouchableOpacity>
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

//componets/auth/

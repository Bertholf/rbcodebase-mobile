import React, { Component } from 'react';
import {
  Picker,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import auth from './../../services/auth';

export default class AdPreference extends Component {
  constructor(props) {
    super(props)
    this.state = {
      adprefe: {},
      partner: 'choose partner',
      selected1: 'key1',
      selected2: 'key1',
      selected3: 'key1',
      data: [
        {status: "all"},
        {status: "everyone"},
        {staus: "none"}
      ]
    };
  }

  componentDidMount() {
    auth.adprefe()
    .then(response => this.setState({ adprefe: response.data }, ()=> console.log(this.state)))
    .catch(Err => console.log('err', Err));
  }

  // dataPrivacy() {
  //   let value;
  //   switch (this.state.adprefe.user_id) {
  //     case 'Everyone':
  //       value = 'Everyone';
  //       break;
  //     case 'All':
  //       value = 'All';
  //       break;
  //     case 'None':
  //       value = 'None';
  //       break;
  //     // default:
  //     //   value = this.state.adprefe.privacy_follow;
  //   }
  // }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ padding: 16 }}>
          <View style={styles.styleView}>
            <View style={{alignSelf: 'center'}}>
              <Text style={styles.text}>Privacy Follow</Text>
            </View>
          </View>
          <Picker
            selectedValue={this.state.language}
            onValueChange={(lang) => this.setState({language: lang})}>
            {this.state.data.map((x) => (
              <Picker.Item label={x.status} value={x.status} />
            ))}
          </Picker>
        </View>
        <View style={{ padding: 16 }}>
          <View style={styles.styleView}>
            <View style={{alignSelf: 'center'}}>
              <Text style={styles.text}>Privacy Comment</Text>
            </View>
          </View>
          <Picker
            selectedValue={this.state.language}
            onValueChange={(lang) => this.setState({language: lang})}>
            {this.state.data.map((x) => (
              <Picker.Item label={x.status} value={x.status} />
            ))}
          </Picker>
        </View>
        <View style={{ padding: 16 }}>
          <View style={styles.styleView}>
            <View style={{alignSelf: 'center'}}>
              <Text style={styles.text}>PrivacyPolicy</Text>
            </View>
          </View>
          <Picker
            selectedValue={this.state.language}
            onValueChange={(lang) => this.setState({language: lang})}>
            {this.state.data.map((x) => (
              <Picker.Item label={x.status} value={x.status} />
            ))}
          </Picker>
        </View>
        <View style={{ marginTop: 20, padding: 14 }}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.titleButton} >Tekan</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  titleButton: {
    fontSize: 15,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 2,
    elevation: 2,
    paddingTop: 14,
    paddingBottom: 14,
    alignItems: 'center',
  },
  styleView: {
    marginTop: 10,
    flexDirection: 'row',
    paddingLeft: 15,
    backgroundColor: '#ffffff',
    borderColor: '#2196F3',
    borderWidth: 0.8,
    borderRadius: 2,
    marginBottom: 8,
    height: 40,
  },
  text: {
    color: '#000000',
    fontSize: 13,
  },
});

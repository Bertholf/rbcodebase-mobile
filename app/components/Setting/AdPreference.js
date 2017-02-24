import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import auth from './../../services/auth';
import CheckBox from 'react-native-checkbox';

export default class AdPreference extends Component {
  constructor(props) {
    super(props)
    this.state = {
      adprefe: {},
    }
  }

  componentDidMount() {
    auth.adprefe()
    .then(response => this.setState({ adprefe: response.data}, ()=> console.log(this.state)))
    .catch(Err => console.log('err', Err));
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', paddingTop: 15, marginLeft: 16, marginRight: 16, justifyContent: 'space-between' }}>
        <View>
          <Text>
            {this.state.adprefe.privacy_follow}
          </Text>
        </View>
        <View>
          <CheckBox
            label={this.state.adprefe.privacy_follow}
            checked={false}
            onChange={(checked) => console.log('I am checked', checked)}
          />
          <CheckBox
            label='All'
            checked={false}
            onChange={(checked) => console.log('I am checked', checked)}
          />
          <CheckBox
            label='No'
            checked={false}
            onChange={(checked) => console.log('I am checked', checked)}
          />
        </View>
      </View>
    );
  }
}

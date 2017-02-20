import React, { Component } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import styles from './ChangeSetting/ChangeStyles';
import auth from './../../services/auth';

export default class ChangeUsername extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
    };
  }
  componentDidMount() {
    auth.profile ()
    .then (response => this.setState({profile:response.data, loading:false}, () => console.log(this.state)))
    .catch(Err=> console.log('err', Err))
  }

  render() {
    return (
      <View style={styles.OuterView}>
        <ScrollView>
          <View style={styles.View1}>
            <Text style={styles.Text2}>
              Your current username
            </Text>
            <TextInput
              style={styles.TextInput1}
              underlineColorAndroid="rgba(0,0,0,0)"
              defaultValue={this.state.profile.name_slug}
              editable={false}
            />
            <Text style={styles.Text2}>
              Enter your new username
            </Text>
            <TextInput
              style={styles.TextInput1}
              underlineColorAndroid={'rgba(0,0,0,0)'}
              placeholderTextColor={'#2196f3'}
              placeholder="New Username"
              onChangeText={currentUsername => this.setState({ currentUsername })}
              multiline={false}
              numberOfLines={4} editable={true}
            />
          </View>
          <Text style={{ marginTop: 10 }}>
            Your username should be unique.
          </Text>
          <Text style={{ marginTop: 10, lineHeight: 20 }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </ScrollView>
        <TouchableOpacity>
          <View style={styles.View2}>
            <Text style={styles.Button}>
              SAVE
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

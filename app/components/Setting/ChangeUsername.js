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
import strings from '../../localizations';

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
              {strings.ChangeUname.txt1}
            </Text>
            <TextInput
              style={styles.TextInput1}
              underlineColorAndroid="rgba(0,0,0,0)"
              defaultValue={this.state.profile.name_slug}
              editable={false}
            />
            <Text style={styles.Text2}>
              {strings.ChangeUname.txt2}
            </Text>
            <TextInput
              style={styles.TextInput1}
              underlineColorAndroid={'rgba(0,0,0,0)'}
              placeholderTextColor={'#2196f3'}
              placeholder="New Username"
              onChangeText={currentUsername => this.setState({ currentUsername })}
              multiline={false}
              numberOfLines={4} editable
            />
          </View>
          <Text style={{ marginTop: 10 }}>
            {strings.ChangeUname.txt3}
          </Text>
          <Text style={{ marginTop: 10, lineHeight: 20 }}>
            {strings.ChangeUname.txt4}
          </Text>
        </ScrollView>
        <TouchableOpacity>
          <View style={styles.View2}>
            <Text style={styles.Button}>
              {strings.ChangeUname.txt5}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

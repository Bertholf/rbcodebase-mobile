import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  Alert,
  Switch,
} from 'react-native';
import styles from './../../components/Privacy/style';
import settingService from '../../services/setting';


export default class privacy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmFollow: this.props.confirmFollow,
      whoCanFollow: this.props.whoCanFollow,
      whoCanComment: this.props.whoCanComment,
      whoCanPost: this.props.whoCanPost,
    };
  }

  saveButton(json) {
    settingService.updateSetting({ privacy: json })
    .then(Alert.alert('Saved'))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <View style={styles.styleBackground}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.styleText}>
            Comfirm request when someone follow
          </Text>
          <Switch
            onValueChange={() => this.setState({ confirmFollow: !this.state.confirmFollow })}
            style={{ margin: 8 }}
            onTintColor={'#1C64C8'}
            value={this.state.confirmFollow}
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.styleText}>
            Who can follow you
          </Text>
          <Switch
            onValueChange={() => this.setState({ whoCanFollow: !this.state.whoCanFollow })}
            style={{ margin: 8 }}
            onTintColor={'#1C64C8'}
            value={this.state.whoCanFollow}
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.styleText}>
            Who can comment on your posts
          </Text>
          <Switch
            onValueChange={() => this.setState({ whoCanComment: !this.state.whoCanComment })}
            style={{ margin: 8 }}
            onTintColor={'#1C64C8'}
            value={this.state.whoCanComment}
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.styleText}>
            Who can post on your timeline
          </Text>
          <Switch
            onValueChange={() => this.setState({ whoCanPost: !this.state.whoCanPost })}
            style={{ margin: 8 }}
            onTintColor={'#1C64C8'}
            value={this.state.whoCanPost}
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.styleText}>
            Comfirm request when someone follow
          </Text>
          <Switch
            onValueChange={() => this.setState({ confirmFollow: !this.state.confirmFollow })}
            style={{ margin: 8 }}
            onTintColor={'#1C64C8'}
            value={this.state.confirmFollow}
          />
        </View>
        <View>
          <Button
            title="SAVE"
            onPress={() => this.saveButton(this.state)}
            color="#08bcde"
          />
        </View>
      </View>
    );
  }
}

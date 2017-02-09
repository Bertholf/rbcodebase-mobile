import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Image,
  Picker,
  Switch,
  TouchableOpacity,
} from 'react-native';
import styles from './../../components/Edit/Privacy/style';
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
        <View style={{ height: 50, backgroundColor: '#2196F3', borderBottomWidth: 1, borderColor: 'white', justifyContent: 'center' }}>
          <Text style={{ fontSize: 20, color: 'white', marginLeft: 15 }}>Privacy</Text>
        </View>
        <ScrollView>
        <View style={{flexDirection: 'row',justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#aaa', height: 50 }}>
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
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#aaa', height: 50 }}>
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
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#aaa', height: 50 }}>
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

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#aaa', height: 50 }}>

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
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#aaa', height: 50 }}>
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
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.saveButton}
              activeOpacity={0.8}
              onPress={() => this.saveButton(this.state)}
            >
              <Text style={styles.txtButton}>SAVE</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

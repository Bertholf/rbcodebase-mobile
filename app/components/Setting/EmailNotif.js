import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import settingService from '../../services/setting';
import CheckBox from './CheckBox';
import styles from './styles';

const alertMessage = 'Saved';
const saveButton = (json) => {
  settingService.updateSetting(json)
  .then(Alert.alert(alertMessage))
  .catch(err  => console.log('ERROR LOH', err));
};

export default class EmailNotif extends Component {
  constructor(props) {
    super(props);
    this.state = {
      followMe: this.props.followMe,
      likeMyPost: this.props.likeMyPost,
      shareMyPost: this.props.shareMyPost,
      commentMyPost: this.props.commentMyPost,
      likeMyComment: this.props.likeMyComment,
      repliesMyComment: this.props.repliesMyComment,
      joinMyGroup: this.props.joinMyGroup,
      likeMyPage: this.props.likeMyPage,
    };
  }
  render() {
    return (
      <View style={styles.container1}>
        <View style={{ height: 50, backgroundColor: '#2196F3', borderBottomWidth: 1, borderColor: 'white', justifyContent: 'center' }}>
          <Text style={{ fontSize: 20, color: 'white', marginLeft: 15 }}>Email Notifications</Text>
        </View>
        <View style={styles.listNotifContainer}>
          <View style={styles.textListContainer}>
            <Text style={styles.textListNotif}>When someone follows me</Text>
            <CheckBox checked={this.state.followMe} />
          </View>
          <View style={styles.textListContainer}>
            <Text style={styles.textListNotif}>When someone likes my post</Text>
            <CheckBox checked={this.state.likeMyPost} />
          </View>
          <View style={styles.textListContainer}>
            <Text style={styles.textListNotif}>When someone share my post</Text>
            <CheckBox checked={this.state.shareMyPost} />
          </View>
          <View style={styles.textListContainer}>
            <Text style={styles.textListNotif}>When someone comments my post</Text>
            <CheckBox checked={this.state.commentMyPost} />
          </View>
          <View style={styles.textListContainer}>
            <Text style={styles.textListNotif}>When someone likes my comment</Text>
            <CheckBox checked={this.state.likeMyComment} />
          </View>
          <View style={styles.textListContainer}>
            <Text style={styles.textListNotif}>When someone replies to my comment</Text>
            <CheckBox checked={this.state.repliesMyComment} />
          </View>
          <View style={styles.textListContainer}>
            <Text style={styles.textListNotif}>When someone joins my group</Text>
            <CheckBox checked={this.state.joinMyGroup} />
          </View>
          <View style={styles.textListContainer}>
            <Text style={styles.textListNotif}>When someone likes my page</Text>
            <CheckBox checked={this.state.likeMyPage} />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end', margin: 20 }}>
            <TouchableOpacity
              style={styles.saveBtn}
              activeOpacity={0.8}
              onPress={() => saveButton({ emailNotification: this.state})}
            >
              <Text style={styles.txtBtn}>SAVE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

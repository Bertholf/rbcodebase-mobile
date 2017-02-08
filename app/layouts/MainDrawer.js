import React, { Component, PropTypes } from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';
import me from '../services/me';


const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  header: {
    // flex: 1,
    padding: 20,
    backgroundColor: '#2196F3',
  },
  content: {
    flex: 5,
    padding: 10,
    backgroundColor: '#fff',
  },
  profilePicture: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    color: '#fff',
    fontSize: 20,
  },
  status: {
    color: '#E0E0E0',
    fontSize: 15,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  icon: {
    marginRight: 5,
    padding: 5,
  },
  menuItem: {
    flexShrink: 1,
    padding: 5,
    color: '#080808',
    fontSize: 15,
  },
});

export default class MainDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      user: {},
    };
    this.user();
  }
  user() {
    me.getMe()
    .then((person) => {
      this.setState({ user: person });
    });
  }

  navigateTo(item) {
    this.setState({
      name: item.name,
    });

    if (item.action) {
      Actions[item.action]({ ...item.props });
      this.props.navigate();
    }
  }

  render() {
    const menuList = [
      { index: 1, name: 'Timeline', action: 'timelineList', iconName: 'list' },
      { index: 2, name: 'Profile', action: 'profile', iconName: 'person' },
      { index: 3, name: 'Notification', action: 'notifications', iconName: 'notifications' },
      { index: 4, name: 'Inbox', action: 'listInbox', iconName: 'message' },
      { index: 5, name: 'Friend list', action: 'friendlist', iconName: 'group' },
      { index: 6, name: 'Setting', action: 'setting', iconName: 'settings' },
      { index: 7, name: 'Logout', action: 'logout', iconName: 'directions-run' },
    ];
    return (
      <ScrollView>
        <View style={styles.wrapper}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => Actions.profile()}>
              <Image
                source={{ uri: this.state.user.imgProfile }}
                style={styles.profilePicture}
              />
            </TouchableOpacity>
            <View style={styles.userProfile}>
              <Text style={styles.name}>
                {this.state.user.first_name} {this.state.user.last_name}
              </Text>
              <Text style={styles.status}>
                {this.state.user.message}
              </Text>
            </View>
          </View>
          <View style={styles.content}>
            {menuList.map((item) =>
              <TouchableOpacity
                key={item.index}
                style={styles.menu}
                onPress={() => this.navigateTo(item)}
              >
                <Icon
                  name={item.iconName} size={20} style={styles.icon}
                />
                <Text style={styles.menuItem}>{item.name}</Text>
              </TouchableOpacity>)}
          </View>
        </View>
      </ScrollView>
    );
  }
}

MainDrawer.PropTypes = {
  navigate: PropTypes.func.isRequired,
};

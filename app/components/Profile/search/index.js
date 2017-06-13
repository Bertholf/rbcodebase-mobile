import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { TouchableOpacity, View, Text } from 'react-native';

export default class SearchPage extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
    this.timer = null;
  }
  // Go to AddFriend.js
  goToSearch(value) {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => Actions.addfriendscreen({ name: value }), 1100);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Container style={{ flex: 2 }}>
          <Item style={{ paddingLeft: 14, paddingRight: 14 }}>
            <Icon name="search" />
            <Input
              placeholder="Search People"
              onChangeText={value => this.goToSearch(value)}
            />
          </Item>
        </Container>
        <View style={{ flex: 16, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Search People by Name or Email</Text>
        </View>
      </View>
    );
  }
}

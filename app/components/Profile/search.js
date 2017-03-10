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
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Container style={{ flex: 2 }}>
          <Item style={{ paddingLeft: 14, paddingRight: 14 }}>
            <Icon name="search" />
            <Input
              placeholder="Search People"
              onSubmitEditing={() => Actions.addfriendscreen({ name: this.state.name })}
              onChangeText={value => this.setState({ name: value })} />
          </Item>
        </Container>
        <View style={{ flex: 16, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Search People by Name or Email</Text>
        </View>
      </View>
    );
  }
}

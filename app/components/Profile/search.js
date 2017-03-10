import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { TouchableOpacity } from 'react-native';

export default class SearchPage extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  render() {
    return (
      <Container>
        <Item>
          <Icon name="search" />
          <Input
            placeholder="Search People"
            onSubmitEditing={() => Actions.addfriendscreen({ name: this.state.name })}
            onChangeText={value => this.setState({ name: value })} />
          <Icon name="people" />
        </Item>
      </Container>
    );
  }
}

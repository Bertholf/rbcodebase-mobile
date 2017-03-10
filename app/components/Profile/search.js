import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
import { View, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
export default class SearchPage extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Item>
            <Icon name="search" />
            <Input placeholder="Search People" style={{ width: width }}/>
            <Icon name="people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
      </View>
    );
  }
}

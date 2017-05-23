import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  Alert,
  ListView,
} from 'react-native';
import { Container, Content, InputGroup, Input, Icon } from 'native-base';

export default class viewComment extends Component{
  render(){
    return(
      <View>
        <Container>
          <Content>
              <Item rounded>
                  <Input placeholder='Comment'/>
              </Item>
          </Content>
        </Container>
      </View>
    )
  }
}

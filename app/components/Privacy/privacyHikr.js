import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Alert,
} from 'react-native';

const onButtonPress = () => {
  console.log('Button has been pressed!');
};

export default class privacyHikr extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <View style= {{margin: 10, backgroundColor: 'white'}}>
      <TouchableOpacity onPress={this.onButtonPress}>
        <Text>
          Who can follow you
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style= {{backgroundColor: 'white'}}>
          Who can see your posts
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{textShadowOffset:{width: 5, height:5,textShadowRadius:10}}}>
          Who can contact me?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>
          How do i stop someone from bothering me?
        </Text>
      </TouchableOpacity>
      <View>
        <TouchableOpacity>
        <Text style= {{backgroundColor: 'skyblue',flexDirection: 'column',justifyContent: 'center',alignItems: 'center',paddingLeft: 150, fontSize: 20}}>
          SAVE
        </Text>
        </TouchableOpacity>
      </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  image2: {
    height: 100,
  },
  title: {
    fontSize:25,
    padding: 5
  },
  sinopsis: {
    paddingLeft: 5
  },
  conteiner:{
    flex: 1,
    flexDirection: 'column',
  },
});

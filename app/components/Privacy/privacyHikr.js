import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Alert,
  s
} from 'react-native';

const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};

export default class privacyHikr extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <View style={{flex: 1,Direction: 'column', justifyContent: 'space-between', marginTop: 50,}}>
      <View style={{borderWidth: 1, borderColor: 'red'}}>
      <TouchableOpacity onPress={this.onButtonPress}>
        <Text>
          Who can follow you
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style= {{color: '#08bcde',fontSize: 25,borderWidth:1,borderColor:'blue'}}>
          Who can see your posts
        </Text>
      </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text>
          Who can contact me?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text>
          How do i stop someone from bothering me?
        </Text>
      </TouchableOpacity>
      <View>
        <Button
          title="SAVE"
          onPress={onButtonPress}
          color="#08bcde"
        />

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

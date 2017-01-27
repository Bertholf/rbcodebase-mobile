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
    <View style= {styles.styleBackground}>
      <View>
      <TouchableOpacity>
        <Text style={styles.styleText}>
          Who can follow you
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.styleText}>
          Who can see your posts
        </Text>
      </TouchableOpacity>
      </View>
      <View style= {styles.borderTextT}>
      <TouchableOpacity>
        <Text style={styles.textCenter}>
          Who can contact me?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.textCenter}>
          How do i stop someone from bothering me?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.textCenter}>
          who can see my stuff ?
        </Text>
      </TouchableOpacity>
    </View>
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
  borderTextT: {
    borderWidth: 8,
    borderColor: 'white',
    marginTop : 20,
  },
  styleBackground: {
    flex: 1,
    marginTop: 20,
    backgroundColor: 'aliceblue',
    padding: 30,
  },
  styleText: {
    color: '#08bcde',
    fontSize: 20,
    borderWidth: 4,
    borderColor: 'white',
    marginTop: 20,
    justifyContent: 'center',
    textAlign: 'center',
  },
  sinopsis: {
    paddingLeft: 5
  },
  conteiner:{
    flex: 1,
    flexDirection: 'column',
  },
  textCenter: {
    color: '#08bcde',
    fontSize: 20,
    marginTop: 20,
    justifyContent : 'center',
    textAlign: 'center',
  },
});

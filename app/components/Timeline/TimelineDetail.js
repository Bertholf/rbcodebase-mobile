import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
  fntui: {
    color: 'black',
    height: 40,
    fontSize: 18,
    padding: 8,
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#009688',
  },
  user: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 10,
  },
  img: {
    width: 300,
    height: 250,
    margin: 15,
    marginLeft: 20,
  },
  detail: {
    marginRight: 15,
    marginLeft: 15,
    fontSize: 15,
  },
  comment: {
    height: 25,
    margin: 15,
    padding: 5,
    borderColor: 'gray',
  },
  container: {
    flex: 1,
  },
});

export default class CardDetail extends Component {
  render() {
    return (
      <ScrollView>
        <View style={{ marginLeft: 8, marginRight: 8, marginTop: 15, backgroundColor: 'white', elevation: 12 }}>
          <Text style={styles.fntui}> Detail card </Text>
          <View style={{ flexDirection: 'row', marginLeft: 15, marginTop: 10 }}>
            <Image style={{ borderRadius: 70, width: 50, height: 50 }} source={{ uri: 'http://facebook.github.io/react/img/logo_og.png' }} />
            <View style={{ flexDirection: 'column', marginLeft: 15 }}>
              <Text style={styles.user}>User name</Text>
              <Text style={styles.time}>Date/time</Text>
            </View>
          </View>
          <View>
            <Image source={{ uri: 'http://facebook.github.io/react/img/logo_og.png' }} style={styles.img} />
          </View>
          <View>
            <Text style={styles.detail}>Detail:ini  adalah detail ini adalah detail</Text>
            <Text>{'\n'}</Text>
          </View>
          <View>
            <Text style={styles.comment}>Comment</Text>
            <TextInput
              style={styles.comment}
              onChangeText={text => this.setState({ text })}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
  }
import React, { Component } from 'react';
import {
  View,
  Text,
  ListView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Swiper from 'react-native-swiper';

const styles = {
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
};


export default class test extends Component {
  render() {
    return (
      <Swiper showsButtons={true} loop={false} showsPagination={false}>
        <View style={styles.slide1} >
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2} >
          <Text style={styles.text}>This is Slide 2</Text>
        </View>
      </Swiper>
  );
  };
}

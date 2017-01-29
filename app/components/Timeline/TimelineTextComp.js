'use strict';
import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import styles from './TimelineTextCompStyles';
const {width, height} = Dimensions.get('window');
const TimelineTextComp = () => {
    return (
      <View style={styles.OuterView}>
        <View style={styles.OuterLayer1}>
          <View>
            <Image source={require('./imagepp.jpg')} style={{width: 100, height: 100, borderRadius: 50}}/>
          </View>
          <View style={{paddingBottom:6,}}>
            <TouchableOpacity onPress={() => console.log('dummy')}>
              <Text style={styles.Text1}>Andrew Nicholas</Text>
            </TouchableOpacity>
            <View style={styles.OuterLayer2}>
              <Text style={styles.Text2}>1 min ago</Text>
              <Text style={styles.Text3}>Sukajadi, Bandung</Text>
            </View>
          </View>
        </View>
        <View style={styles.OuterLayer3}>
          <Text style={styles.Text4}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis.
          </Text>
        </View>
        <View style={styles.OuterLayer4}>
          <TouchableOpacity onPress={() => console.log('dummy')}>
            <View style={{flexDirection:'row'}}>
              <Image source={require('./like.png')} style={styles.ImageLike}/>
              <Text style={styles.LikeText}>99,999 Like</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('dummy')}>
            <View style={{flexDirection:'row'}}>
              <Image source={require('./comment.png')} style={styles.ImageComment}/>
              <Text style={styles.CommentText}>Comment</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.OuterLayer5}>
          <Image source={require('./imagepp.jpg')} style={styles.SmallImage}/>
          <TextInput style={{height: 50, width:250, paddingTop:2,}} placeholder="
            Enter to send" onChangeText={() => console.log('dummy')} multiline = {true}
            numberOfLines = {4} editable={true}
          />
        </View>
        <Text style={styles.Comment1}>
          Comment
        </Text>
        <View style={styles.Card}>
          <Image source={require('./imagepp.jpg')} style={styles.SmallImage}/>
          <View>
            <TouchableOpacity onPress={() => console.log('dummy')}>
              <Text style={styles.Comment2}>
                Andrew Nicholas
              </Text>
            </TouchableOpacity>
            <View>
              <Text>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }


module.exports = TimelineTextComp;

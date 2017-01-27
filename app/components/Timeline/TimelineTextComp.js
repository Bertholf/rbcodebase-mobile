'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from 'react-native';

const styles = StyleSheet.create({
  OuterView: {
    flexDirection: 'column',
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
  },

  OuterLayer1: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 6,

  },

  OuterLayer2: {
    paddingLeft: 4,
    flexDirection: 'row',
  },
  OuterLayer3: {
    flexDirection: 'column',
    paddingTop:8,
  },
  OuterLayer4: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 6,
    paddingBottom: 6,
  },
  OuterLayer5: {
    flexDirection: 'row',
    paddingTop: 6,
  },
  SmallImage: {
    width: 40,
    height: 40,
    marginRight: 8,
    marginLeft: 6,
    marginTop: 6,
    borderRadius: 20,
  },
  LikeText: {
    color: '#000000',
    paddingRight: 10,
    paddingLeft: 5,
  },
  CommentText: {
    color: '#000000',
    paddingLeft: 5,
    paddingRight:10,
  },

});
export default class TimelineTextComp extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    return (
      <View style={styles.OuterView}>
        <View style={styles.OuterLayer1}>
          <View>
            <Image source={require('./imagepp.jpg')} style={{width: 100, height: 100, borderRadius: 50}}/>
          </View>
          <View style={{paddingBottom:6,}}>
              <Text style={{fontSize: 24, paddingLeft:8, color:'#435172'}}>Andrew Nicholas</Text>
            <View style={styles.OuterLayer2}>
              <Text style={{fontSize: 12,paddingLeft:8,}}>1 min ago</Text>
              <Text style={{fontSize: 12, paddingLeft:22,}}>Sukajadi, Bandung</Text>
            </View>
          </View>
        </View>
        <View style={styles.OuterLayer3}>
          <Text style={{fontSize: 16,color:'#435172',}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis.
          </Text>
          <Text style={{fontSize: 12, paddingBottom:10,}}>
            (99,999) Likes
          </Text>
        </View>
        <View style={styles.OuterLayer4}>
          <Image source={require('./like.png')} style={{height:24, width:24, paddingRight:6}}/>
          <Text style={styles.LikeText}>Like</Text>
          <Image source={require('./comment.png')} style={{height:24, width:24,}}/>
          <Text style={styles.CommentText}>Comment</Text>
        </View>
        <View style={styles.OuterLayer5}>
          <Image source={require('./imagepp.jpg')} style={styles.SmallImage}/>
          <TextInput style={{height: 50, width:250, paddingTop:2,}} placeholder="Enter to send" onChangeText={(text) => this.setState({text})}
          />
        </View>
      </View>
    );
  }
}

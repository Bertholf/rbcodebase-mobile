import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  ListView,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import timelineList from '../../../services/timelineList';
import TimelineComment from './../timelineComment';
import Accordion from 'react-native-accordion';
import styles from './style';
import post from './../../../services/post';
const imgLike = require('./../../../images/ic_thumb_up_black_18dp.png');
const imgUnLike = require('./../../../images/ic_thumb_down_black_18dp.png');


export default class TimelineList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      list: {},
      onPress: true,

      data:this.props.dataPost,
      post_id: '',

    }
  }

// change image like and Unlike
  onChangeImg() {
    const type = 'form-url-encoded';
    const id = this.state.post_id;
    post
        .likePost(type, id)
        .then(response => {
          console.log('ini adalah sebuah respon', response)
        })
        .catch(err => console.log('error message yang salah', err))
    this.setState({
      onPress: !this.state.onPress,
    });
  }
  gotoDetail(dataPost) {
    Actions.timelineDetail(dataPost);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.timelineContainer}>
          <View style={styles.about}>
          {/*show image profile*/}
            <TouchableOpacity onPress={Actions.profile}activeOpacity={0.7}>
              <Image
                source={{ uri: this.state.data.poster.picture }}
                style={styles.avatarImg}
              />
            </TouchableOpacity>
            <View style={styles.textAboutContainer}>
            {/* show first name and last name in timeline*/}
              <Text style={styles.textNameProfile}>
              {this.state.data.poster.name_first} {this.state.data.poster.name_last}
              </Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={require('./../../../images/ic_watch_later_black_18dp.png')}
                  style={{ marginRight: 5, height: 10, width: 10 }}
                />
                {/* show data time when is post update*/}
                <Text style={styles.textDay}>
                  {this.state.data.updated_at}
                </Text>
              </View>
              {/*
                in this show post location in timeline
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={require('./../../../images/ic_landscape_black_18dp.png')}
                  style={{ marginRight: 3, height: 13, width: 13 }}
                />
                <Text style={styles.textDay}>Mount salak</Text>
              </View>
              <ScrollView></ScrollView>
            </View>
          </View>
          <View style={styles.statusContainer}>
            <TouchableOpacity
              onPress={() => this.gotoDetail()}
              activeOpacity={0.7}
            >
            {/*show your post*/}
              <Text style={styles.textStatus}>
                {this.state.data.text}
              </Text>
              {/*show you image post*/}
              {/*  <Image source={{ uri: 'https://www.nasionalisme.co/wp-content/uploads/2016/05/gunung-semeru.jpg' }} style={{ height: 183,borderRadius: 3, justifyContent: 'center' }} /> */}
            </TouchableOpacity>
          </View>
          <View style={styles.mapContainer}>
            <View style={styles.commentsCountContainer}></View>
            <View style={styles.commentContainer}>
              {/*button like and unlike*/}
              <TouchableOpacity
                onPress={() => this.onChangeImg()}
                style={{ flexDirection: 'row', alignItems: 'center' }}
                activeOpacity={0.7}
              >
                <Image
                  source={this.state.onPress ? imgLike : imgUnLike}
                  style={{ marginRight: 10, height: 15, width: 15 }}
                />
                <Text>{this.state.onPress ? 'Like' : 'Unlike'}</Text>
              </TouchableOpacity>
              {/*button Comment*/}
              <TouchableOpacity
                onPress={Actions.timelineDetail}
                style={{ flexDirection: 'row', alignItems: 'center' }}
                activeOpacity={0.7}
              >
                <Image
                  source={require('./../../../images/insert_comment_black.png')}
                  style={{ marginRight: 10, height: 15, width: 15 }}
                />
                <Text>Comment</Text>
              </TouchableOpacity>
              {/*button share*/}
              <TouchableOpacity
                onPress={Actions.timelineshare}
                style={{ flexDirection: 'row', alignItems: 'center' }}
                activeOpacity={0.7}
              >
                <Image
                  source={require('./../../../images/share_black.png')}
                  style={{ marginRight: 10, height: 15, width: 15 }}
                />
                <Text>Share</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.timelineContainer}>
          <View style={styles.about}>
            <TouchableOpacity onPress={Actions.profile}activeOpacity={0.7}>
              <Image
                source={{ uri: 'http://www.gravatar.com/avatar/f02aa05bc88b0bf074f79f19a52c8fd1.jpg?s=80&d=mm&r=g' }}
                style={styles.avatarImg}
              />
            </TouchableOpacity>
            <View style={styles.textAboutContainer}>
              <Text style={styles.textNameProfile}>aristyo</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={require('./../../../images/ic_watch_later_black_18dp.png')}
                  style={{ marginRight: 5, height: 10, width: 10 }}
                />
                <Text style={styles.textDay}>10 days ago</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={require('./../../../images/ic_landscape_black_18dp.png')}
                  style={{ marginRight: 3, height: 13, width: 13 }}
                />
                <Text style={styles.textDay}>Mount salak</Text>
              </View>
            </View>
          </View>
          <View style={styles.statusContainer}>
            <TouchableOpacity
              onPress={() => this.gotoDetail()}
              activeOpacity={0.7}
            >
              <Text style={styles.textStatus}>
                Akhirnya sampai juga, Waktunya berlari meraih dann mimpi . . .
              </Text>
              <Image source={{ uri: 'http://www.amadinetravel.com/img_tour/27bromo.jpg' }} style={{ height: 183, justifyContent: 'center' }} />
            </TouchableOpacity>
          </View>
          <View style={styles.mapContainer}>
            <View style={styles.commentsCountContainer}>
              <TouchableOpacity
                style={{ flexDirection: 'row', alignItems: 'center' }}
                activeOpacity={0.7}
              >
                <Image
                  source={require('./../../../images/ic_thumb_up_black_18dp.png')}
                  style={{ marginRight: 5, height: 14, width: 14 }}
                />
                <Text style={styles.textLike}> Likes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ flexDirection: 'row', alignItems: 'center' }}
                activeOpacity={0.7}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                  <Image
                    source={require('./../../../images/insert_comment_black.png')}
                    style={{ marginRight: 5, height: 14, width: 14 }}
                  />
                  <Text> Comments</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.commentContainer}>
              <TouchableOpacity
                onPress={() => this.onChangeImg()}
                style={{ flexDirection: 'row', alignItems: 'center' }}
                activeOpacity={0.7}
              >
                <Image
                  source={this.state.onPress ? imgLike : imgUnLike}
                  style={{ marginRight: 10, height: 15, width: 15 }}
                />
                <Text>{this.state.onPress ? 'Like' : 'Unlike'}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={Actions.timelineDetail}
                style={{ flexDirection: 'row', alignItems: 'center' }}
                activeOpacity={0.7}
              >
                <Image
                  source={require('./../../../images/insert_comment_black.png')}
                  style={{ marginRight: 10, height: 15, width: 15 }}
                />
                <Text>Comment</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress= {Actions.timelineshare}
                style={{ flexDirection: 'row', alignItems: 'center' }}
                activeOpacity={0.7}
              >
                <Image
                  source={require('./../../../images/share_black.png')}
                  style={{ marginRight: 10, height: 15, width: 15 }}
                />
                <Text>Share</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.timelineContainer}>
          <View style={styles.about}>
            <TouchableOpacity onPress= { Actions.profile }  activeOpacity={0.7}>
              <Image
                source={{ uri: "http://www.gravatar.com/avatar/f02aa05bc88b0bf074f79f19a52c8fd1.jpg?s=80&d=mm&r=" }}
                style={styles.avatarImg}
              />
            </TouchableOpacity>
            <View style={styles.textAboutContainer}>
              <Text style={styles.textNameProfile}>aristyo</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={require('./../../../images/ic_watch_later_black_18dp.png')}
                  style={{ marginRight: 5, height: 10, width: 10 }}
                />
                <Text style={styles.textDay}>10 days ago</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={require('./../../../images/ic_landscape_black_18dp.png')}
                  style={{ marginRight: 3, height: 13, width: 13 }}
                />
                <Text style={styles.textDay}>Mount salak</Text>
              </View>
            </View>
          </View>
          <View style={styles.statusContainer}>
            <TouchableOpacity
              onPress={() => this.gotoDetail()}
              activeOpacity={0.7}
            >
              <Text style={styles.textStatus}>
                Akhirnya sampai juga, Waktunya berlari meraih dann mimpi . . .
              </Text>
              <Image source={{ uri: 'http://www.eliasaikaly.com/category/wp-content/uploads/2013/05/IMG_7106.jpg' }} style={{ height: 183, justifyContent: 'center'}} />
            </TouchableOpacity>
          </View>
          <View style={styles.mapContainer}>
            <View style={styles.commentsCountContainer}>
              <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}
                activeOpacity={0.7}
              >
                <Image
                  source={require('./../../../images/ic_thumb_up_black_18dp.png')}
                  style={{ marginRight: 5, height: 14, width: 14 }}
                />
                <Text style={styles.textLike}> Likes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ flexDirection: 'row', alignItems: 'center' }}
                activeOpacity={0.7}
              >
              <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                <Image
                  source={require('./../../../images/insert_comment_black.png')}
                  style={{ marginRight: 5, height: 14, width: 14 }}
                />
              <Text> Comments</Text>
              </View>
              </TouchableOpacity>
            </View>
            <View style={styles.commentContainer}>
              <TouchableOpacity
                onPress={() => this.onChangeImg()}
                style={{ flexDirection: 'row', alignItems: 'center' }}
                activeOpacity={0.7}
              >
                <Image
                  source={this.state.onPress ? imgLike : imgUnLike}
                  style={{ marginRight: 10, height: 15, width: 15 }}
                />
                <Text>{this.state.onPress ? 'Like' : 'Unlike'}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={Actions.timelineDetail}
                style={{ flexDirection: 'row', alignItems: 'center' }}
                activeOpacity={0.7}
              >
                <Image
                  source={require('./../../../images/insert_comment_black.png')}
                  style={{ marginRight: 10, height: 15, width: 15 }}
                />
                <Text>Comment</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress= {Actions.timelineshare}
                style={{ flexDirection: 'row', alignItems: 'center' }}
                activeOpacity={0.7}
              >
                <Image
                  source={require('./../../../images/share_black.png')}
                  style={{ marginRight: 10, height: 15, width: 15 }}
                />
                <Text>Share</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ height: 10, backgroundColor: '#aaa' }} />
      </View>
    );
  }
}

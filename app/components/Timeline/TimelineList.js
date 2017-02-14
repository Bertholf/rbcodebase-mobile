import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  ListView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Menu, {
  MenuContext,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-menu';
import { Actions } from 'react-native-router-flux';
import timelineList from '../../services/timelineList';
import TimelineComment from './timelineComment';
import Accordion from 'react-native-accordion';

const imgLike = require('./../../images/ic_thumb_up_black_18dp.png');
const imgUnLike = require('./../../images/ic_thumb_down_black_18dp.png');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  timelineContainer: {
    justifyContent: 'flex-start',
    paddingTop: 8,
    paddingLeft: 16,
    paddingRight: 16,
  },
  about: {
    flexDirection: 'row',
  },
  avatarImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 12,
  },
  textAboutContainer: {
    flex: 9,
  },
  textNameProfile: {
    color: 'rgba(0,0,0,0.7)',
    fontSize: 16,
  },
  textDay: {
    color: '#aaa',
    fontSize: 12,
    lineHeight: 15,
  },
  divider: {
    marginVertical: 5,
    marginHorizontal: 2,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  iconRightContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  iconRightMenu: {
    width: 25,
    height: 25,
    top: 0,
    left: 0,
  },
  statusContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  textStatus: {
    color: 'rgba(0,0,0,0.9)',
  },
  commentsCountContainer: {
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  textLike: {
    marginRight: 15,
  },
  commentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 7,
    paddingBottom: 7,
  },
  textComment: {
    marginRight: 20,
    marginLeft: 20,
  },
});

export default class TimelineList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      list: {},
      onPress: true,
    };
  }
  onChangeImg() {
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
              <TouchableOpacity onPress= { Actions.profile }  activeOpacity={0.7}>
                <Image
                  source={{ uri: this.props.dataPost.avatarTimeline }}
                  style={styles.avatarImg}
                />
              </TouchableOpacity>
              <View style={styles.textAboutContainer}>
                <Text style={styles.textNameProfile}>{this.props.dataPost.user}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image
                    source={require('./../../images/ic_watch_later_black_18dp.png')}
                    style={{ marginRight: 5, height: 10, width: 10 }}
                  />
                  <Text style={styles.textDay}>10 days ago</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image
                    source={require('./../../images/ic_landscape_black_18dp.png')}
                    style={{ marginRight: 3, height: 13, width: 13 }}
                  />
                  <Text style={styles.textDay}>Mount salak</Text>
                </View>
              </View>
              <TouchableOpacity activeOpacity={0.7}>
                <Menu>
                  <MenuTrigger>
                    <Image
                      source={require('./../../images/ic_more_vert_black_24dp.png')}
                      style={styles.iconRightMenu}
                    />
                  </MenuTrigger>
                  <MenuOptions>
                    <MenuOption value="normal">
                      <Text>Save Post</Text>
                    </MenuOption>
                    <View style={styles.divider} />
                    <MenuOption value="normal">
                      <Text>Hide Post</Text>
                    </MenuOption>
                    <View style={styles.divider} />
                    <MenuOption value="normal">
                      <Text>Unfollow {this.props.dataPost.user}</Text>
                    </MenuOption>
                    <View style={styles.divider} />
                    <MenuOption value="normal">
                      <Text>Report Post</Text>
                    </MenuOption>
                  </MenuOptions>
                </Menu>

              </TouchableOpacity>
            </View>
            <View style={styles.statusContainer}>
              <TouchableOpacity
                onPress={() => this.gotoDetail(this.props.dataPost)}
                activeOpacity={0.7}
              >
                <Text style={styles.textStatus}>
                  Akhirnya sampai juga, Waktunya berlari meraih dann mimpi . . .
                </Text>
                <Image source={{ uri: this.props.dataPost.imageTimeline }} style={{ height: 183, justifyContent: 'center'}} />
              </TouchableOpacity>
            </View>
            <View style={styles.mapContainer}>
              <View style={styles.commentsCountContainer}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}
                  activeOpacity={0.7}
                >
                  <Image
                    source={require('./../../images/ic_thumb_up_black_18dp.png')}
                    style={{ marginRight: 5, height: 14, width: 14 }}
                  />
                  <Text style={styles.textLike}>{this.props.dataPost.numberTimeline} Likes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ flexDirection: 'row', alignItems: 'center' }}
                  activeOpacity={0.7}
                >
                <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                  <Image
                    source={require('./../../images/insert_comment_black.png')}
                    style={{ marginRight: 5, height: 14, width: 14 }}
                  />
                <Text>{this.props.dataPost.numberTimeline} Comments</Text>
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
                    source={require('./../../images/insert_comment_black.png')}
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
                    source={require('./../../images/share_black.png')}
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
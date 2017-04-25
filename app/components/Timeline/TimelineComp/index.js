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
// import Menu, {
//   MenuContext,
//   MenuOptions,
//   MenuOption,
//   MenuTrigger,
// } from 'react-native-menu';
import timelineList from '../../../services/timelineList';
import PostCard from './../../Timeline/StatusPostCard/StatusCard';
import TimelineList from './../TimelineList';
import TimelineComment from './../timelineComment';
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
const imgLike = require('./../../../images/ic_thumb_up_black_18dp.png');
const imgUnLike = require('./../../../images/ic_thumb_down_black_18dp.png');
import { Actions } from 'react-native-router-flux';
import styles from './style';
export default class MapMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      list: {},
      onPress: true,
      enable: true,
    };
  }
  componentDidMount() {
    // timelineList.getTimeline()
    // .then((data) => {
    //   this.setState({ list: data, loading: false });
    // }).catch(err => console.log(err));
  }
  onChangeImg() {
    this.setState({
      onPress: !this.state.onPress,
    });
  }
  gotoDetail(dataPost) {
    Actions.timelineDetail(dataPost);
  }
  renderRow(dataPost) {
    return (
      <TimelineList dataPost={dataPost} />
    );
  }
  render() {
    if (this.state.loading === true) {
      return (
        <ScrollView>
          <View>
            <PostCard />
            <ListView
              enableEmptySections
              dataSource={ds.cloneWithRows(this.state.list)}
              renderRow={dataPost => this.renderRow(dataPost)}
            />
            <TimelineList />
          </View>
        </ScrollView>
      );
    } else {
      return (
        <Text>No Content Display</Text>
      );
    }
  }
}

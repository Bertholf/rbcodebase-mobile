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
  KeyboardAvoidingView,
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import getFlat from './flattering'
import timelineList from '../../../services/timelineList';
import PostCard from './../../Timeline/StatusPostCard/StatusCard';
import TimelineList from './../TimelineList';
import TimelineComment from './../timelineComment';
import { Actions } from 'react-native-router-flux';
import styles from './style';
import Moment from 'moment';


const imgLike = require('./../../../images/ic_thumb_up_black_18dp.png');
const imgUnLike = require('./../../../images/ic_thumb_down_black_18dp.png');
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

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
    timelineList.getTimeline()
    .then((res) => {
      this.setState({ list: res.data});
    },(data) => {console.log("this is timelelineList" , data)}).catch(err => console.log(err));
  }
  onChangeImg() {
    this.setState({
      onPress: !this.state.onPress,
    });
  }
  gotoDetail(data) {
    Actions.timelineDetail(data);
  }

  reRender() {
    this.componentDidMount();
  }
  render() {
    return (
      <KeyboardAwareScrollView>
        <ScrollView>
          <View>
            <PostCard reRender={()=>this.componentDidMount.bind(this)} />
            <ListView
              enableEmptySections
              dataSource={ds.cloneWithRows(this.state.list)}
              renderRow={dataPost => <TimelineList data={data} />}
            />
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    );
  }
}

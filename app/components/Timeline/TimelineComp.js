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
import Display from 'react-native-display';
import timelineList from '../../services/timelineList';
import PostCard from './../Timeline/StatusPostCard/StatusCard';
import TimelineList from './../Timeline/TimelineList';
import TimelineComment from './timelineComment';
import Accordion from 'react-native-accordion';
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
const imgLike = require('./../../images/ic_thumb_up_black_18dp.png');
const imgUnLike = require('./../../images/ic_thumb_down_black_18dp.png');
import { Actions } from 'react-native-router-flux';
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
    .then((data) => {
      this.setState({ list: data, loading: false });
    });
  }
  onChangeImg() {
    this.setState({
      onPress: !this.state.onPress,
    });
  }
  renderRow(dataPost) {
    return (
      <TimelineList dataPost={dataPost} />
    );
  }
  render() {
    if (this.state.loading === false) {
      return (
        <MenuContext>
          <ScrollView>
            <View>
              <PostCard />
              <ListView
                dataSource={ds.cloneWithRows(this.state.list)}
                renderRow={dataPost => this.renderRow(dataPost)}
              />
            </View>
          </ScrollView>
        </MenuContext>
      );
    } else {
      return(
        <ActivityIndicator />
      );
    }
  }
}

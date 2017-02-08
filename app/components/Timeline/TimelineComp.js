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
import timelineList from '../../services/timelineList';
import PostCard from './../Timeline/StatusPostCard/StatusCard';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#2196F3',
  },
  text: {
    fontSize: 10,
    textAlign: 'right',
    paddingTop: 6,
    color: '#f8f8ff',
    backgroundColor: '#009688',
    padding: 8,
    marginTop: 2,
  },
  nameProfile: {
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#ffffff',
    padding: 8,
    fontSize: 30,
    backgroundColor: '#2196F3',
  },
  mainView: {
    backgroundColor: '#ffffff',
  },
});


const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
export default class MapMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      list:{},
    }
  }
  componentDidMount() {
    timelineList.getTimeline()
    .then((data) => {
      this.setState({ list: data, loading: false });
    }).catch((err) => console.error('SORY ERROR!!!!!!', err));
  }


  render() {
    if (this.state.loading === false) {
    return (
      <ScrollView>
    <View>
      <PostCard/>
      <ListView
        dataSource={ds.cloneWithRows(this.state.list)}
        renderRow={(dataPost) =>
          <TouchableOpacity style={styles.mainView} onPress={() => props.moveToDetail()}>
            <View style={styles.card}>
             <Image source={{ uri: dataPost.avatarTimeline }} style = {{width: 75, height: 75, borderRadius:70, margin:6}}/>
             <Text style={styles.nameProfile}>{dataPost.user}</Text>
           </View>
            <Image source = {{uri: dataPost.imageTimeline}} style = {{width: 325, height: 183, justifyContent: 'center', marginLeft: 9 }}/>
            <Text style={styles.text}>Like: {dataPost.numberTimeline}</Text>
            <Text style={styles.text}>{dataPost.numberTimeline} Comments</Text>
            <Text style={styles.text}>{dataPost.dateTimeline}</Text>
          </TouchableOpacity>
        }
      />
    </View>
    </ScrollView>
    );
  } else {
    return(
      <ActivityIndicator />
    );
  }
  }
}

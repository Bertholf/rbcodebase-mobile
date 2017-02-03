import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  ListView
} from 'react-native';
import TimelineComment from '../../components/Timeline/timelineComment'
import posts from '../../services/post'

const styles = StyleSheet.create({
  card: {

    flexDirection:'row',
    justifyContent:'flex-start',
    backgroundColor: '#009688',

  },

  text: {
    fontSize: 10,
    textAlign: 'right',
    paddingTop: 6,
    color: '#f8f8ff',
    backgroundColor: '#009688',
    padding: 8,
    marginTop: 2

  },
  nameProfile: {
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#ffffff',
    padding: 8,
    fontSize: 30,

    backgroundColor: '#009688'
  },
  mainView: {

    backgroundColor: '#ffffff',

  }
});

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
export default class MapMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      clicked: true,
      post:{}
    }
  }
  componentDidMount() {
    posts.getPosts()
    .then((data) => {
      this.setState({
        post: data,
        loading: false ,
      });
      console.log('WOW',this.state.posts);
    }).catch((err) => console.log(err))
  }

    render() {
      if (this.state.loading === false) {
        return (
          <ListView
          dataSource={ds.cloneWithRows(this.state.post.data)}  renderRow={(timeList) =>
          <TouchableOpacity style={styles.mainView} onPress={() => props.moveToDetail()}>
            <View style={styles.card}>
             <Image source={{ uri: 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png' }} style = {{width: 75, height: 75, borderRadius:70, margin:6}}/>
             <Text style={styles.nameProfile}>{timeList.text}</Text>
           </View>
            <Image source={{uri:'http://ke5ter.com/img/route.png'}} style = {{width: 325, height: 183, justifyContent: 'center', marginLeft: 9 }}/>
            <Text style={styles.text}>Tangkuban Perahu</Text>
            <Text style={styles.text}>KM</Text>
            <TimelineComment></TimelineComment>
          </TouchableOpacity>
        }
          />
        );
      } else {
        return (
          <Text>Oke</Text>
        );
      }
    }
  }

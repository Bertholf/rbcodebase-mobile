import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ActivityIndicator,
  ListView,
  TouchableOpacity,
} from 'react-native';
import comment from '../../services/comment';

const thumb = require('./../../images/thumb.png');

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  imgUser: {
    left: 5,
    top: 10,
    width: 30,
    height: 30,
    borderRadius: 6,
  },
  img: {
    width: 100,
    height: 50,
  },
  body: {
    flexDirection: 'row',
  },
  bodyChat: {
    marginLeft: 15,
    padding: 5,
    backgroundColor: '#fff',
    borderRadius: 6,
    elevation: 4,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  txtChat: {
    fontSize: 14,
  },
  date: {
    fontSize: 10,
    justifyContent: 'center',
  },
  number: {
    fontSize: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 3,
  },
  content: {
    padding: 10,
    backgroundColor: '#fff',
    elevation: 5,
  },
  thumb: {
    width: 10,
    height: 10,
  },
  action: {
    flexDirection: 'row',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    height: 20,
    borderColor: '#ddd',
    width: 83,
  },
  headerContent: {
    marginLeft: -5,
    flexDirection: 'row',
  },
  headerText: {
    padding: 3,
    margin: 5,
  }
});

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default class CommentView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      loading: true,
      comment: {},
    };
  }
  componentDidMount() {
    comment.getComment()
    .then((data) => {
      this.setState({ comment: data, loading: false });
      console.log(this.state);
    })
    .catch(err => console.log(err));
  }
  render() {
    if (this.state.loading === false) {
      return (
        <ListView
          dataSource={ds.cloneWithRows(this.state.comment)}
          renderRow={dataComment =>
            <View style={styles.container}>
              <View style={styles.content}>
                <View style={styles.headerContent}>
                  <Image style={styles.imgUser} source={{ uri: dataComment.avatarComment }} />
                  <View style={styles.headerText}>
                    <Text style={styles.username} >{dataComment.user}</Text>
                    <Text style={styles.date} >{dataComment.dateComment}</Text>
                  </View>
                </View>
                <Image style={styles.img} source={{ uri: dataComment.imageComment }} />
                <Text style={styles.comment} >{dataComment.textComment}</Text>
                <View style={styles.action}>
                  <TouchableOpacity style={styles.button}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                      <Image style={styles.thumb} source={{ uri: 'http://downloadicons.net/sites/default/files/thumbs-up-icon-65138.png' }} />
                      <Text style={styles.number} >{dataComment.numberComment}</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                      <Image style={styles.thumb} source={{ uri: 'https://cdn2.iconfinder.com/data/icons/bitsies/128/Message-512.png' }} />
                      <Text style={styles.number} >{dataComment.numberComment}</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button}>
                    <Image style={styles.thumb} source={{ uri: 'http://icons.iconarchive.com/icons/custom-icon-design/flatastic-9/512/Clockwise-arrow-icon.png' }} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button}>
                    <Image style={styles.thumb} source={{ uri: 'http://icons.iconarchive.com/icons/designbolts/free-valentine-heart/128/Heart-icon.png' }} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          }
        />
      );
    } else {
      return (
        <ActivityIndicator />
      );
    }
  }
  }

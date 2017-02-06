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
import TimelineComment from './timelineComment';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  aboutContainer: {
    flex: 1,
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
  iconRightContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  iconRightMenu: {
    position: 'absolute',
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
    paddingTop: 10,
    paddingBottom: 10,
  },
  textComment: {
    marginRight: 20,
    marginLeft: 20,
  },

  card: {

    flexDirection:'row',
    justifyContent:'flex-start',
    backgroundColor: '#2196F3',

  },

  text: {
    fontSize: 10,
    textAlign: 'right',
    paddingTop:6,
    color:'#f8f8ff',
    backgroundColor: '#2196F3',
    padding:8,
    marginTop:2

  },
  mainView:{

    backgroundColor:'#ffffff',

  }
});
export default class MapMain extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
      ]),
    };
  }
  // renderRow(rowData) {
  //   return (
  //
  //     <TouchableOpacity style={styles.mainView} onPress={() => props.moveToDetail()}>
  //       <View style={styles.card}>
  //         <Image source={{ uri: 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png' }} style={{ width: 75, height: 75, borderRadius: 70, margin: 6 }} />
  //         <Text style={styles.nameProfile}>{rowData}</Text>
  //       </View>
  //       <Image source={{ uri: 'http://ke5ter.com/img/route.png' }} style={{ width: 325, height: 183, justifyContent: 'center', marginLeft: 9 }} />
  //       <Text style={styles.text}>Tangkuban Perahu</Text>
  //       <Text style={styles.text}>KM</Text>
  //       <TimelineComment></TimelineComment>
  //     </TouchableOpacity>
  //   );
  // }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.aboutContainer}>
          <View style={styles.about}>
            <Image
              source={{ uri: 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png' }}
              style={styles.avatarImg}
            />
            <View style={styles.textAboutContainer}>
              <Text style={styles.textNameProfile}>Mulia Arifandi Nasution</Text>
              <Text style={styles.textDay}>3 days ago</Text>
              <Text style={styles.textDay}>Mount salak</Text>
            </View>
            <View style={styles.iconRightContainer}>
              <Image
                source={require('./../../images/ic_more_vert_black_24dp.png')}
                style={styles.iconRightMenu}
              />
            </View>
          </View>
          <View style={styles.statusContainer}>
            <Text style={styles.textStatus}>
              Akhirnya sampai juga, Waktunya berlari meraih dann mimpi . . .
            </Text>
          </View>
          <View style={styles.mapContainer}>
            <Image source={{ uri: 'http://ke5ter.com/img/route.png' }} style={{ height: 183, justifyContent: 'center'}} />
            <View style={styles.commentsCountContainer}>
              <Text style={styles.textLike}>100 Likes</Text>
              <Text>200 Comments</Text>
            </View>
            <View style={styles.commentContainer}>
              <Text>Likes</Text>
              <Text style={styles.textComment}>Comment</Text>
              <Text>Share</Text>
            </View>
          </View>
        </View>
        {/* <View style={styles.cardContainer}>

        </View> */}
      </View>

      // <ListView
      //   dataSource={this.state.dataSource}
      //   renderRow={rowData => this.renderRow(rowData)}
      // />
    );
  }
}

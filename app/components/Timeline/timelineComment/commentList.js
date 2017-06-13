import React, { Component } from 'react';
import styles from './style';
import {
   View,
   Text,
   ListView,
   Keyboard,
   Image,
   TouchableOpacity,
   Alert,
} from 'react-native';
import comment from '../../../services/comment.js';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default class CommentList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user_id: '',
    }
  }

  componentDidMount(){
    comment
      .getId()
      .then(res => {
        this.setState({
          user_id: res.data[0].timelineable_id,
        })
      })
      .catch(err => console.log('this is error: ', err))
  }

  render(){
    const dataSource = ds.cloneWithRows(this.props.data);
    const veryfied = this.props.data.user_id === this.state.user_id;
    return (
      <ListView
        enableEmptySections
        dataSource={dataSource}
        renderRow={rowData => (
          <View style={styles.listcomment}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <View style={{flex: 9, flexDirection: 'row'}}>
                <Text>
                  <Text style={styles.user}>
                    {rowData.name_slug}{' '}
                  </Text>
                  <Text style={styles.text}>
                    {rowData.text}
                  </Text>
                </Text>
              </View>
              <View style={{flex: 1}}>
                <TouchableOpacity
                  onPress={() => Alert.alert('Cofirmation',
                  'Delete comment?', [
                    { text: 'No', onPress: () => console.log('ini adalah row data: ', rowData)},
                    { text: 'Yes', onPress:
                    () => comment.deleteComment(rowData.id)
                    .then(response => {
                      console.log("Deleted");
                    })
                    .catch(err => {
                      console.log("Error on delete");
                    })},
                  ])}>
                  {veryfied || rowData.user_id === this.state.user_id ?
                    <Image
                    style={styles.icons}
                    source={require('./../../../images/ic_delete_white_24dp.png')}
                    /> : <View />}
                </TouchableOpacity>
              </View>
            </View>
          </View>
          )
        }
      />
    );
  }
};

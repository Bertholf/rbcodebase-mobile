import React, { Component } from 'react';
import styles from './style';
import {
   View,
   Text,
   ListView,
   Keyboard,
   TouchableOpacity,
   Alert,
   Image,
} from 'react-native';
import comment from '../../../services/comment.js'
// @flow
 const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
 
export default class CommentList extends Component {
  constructor(props:Object) {
    super(props);
    this.state = {
      onPress: false,
      data: this.props.data,
    }
  }
  render() {
    return (
        <ListView
            enableEmptySections
            dataSource={ds.cloneWithRows(this.state.data)}
            renderRow={(rowData) =>
              <View style={{ borderColor: '#B3E5FC', borderBottomWidth: 0.5, paddingBottom: 5, paddingTop: 5, marginRight: 20 }}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text>{rowData.text}</Text>
                    <View style={{ flexDirection: 'row' }}>
                      <TouchableOpacity
                        onPress={() => Alert.alert('Cofirmation',
                        'Delete comment?', [
                          { text: 'No', onPress: () => console.log('Cancel Pressed')},
                          { text: 'Yes', onPress:
                          () => comment.deleteComment(rowData.id)
                                  .then(response => {
                                    console.log("Deleted");
                                  })
                                  .catch(err => {
                                    console.log("Error on delete");
                                  })},
                        ])}>
                        <Image
                          style={styles.icons}
                          source={require('./../../../images/ic_delete_white_24dp.png')}
                        />
                      </TouchableOpacity>
                    </View>
                </View>
              </View>
            }
        />
    )
  }
}

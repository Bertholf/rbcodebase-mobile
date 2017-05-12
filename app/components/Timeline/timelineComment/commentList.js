import React, { Component } from 'react'
import styles from './style';
import {
   View,
   Text,
   ListView,
   Keyboard
} from 'react-native';
// @flow

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default CommentPost = (props:Object) => {
    const dataSource = ds.cloneWithRows(props.data)
    return (
        <ListView
            enableEmptySections
            dataSource={dataSource}
            renderRow={(rowData) =>
              <View style={{ borderColor: '#B3E5FC', borderBottomWidth: 0.5, paddingBottom: 5, paddingTop: 5, marginRight: 20 }}>
                <Text>{rowData.text}</Text>
              </View>
            }
        />
    )
}

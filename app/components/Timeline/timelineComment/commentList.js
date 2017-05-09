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
    console.log(props.data)
    const dataSource = ds.cloneWithRows(props.data)
    
    return (
        <ListView
            enableEmptySections
            dataSource={dataSource}
            renderRow={(rowData) => <Text>{rowData.text}</Text>}
        />
    )

}



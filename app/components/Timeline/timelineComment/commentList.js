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

export default CommentList = (props:Object) => {
    const dataSource = ds.cloneWithRows(props.data)
    console.log(props.data[0])
    if(props.data[0]){
         return (
        
        <ListView
            enableEmptySections
            dataSource={dataSource}
            renderRow={(rowData) =>{
              <View style={styles.listcomment}>
                <Text>{rowData.name_slug}</Text>
                <Text>{rowData.text}</Text>
              </View>
              }
            }
        />
    )
    }else{
        return(<View></View>)
    }
    
}

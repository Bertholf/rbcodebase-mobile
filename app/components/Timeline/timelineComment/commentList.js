import React, { Component } from 'react';
import styles from './style';
import {
   View,
   Text,
   ListView,
   Keyboard,
   Image,
} from 'react-native';


const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default CommentList = (props) => {
  console.log(props.data, 'cuy');
  const dataSource = ds.cloneWithRows(props.data);
  return (

    <ListView
      enableEmptySections
      dataSource={dataSource}
      renderRow={rowData => (<View style={styles.listcomment}>
        <Text style={styles.user}>{rowData.name_slug}</Text>
        <Text style={styles.text}>{rowData.text}</Text>
      </View>
   )
            }
    />
  );
};

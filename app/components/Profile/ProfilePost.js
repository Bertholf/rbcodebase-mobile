import React, { Component } from 'react';

import {
   ListView,
   View,
   StyleSheet,
   Image,
   Text
} from 'react-native';

const ProfilePost = (props) => {
    let data = props.data;
    // let styles = props.styles;
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dataSource = ds.cloneWithRows(data)
    {console.log(data)}
    return (
        <ListView
          dataSource={dataSource}
          renderRow={(rowData) => 
                        <View>
                            <Text 
                                style = {props.styles}

                            >{rowData.text}</Text>
                            <Image 
                            style = {props.styleImage}
                            source={rowData.image}/>
                        </View>    
              
            }  
        />
    );
}

module.exports = ProfilePost;

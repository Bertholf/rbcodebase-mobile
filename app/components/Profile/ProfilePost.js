import React, { Component } from 'react';

import {
   ListView,
   View,
   StyleSheet,
   Image,
   Text
} from 'react-native';

const link = require('./../../images/gunung.jpg')
const ProfilePost = (props) => {
    {console.log(props)}
    let testing = props.data[0]
    let images = props.data[0].image
    let data = props.data;
    const list = data.map((item) => {
                    return (
                        <View>
                            <Text>{item.text}</Text>
                            <Image 
                            source={item.image}/>
                        </View>    
                    )
                    
                })
    return (
        <View>
            {list}
        </View>
    )
}

module.exports = ProfilePost;

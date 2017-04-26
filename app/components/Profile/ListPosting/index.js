import React, { Component } from 'react';

import {
   ListView,
   View,
   StyleSheet,
   Image,
   Text
} from 'react-native';

import Profile from './../Profile'
import styles from './style';

export default class ListPosting extends Component {
  state = {
    dataSource: null
  }
   componentWillMount() {

   }
   render() {
      return (
         <View>
            <Profile data={[
              <View style = {styles.list}>
                  <Image source = {require('./../../../images/images.jpeg')} style = {styles.card}  />
                  <View>
                     <Text style={styles.nama1}>Abu Dzar Al Ghifari</Text>
                 </View>
               </View>
            ]} />
         </View>
      );
   }
}

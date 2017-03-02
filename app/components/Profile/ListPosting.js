import React, { Component } from 'react';

import {
   ListView,
   View,
   StyleSheet,
   Image,
   Text
} from 'react-native';

import Profile from './Profile'

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
                  <Image source = {require('./../../images/images.jpeg')} style = {styles.card}  />
                  <View>
                     <Text style={styles.nama1}>Abu Dzar Al Ghifari</Text>
                 </View>
               </View>
            ]} />
         </View>
      );
   }
}

const styles = StyleSheet.create ({
  card: {
   height:35,
   width: 35,
   borderRadius: 50,
   marginTop: 25,
  },
  nama1: {
  color: 'black',
  margin: 5,
  fontWeight: 'bold',
  fontSize:10,
    },
  list: {
    flexDirection:'row',
    alignItems: 'center',
   marginBottom: 20,
   margin:20,
  },
})

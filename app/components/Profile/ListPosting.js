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
                  <Image source = {require('./images.jpeg')} style = {styles.card}  />
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
   container: {
    flex: 1,
    backgroundColor: 'white',


   },
   listContainer: {
     flex:2,
      paddingTop: 22
   },
   listItem: {
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
   },
   button: {
      flexDirection: 'row',
      padding: 8,
      backgroundColor: '#1a237e',
      //justifyContent:'space-between',
      color: 'white',
      alignItems:'center',
      borderRadius: 20,
   },
   follow: {
      padding: 8,
      alignItems:'center',
      backgroundColor: '#2196f3',
      color: 'white',
      fontSize:15,
       borderRadius: 20,
   },
   images: {
    height:100,
    width: 100,
    borderRadius: 50,
  },

  card: {
   height:35,
   width: 35,
   borderRadius: 50,
   marginTop: 25
 },
  profile: {
  flexDirection:'row',
  //  justifyContent: '',
   alignItems: 'center',
   //backgroundColor: '#c5cae9',
   marginBottom: 20,
   margin:55

  },
  gambar: {
  flexDirection:'row',
  justifyContent: 'space-around',
  //borderBottomWidth:1
  //backgroundColor: '#c5cae9',
  },
  nama: {
  color: 'black',
  margin: 14,
  marginBottom:0,
  fontSize:12,
  fontWeight: 'bold',
  },
  nama1: {
  color: 'black',
  margin: 5,
  fontWeight: 'bold',
  fontSize:10,
  },
  nama2: {
    color: 'grey',
    margin: 12,
    marginBottom:0,
    fontSize:11
  },
  jarak: {
  color: 'black',
  margin: 12,
  marginBottom:0
  },
  posting: {
  color: 'black',
  margin: 12,
  },

  list: {
  flexDirection:'row',
  //  justifyContent: '',
   alignItems: 'center',
   //backgroundColor: '#c5cae9',
   marginBottom: 20,
   margin:20
  },
  map: {
   height:200,
   width: 335,
   marginLeft:10,
   marginRight:10
 }
})

import React, { Component } from 'react'
import {
   View,
   TouchableOpacity,
   Text,
   StyleSheet,
   Image,
   ListView,
   ScrollView
} from 'react-native'

export default class Profile extends Component {
render (){
  return (
    <View style={styles.container}>
      <View style = {styles.backgroundContainer}>
        <Image source = {require('./../../images/gunung.jpg')} resizeMode = 'cover' style = {styles.backdrop} />
        <View style={styles.textInform}>
        <Text style={styles.pos}>10 Post</Text>
        <Text style={styles.followers}>10K Followers</Text>
        <TouchableOpacity>
           <Text style = {styles.button}>
              Follow
           </Text>
        </TouchableOpacity>
        </View>
      </View>
      <View>

        <Image style = {styles.logo} source = {require('./../../images/images.jpeg')} />
          <Text style = {styles.headline}>Abu Dzar Alghifari</Text>
      </View>
      <View style={styles.biodata}>
      <Text style={styles.followers}>Biodata</Text>
      </View>
      </View>


  )
}
}

var styles = StyleSheet.create({
  backgroundContainer: {
    position: 'absolute',
    height:180,
    width:500,

  },
  container: {
    flex: 1,
  },
  overlay: {
    opacity: 0.5,
    backgroundColor: '#000000'
  },
  logo: {
    backgroundColor: 'rgba(0,0,0,0)',
    width: 100,
    height: 100,
    borderRadius:10,
    marginTop:80,
    marginLeft:10,
    flexDirection:'row',
    },
  backdrop: {
    flex:1,
    flexDirection: 'row',
    height:200,
    width:500

  },
  headline: {
    fontSize: 18,
    fontWeight:'bold',
    textAlign: 'left',
    //backgroundColor: 'transparant',
    color: 'black',
    alignSelf:'stretch',
    marginLeft:5
  },
  button: {
     flexDirection: 'row',
     padding: 8,
     backgroundColor: '#004d40',
     //justifyContent:'space-between',
     color: 'white',
     marginLeft:10,
     alignItems:'center',
     marginTop: 5,
     borderRadius: 10,
  },
  follow: {
     padding: 8,
     alignItems:'center',
     backgroundColor: '#004d40',
     color: 'white',
     fontSize:15,
      borderRadius: 10,
  },
  images: {
   height:100,
   width: 100,
   borderRadius: 50,
 },

 profile: {
 flex: 1,
 flexDirection:'column',
 //  justifyContent: '',
  alignItems: 'center',
  //backgroundColor: '#c5cae9',
 //  marginBottom: 20,
  padding:40

 },
 foto: {
 flex: 1,
 flexDirection:'row',
 //  justifyContent: '',
  alignItems: 'center',
  //backgroundColor: '#c5cae9',
 //  marginBottom: 20,
  padding:2
 },
 gambar: {
 flexDirection:'row',
 justifyContent: 'space-around',
 padding:6
 //borderBottomWidth:1
 //backgroundColor: '#c5cae9',
 },
 pos: {
 flexDirection:'row',
 justifyContent: 'space-around',
 marginTop: 8,
 padding:6,
 color:'#004d40'
 //borderBottomWidth:1
 //backgroundColor: '#c5cae9',
 },
 followers: {
 flexDirection:'row',
   marginTop: 8,
 justifyContent: 'space-around',
 padding:6,
 color:'#004d40'
},
 nama: {
   alignSelf: 'center',
   color: 'white',
   paddingBottom: 10,
   fontWeight: 'bold',
   fontSize:16,
   },


 textInform: {
   marginLeft: 120,
   flexDirection:'row',
   marginTop:3,
   backgroundColor: 'rgba(0,0,0,0)',
   flexDirection:'row',
   marginTop: 2,
 },

 biodata: {
   flexDirection:'column',
   marginTop:3,
   backgroundColor: 'rgba(0,0,0,0)',
   flexDirection:'row',
   marginTop: 2,
   borderBottomWidth:1,
   borderColor:'grey'
 },
 imgCameraContainer: {
   position: 'absolute',
   bottom: 60,
   right: 10,
   borderRadius: 80,
   width: 100,
   height: 100,
   backgroundColor: '#004D40',
 },
 nama1: {
 color: 'black',
 marginBottom: 0,
 margin: 11,
 fontWeight: 'bold',
 fontSize:12,
 marginTop: 25
 },
 nama2: {
   color: 'grey',
   fontSize:11,
   marginTop:0,
   marginLeft:12
 },
 jarak: {
   color: 'white',
   fontSize:14,
   marginTop:0,
   marginLeft:12

 },
 likes: {
   height:25,
   width: 25,
   borderRadius: 50,
   marginTop: 25,
   marginLeft:12
 },
 komen: {
   height:25,
   width: 25,
   borderRadius: 50,
   marginTop: 25,
   margin: 10,

 },

 jarak1: {
 color: 'black',
 margin: 12,
 marginBottom:0
 },
 jarak2: {
 color: 'grey',
 margin: 12,
 marginBottom:0
 },
 posting: {
   color: 'white',
   fontSize:14,
   marginTop:0,
   marginLeft:12

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
});

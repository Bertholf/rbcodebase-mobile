  import React, { Component } from 'react'
  import {
     View,
     TouchableOpacity,
     TouchableHighlight,
     Text,
     StyleSheet,
     Image,
     ListView,
     ScrollView
  } from 'react-native'

  export default class Profile extends Component {

    state = {
      clicked : true
    }
  render (){
    return (
      <ScrollView>
      <View style={styles.container}>
        <View style = {styles.backgroundContainer}>
          <Image source = {require('./../../images/gunung.jpg')} resizeMode = 'cover' style = {styles.backdrop} />
          <View style ={styles.backgroundname}>
          <Text style = {styles.headline} colors={['#F00', 'transparent']}>Abu Dzar Alghifari</Text>
         </View>
          <View style={styles.textInform}>
          <Text style={styles.pos}>10 Post</Text>
          <Text style={styles.followers}>10K Followers</Text>
        <TouchableOpacity onPress={()=>this.toggleSwitch()}>
             <Text style = {styles.button}>
                {this.state.clicked ? 'Follow' : 'Unfollow' }</Text>
          </TouchableOpacity>
          </View>
        </View>
        <View>
          <Image style = {styles.logo} source = {require('./../../images/tauhid.png')} />
        </View>
        <View style={styles.biodata}>
        <Text style={styles.bio}>Bio</Text>
        <Text style={styles.isi}>There are a lot of stories out there, waiting for you to live them</Text>
        <Text style={styles.bio}>Last Hiking</Text>
        <View style={styles.posisi}>
        <Image style = {styles.icon} source = {require('./../../images/jarak.png')} />
        <Text style={styles.isi}>1200 Km</Text>
        </View>
        <View style={styles.posisi}>
        <Image style = {styles.icon} source = {require('./../../images/mountain.png')}/>
        <Text style={styles.isi}>Everest Mountain</Text>
        </View>
        <View style={styles.posisi}>
        <Image style = {styles.location} source = {require('./../../images/live.png')} />
        <Text style={styles.isi}>Indonesia</Text>
        </View>
        <View style={styles.posisi}>
        <TouchableOpacity>
             <Text style={styles.isi2}>View More</Text>
          </TouchableOpacity>

        </View>
      </View>

        </View>
  </ScrollView>

    )
  }
  toggleSwitch() {
    this.setState({
      clicked: !this.state.clicked
    })
  }
  }

  var styles = StyleSheet.create({
    welcome: {
     fontSize: 20,
     textAlign: 'center',
     margin: 10,
     color: '#FFFFFF'
   },
   touchable: {
     borderRadius: 100
   },
   button: {
     backgroundColor: '#FF0000',
     borderRadius: 100,
     height: 200,
     width: 200,
     justifyContent: 'center'
   },
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
      width: 90,
      height: 90,
      borderRadius:50,
      marginTop:80,
      marginLeft:20,
      flexDirection:'row',
      borderWidth: 1,
      borderColor:'grey'
      },
    backdrop: {
      flex:1,
      flexDirection: 'row',
      height:200,
      width:500,
    },
    headline: {
      fontSize: 20,
      fontWeight:'bold',
      textAlign: 'center',
      color: 'white',
      marginTop: -28,
      backgroundColor: 'hsla(20,100%,100%,0.3)',
      marginRight:110
    },
    button: {
       flexDirection: 'row',
       padding: 8,
       backgroundColor: '#2196F3',
       //justifyContent:'space-between',
       color: 'white',
       marginLeft:10,
       alignItems:'center',
       marginTop: 5,
       borderRadius: 2,
    },
    follow: {
       padding: 8,
       alignItems:'center',
       backgroundColor: '#2196F3',
       color: 'white',
       fontSize:15,
        borderRadius: 10,
    },
    images: {
     height:100,
     width: 100,
     borderRadius: 50,
   },
   icon: {
    height:20,
    width: 20,
    borderRadius: 50,

  },
  location: {
    height:20,
    width: 20,
    borderRadius: 50,
    marginBottom:12
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
   },
   pos: {
   flexDirection:'row',
   justifyContent: 'space-around',
   marginTop: 6,
   padding:6,
   color:'#2196F3'
   },
   followers: {
   flexDirection:'row',
   marginTop: 6,
   justifyContent: 'space-around',
   padding:6,
   color:'#2196F3'
  },
  bio: {
  flexDirection:'row',
  fontWeight:'bold',
  padding:6,
  color:'black',
  marginLeft:2.5
  },
  isi: {
    flexDirection:'row',
    color:'grey',
    marginLeft:10,
  },
  isi2: {
    flexDirection:'row',
    color:'#FF5722',
    marginLeft:240,
    marginBottom:12,
    borderRadius: 2,

  },
  daki: {
    textAlign:'right',
    color:'blue',
    marginLeft:100,
  },
   nama: {
     alignSelf: 'center',
     color: 'white',
     fontWeight: 'bold',
     fontSize:16,
     marginLeft:10
     },
   textInform: {
     marginLeft: 100,
     flexDirection:'row',
     backgroundColor: 'rgba(0,0,0,0)',
     flexDirection:'row',
   },

   posisi: {
     marginLeft: 8,
     flexDirection:'row',
     backgroundColor: 'rgba(0,0,0,0)',
     marginTop:5,
     flexDirection:'row',

   },

   biodata: {
     flexDirection:'column',
     backgroundColor: 'rgba(0,0,0,0)',
     marginTop: 20,
     borderBottomWidth:1,
     borderColor:'grey',
     marginLeft:20,
     marginRight:20
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
   })

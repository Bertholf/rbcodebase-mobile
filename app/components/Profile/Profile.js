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

export default Profile = (props) => {

   const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
   const dataSource = ds.cloneWithRows(props.data)
   return (
   <ScrollView>
      <View style = {styles.container}>
        <View style={{backgroundColor: '#26a69a', paddingBottom: 20}} >
          <View style = {styles.profile}>
          <Image source = {require('./app/images/images.jpeg')} style = {styles.images}  />
           <View>
              <Text style={styles.nama}>Abu Dzar Al Ghifari</Text>
              <Text style={styles.jarak}>Tracker : 125 Km</Text>
              <Text style={styles.posting}>Jumlah Posting : 12</Text>
           </View>
        </View>
        <View style={styles.gambar}>
         <TouchableOpacity>
            <Text style = {styles.button}>
               Message
            </Text>
         </TouchableOpacity>
         <TouchableOpacity>
            <Text style = {styles.follow}>
               Follow
            </Text>
         </TouchableOpacity>
       </View>
     </View>


        <View style = {styles.list}>
            <Image source = {require('./app/images/images.jpeg')} style = {styles.card}  />
            <View>
               <Text style={styles.nama1}>Abu Dzar Al Ghifari</Text>
                <Text style={styles.nama2}>1 minute ago</Text>
            </View>

       </View>

       <View>
           <Image source = {require('./app/images/map.png')} style = {styles.map} />
         </View>
           <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
             <Text style={styles.jarak}> Location: Mahameru</Text>
             <Text style={styles.jarak}> Jarak :190 KM</Text>
           </View>
         <View>
             <View>
              <View style={{flexDirection: 'row'}}>
              <Image source = {require('./app/images/like.jpg')} style = {styles.likes}  />
              <Image source = {require('./app/images/komen.png')} style = {styles.komen}  />
               </View>

                 <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                   <Text style={styles.jarak1}> 12 Likes</Text>
                   <Text style={styles.jarak1}> 10 Comment</Text>
                 </View>
               <View>
                 <Text style={styles.nama2}>1 minute ago</Text>
               </View>
            </View>
        </View>

        <View style = {styles.list}>
            <Image source = {require('./app/images/images.jpeg')} style = {styles.card}  />

              <View>
                 <Text style={styles.nama1}>Abu Dzar Al Ghifari</Text>
                <Text style={styles.nama2}>3 days ago</Text>
             </View>
        </View>

          <View>
             <Image source = {require('./app/images/maps.jpg')} style = {styles.map}  />
           </View>
             <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.jarak}> Location : Merbabu</Text>
               <Text style={styles.jarak}> Jarak :190 KM</Text>
             </View>
           <View>
             <View>
              <View style={{flexDirection: 'row'}}>
              <Image source = {require('./app/images/like.jpg')} style = {styles.likes}  />
              <Image source = {require('./app/images/komen.png')} style = {styles.komen}  />
               </View>
                 <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>

                   <Text style={styles.jarak1}> 10 Likes</Text>
                   <Text style={styles.jarak1}> 7 Comment</Text>
                 </View>
               <View>

               </View>
            </View>
          </View>

          <View style = {styles.list}>
              <Image source = {require('./app/images/images.jpeg')} style = {styles.card}  />
              <View>
                 <Text style={styles.nama1}>Abu Dzar Al Ghifari</Text>
                      <Text style={styles.nama2}>16 Januari</Text>
             </View>
           </View>

           <View>
               <Image source = {require('./app/images/map.png')} style = {styles.map}  />
               <View>
                <View style={{flexDirection: 'row'}}>
                <Image source = {require('./app/images/like.jpg')} style = {styles.likes}  />
                <Image source = {require('./app/images/komen.png')} style = {styles.komen}  />
                 </View>
                   <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                     <Text style={styles.jarak}> Location : Rinjani</Text>
                     <Text style={styles.jarak1}> 6 Likes</Text>
                     <Text style={styles.jarak1}> 7 Comment</Text>
                   </View>
                 <View>

                 </View>
              </View>
            </View>

       {/* <View>
       <ListView
             style = {styles.listContainer}
             dataSource={dataSource}
             renderRow={(rowData) => (
                   <Text style = {styles.listItem}>
                      {rowData}
                   </Text>
                )
             }
          />
        </View> */}
      </View>
    </ScrollView>
   )
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
      backgroundColor: '#004d40',
      //justifyContent:'space-between',
      color: 'white',
      alignItems:'center',
      borderRadius: 20,
   },
   follow: {
      padding: 8,
      alignItems:'center',
      backgroundColor: '#004d40',
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
  flex: 1,
  flexDirection:'row',
  //  justifyContent: '',
   alignItems: 'center',
   //backgroundColor: '#c5cae9',
  //  marginBottom: 20,
   padding:40

  },
  gambar: {
  flexDirection:'row',
  justifyContent: 'space-around',
  //borderBottomWidth:1
  //backgroundColor: '#c5cae9',
  },
  nama: {
    color: 'white',
    marginBottom: 0,
    margin: 11,
    fontWeight: 'bold',
    fontSize:16,
    marginTop: 0
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
})

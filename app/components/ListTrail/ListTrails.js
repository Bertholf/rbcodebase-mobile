import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, ListView } from 'react-native';
const styles = StyleSheet.create({
  container: {
    padding: 5,
    margin: 10,
    width: 340,
    height: 110,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 38,
    width: 400,
    height: 300,
  },
});
export default class ListTrails extends Component {
  render() {
    return (
      <View style={{flexDirection:'row', marginRight:10, marginLeft:-15, padding:10}}>
          <View style={{justifyContent: 'center',}}>
            <Image style={{width: 25, height:25, alignItems:'center'}} source={require('./../../images/arrow.png')} />
          </View>
          <View style={{flexDirection:'row', right: 5, }}>
            <Image style={{width: 100, height:100, backgroundColor:'#90caf9'}} source={require('./../../images/logo.png')} />
            <View style={{flexDirection:'column'}}>
                  <View style={{flexDirection:'row', justifyContent: 'space-between', backgroundColor:'#1976d2', height:40 }}>
                    <Text style={{fontSize:24, color:'#fff'}}>Longmire</Text>
                    <Text style={{fontSize:22, color:'#fff'}}>S 8511.02mi</Text>
                    <Image style={{width: 20, height:20, backgroundColor:'#1976d2'}} source={require('./../../images/morepert.png')} />
                  </View>
                  <View style={{flexDirection:'column', backgroundColor:'#1976d2', height:60 }}>
                    <Text style={{fontSize:18, color:'#fff'}}>On Trail</Text>
                    <Text style={{fontSize:22, color:'#fff'}}>WT mi-89</Text>
                  </View>
             </View>
           </View>
     </View>
    );
  }
}

import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
  ListView,
} from 'react-native';

const styles = StyleSheet.create({
  card: {
    flexDirection:'row',
    justifyContent:'flex-start',
    backgroundColor: '#42a5f5',
    borderColor: '#ffffff'
  },
  text: {
    fontSize: 1,
    textAlign: 'right',
    paddingTop:6,
    color:'#42a5f5',
    backgroundColor: '#ffffff',
    padding:8,
    marginTop:2,
  },
  nameProfile: {
    fontWeight:'bold',
    textAlign: 'left',
    color: '#ffffff',
    padding: 8,
    fontSize:30,

    backgroundColor: '#42a5f5'
  },
  mainView:{
    backgroundColor:'#ffffff',
  },
  square : {
    borderRadius: 70,
    width: 50,
    height: 50 ,
    margin : 10,
  }
});

export default class Notification extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John',
        'Joel',
        'James',
        'Jimmy',
        'Jabkbkbckson',
        'Jillian',
        'Julie',
        'Devin',
      ])
    };
  }
    renderRow(rowData) {
    return (
      <TouchableOpacity style={styles.mainView} onPress={()=>props.moveToDetail()}>
        <View style={styles.card}>
          <Image style={styles.square} source={{ uri: 'http://facebook.github.io/react/img/logo_og.png' }} />
          <View style={{ flexDirection: 'column', marginLeft: 15 }}>
          <Text style={styles.nameProfile}>{rowData}</Text>
            <Text style={styles.time}>Date/time</Text>
            <Text style={styles.mainView}></Text>
       </View>

        </View>
      </TouchableOpacity>
    );
}
render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={rowData => this.renderRow(rowData)}
      />
    );
  }
}

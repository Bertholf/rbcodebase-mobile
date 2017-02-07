import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { SwipeListView } from 'react-native-swipe-list-view';
const width = Dimensions.get('window').width;
const rows =
  [
    { id: 'andi1', name: 'Andi' },
    { id: 'budi1', name: 'Budi' },
    { id: 'chandra1', name: 'Chandra' },
    { id: 'donald1', name: 'Donald' },
    { id: 'erlangga1', name: 'Erlangga' },
    { id: 'faris1', name: 'Faris' },
    { id: 'gilang1', name: 'Gilang' },
    { id: 'joni1', name: 'Joni' },
    { id: 'kalo1', name: 'Kalo' },
    { id: 'restu1', name: 'Restu' },
    { id: 'dunia1', name: 'Dunia' },
    { id: 'tyo1', name: 'Tyo' },
    { id: 'bambang1', name: 'Bambang' },
    { id: 'fajar1', name: 'Fajar' },
    { id: 'akbar1', name: 'Akbar' },
  ];

const styles = StyleSheet.create({
  image2: {
    height: 100,
  },
  title: {
    fontSize: 16,
    padding: 5,
  },
  sinopsis: {
    paddingLeft: 5,
  },
  conteiner: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#4CAF50',
  },
  row: {
    padding: 16,
    backgroundColor: 'white',

  },
});


export default class Inbox extends Component {
  constructor(props) {
    super(props);
    this.state = { text1: 'Search' };
    const datasource = new ListView.DataSource(
      { rowHasChanged: (r1, r2) => r1 !== r2}
    );
    this.state = {
      dataSource: datasource.cloneWithRows(rows)
    };
  }
  renderRow(rowData) {
    return (
      <View style={styles.row}>
        <TouchableOpacity>
          <View style={{ borderBottomWidth: 0.5, alignItems: 'flex-start', justifyContent: 'center' }}>
            <Text style={{ fontSize: 18, paddingLeft: 6 }}>{rowData.name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  render(){
    return(
      <View style={{ flex: 1, paddingLeft: 8, paddingRight: 8 }}>
        <View style={{ backgroundColor: '#2196F3', borderBottomWidth: 1, borderColor: 'white', justifyContent: 'center', paddingBottom: 16, paddingLeft: 16, elevation: 2 }}>
          <Text style={{ fontSize: 20, color: 'white', paddingTop: 16 }}>INBOX</Text>
        </View>
        <View style={{ backgroundColor: '#FFFFFF', borderBottomWidth: 1, borderColor: '#FFFFFF', justifyContent: 'center', paddingBottom: 4, paddingLeft: 4, elevation: 2, marginBottom: 10, marginTop: 5 }}>
          <TextInput
            placeholder="Search"
            underlineColorAndroid="#2196F3"
            onChangeText={(text1) => this.setState({ text1 })}
            value={this.state.text}
          />
          {/* <Image style={{height: 2}} source={require('./../../images/search.png')}/> */}
        </View>
        <View style={{ flex: 13, borderWidth: 1, borderColor: 'white', elevation: 2 }}>
          <SwipeListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
            renderHiddenRow={data => (
              <View style={styles.conteiner}>
                <View style={{ paddingTop: 16, paddingBottom: 16, backgroundColor: 'rgba(0,0,0,0)', flexDirection: 'row' }}>
                  <View style={{ paddingRight: 180 * 0.5 }}>
                    <TouchableOpacity>
                      <Text style={{ fontSize: 16, paddingLeft: 16, color: 'white' }}>Archieve</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{ paddingLeft: 180 * 0.5 }}>
                    <TouchableOpacity>
                      <Text style={{ fontSize: 16, paddingLeft: 16, textAlign: 'right', color: 'white' }}>Delete</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
            leftOpenValue={80}
            rightOpenValue={-80}
          />
          <ActionButton buttonColor="#2196F3">
            <ActionButton.Item buttonColor="#2196F3" title="Add Chatting" >
              <Icon name="md-create" />
            </ActionButton.Item>
          </ActionButton>
        </View>
      </View>
    );
  }
}

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Dimensions,
  TouchableOpacity,
  TextInput,
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
  ];

const styles = StyleSheet.create({
  image2: {
    height: 100,
  },
  title: {
    fontSize: 25,
    padding: 5,
  },
  sinopsis: {
    paddingLeft: 5,
  },
  conteiner: {
    flex: 1,
    flexDirection: 'column',
  },
  row: {
    padding: 7,
    flex: 1,
    backgroundColor: 'white',

  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
    alignItems: 'center',
  },
});


export default class Inbox extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Search' };
    const datasource = new ListView.DataSource(
      { rowHasChanged: (r1, r2) => r1 !== r2}
    );
    this.state ={
      dataSource: datasource.cloneWithRows(rows)
    };
  }
  _onPressItem(id) {
    this.props.navigator.push({
    });
  }
  renderRow (rowData, sectionId) {
    return(
      <View style={styles.row}>
        <TouchableOpacity onPress={() => this._onPressItem(rowData.id)}>
            <View style={{ borderBottomWidth: 0.5, alignItems: 'flex-start', justifyContent: 'center' }}>
              <Text style={{ fontSize: 18, paddingLeft: 6, }}>{rowData.name}</Text>
            </View>
        </TouchableOpacity>
      </View>
    );
  }

  render(){
    return(
      <View style={{ flex: 1, paddingLeft: 8, paddingRight: 8 }}>
        <TextInput
          style={{borderColor: 'gray', borderWidth: 1, marginLeft: 8, marginRight: 8, paddingLeft: 8 }}
          placeholder="Search"
          onChangeText={text => this.setState({text})}
          value={this.state.text}
        />
        <View style={{flex:1 }}>
          <SwipeListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
            renderHiddenRow={ data => (
              <View style={styles.conteiner}>
                <View style={{ paddingTop: 6, paddingBottom:6, backgroundColor: 'rgba(0,0,0,0)', flexDirection: 'row' }}>
                  <View style={{ paddingRight: 180 * 0.5 }}>
                    <Text style={{ fontSize: 18, paddingLeft: 16 }}>Archieve</Text>
                  </View>
                  <View style={{ paddingLeft: 180 * 0.5 }}>
                    <Text style={{ fontSize: 18, textAlign: 'right' }}>Delete</Text>
                  </View>
                </View>
              </View>
            )}
            leftOpenValue={77}
            rightOpenValue={-70}
          />
      </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'flex-end',
              alignItems: 'flex-start',
            }}
          >
            <ActionButton buttonColor="rgba(231,76,60,1)">
              <ActionButton.Item buttonColor= '#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
                <Icon name="md-create" style={styles.actionButtonIcon} />
              </ActionButton.Item>
            </ActionButton>
          </View>
        </View>
    );
  }
}

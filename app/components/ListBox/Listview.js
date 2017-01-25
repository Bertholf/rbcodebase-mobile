import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { SwipeListView } from 'react-native-swipe-list-view';
const width = Dimensions.get('window').width
const rows =
[
    {id: 'text', name:'nama'},
    {id: 'umur', name:'age'},
    {id: 'alamat', name:'address'},
    {id: 'pnddk', name:'occupation'},
    {id: 'RI', name:'indonesia'},
    {id: 'amr', name:'amir'},
    {id: 'mmh', name:'mamah'},
    {id: 'bpk', name:'bapak'},
    {id: 'telkmsl', name:'telkomsel'},
    {id: 'jkw', name:'jokowi'},
];


export default class ListSearch extends Component {
  constructor(props){
    super(props);
    this.state = {text: 'Search'};
    this.state ={}
    const datasource = new ListView.DataSource(
      { rowHasChanged: (r1, r2) => r1 !== r2}
    );
    this.state ={
      dataSource: datasource.cloneWithRows(rows)
    }
  }
  _onPressItem(id) {
    this.props.navigator.push({
    })
  }
  renderRow = (rowData, sectionId) => {
    return(
      <View style={styles.row}>
        <TouchableOpacity onPress={() => this._onPressItem(rowData.id)}>
            <View>
              <Text>{rowData.name}</Text>
            </View>
        </TouchableOpacity>
      </View>
    );
  }

  render(){
    return(
        <View style={{flex: 1,}}>
        <TextInput
        style={{borderColor: 'gray', borderWidth: 1}}
        placeholder="Plese Input Keyword For Searching Anything"
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        />
      <SwipeListView style= {{flex: 1}}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        renderHiddenRow={ data => (
        <View style={styles.conteiner}>
            <View style={{position:'absolute', width: width * .5,top: 0, bottom: 0, left: 0}}>
              <Text style={{fontSize: 20}}>Archieve</Text>
            </View>
            <View style={{top: 0, bottom: 0, right: 0, padding: 5, position: 'absolute', width: width * .5}}>
              <Text style= {{textAlign: 'right', fontSize: 23}}>Delete</Text>
            </View>

        </View>
        )}
        leftOpenValue={77}
        rightOpenValue={-70}
      />
      <View style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
    }}>

      <ActionButton buttonColor="rgba(231,76,60,1)">
        <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
          <Icon name="md-create" style={styles.actionButtonIcon} />
      </ActionButton.Item>

      </ActionButton>
      </View>
    </View>
    )
  }
}
  const styles = StyleSheet.create({
    image2: {
      height: 100,
    },
    title: {
      fontSize:25,
      padding: 5
    },
    sinopsis: {
      paddingLeft: 5
    },
    conteiner:{
      flex: 1,
      flexDirection: 'column',

    },
    row:{
      padding: 7,
      marginBottom: 0,
      backgroundColor: 'skyblue',
    },
    actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
    alignItems: 'center'
    },
  });

import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView, TouchableOpacity, DeviceEventEmitter } from 'react-native';

export default class DeviceState extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
        rowHasChanged: function(r1, r2) : bool {
          return (r1["name"] !== r2["name"]);
        }});

    this.state = {
      ds: ds,
      dataRows: this._genRows(),
      dataSource: ds.cloneWithRows(this._genRows({}))
    }
  }

  render() {
    return (
      <View style={{flex: 1, paddingTop: 22}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={
            (data) => <View style={styles.container}>
              <Text style={styles.text}>{ data.name }</Text>
            </View>
          }
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
          renderHeader={() => <View style={styles.container}><Text>Device State</Text></View>}
        />
      </View>
    );
  }

  componentDidMount() {
    var that = this
    var newDs = [];
    DeviceEventEmitter.addListener('power', function(e) {
      newDs = that.state.dataRows.slice();
      if (e.state) {
        newDs[1].name = 'Power status: Connected';
      } else {
        newDs[1].name = 'Power status: Disconnected';
      }
      that.updateRows(newDs);
    });

    DeviceEventEmitter.addListener('airplane', function(e) {
      newDs = that.state.dataRows.slice();
      if (e.state) {
        newDs[2].name = 'Airplane mode: activated';
      }
      that.updateRows(newDs);
    });

    DeviceEventEmitter.addListener('battery', function(e) {
      newDs = that.state.dataRows.slice();
      if (e.state) {
        newDs[1].name = 'Battery is OK';
      } else {
        newDs[1].name = 'Battery is LOW';
      }
      that.updateRows(newDs);
    });

    DeviceEventEmitter.addListener('storage', function(e) {
      newDs = that.state.dataRows.slice();
      if (e.state) {
        newDs[1].name = 'Storage is OK';
      } else {
        newDs[1].name = 'Storage is LOW';
      }
      that.updateRows(newDs);
    });
  }

  updateRows(newDs) {
    this.setState({
      dataRows: newDs,
      dataSource: this.state.ds.cloneWithRows(newDs)
    });
  }

  _genRows() {
    return [{
      id: 'battery',
      name: 'Battery status'
    },
    {
      id: 'power',
      name: 'Power status'
    },
    {
      id: 'airplane',
      name: 'On Airplane mode'
    },
    {
      id: 'storage',
      name: 'Storage status'
    }]
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    marginLeft: 12,
    fontSize: 16
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#8e8e8e'
  }
});

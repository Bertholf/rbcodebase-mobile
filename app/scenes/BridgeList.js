import React, { Component } from 'react';
import { AppRegistry, ListView, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

export default class BridgetList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource(
      { rowHasChanged: (r1, r2) => r1 !== r2 }
    );

    this.state = {
      dataSource: ds.cloneWithRows(this._genRows({}))
    }
  }

  render() {
    return(
      <View style={{flex: 1, paddingTop: 22}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={
            (data) => <View style={styles.container}>
              <TouchableOpacity onPress={() => this._onPressItem(data.id)}>
                <Text style={styles.text}>{ data.name }</Text>
              </TouchableOpacity>
            </View>
          }
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
        />
      </View>
    )
  }

  _onPressItem(id) {
    this.props.navigator.push({
      name: id
    })
  }

  _genRows() {
    return [{
      id: 'ds',
      name: 'Device States'
    },
    {
      id: 'sp',
      name: 'Shared Preferences'
    },
    {
      id: 'rest',
      name: 'Rest With Retrofit'
    },
    {
      id: 'contact',
      name: 'Contact'
    },
    {
      id: 'notif',
      name: 'Notification'
    },
    {
      id: 'receiver',
      name: 'Broadcast Receiver'
    },
    {
      id: 'service',
      name: 'Background Service'
    },
    {
      id: 'sms',
      name: 'SMS'
    },
    {
      id: 'db',
      name: 'Native Database'
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

import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { ContactProviderAndroid } from './../lib/Modules';

export default class Contact extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: function(r1, r2) : bool {
        return (r1 !== r2);
      }});

      this.state = {
        query: '',
        ds: ds,
        dataRows: this._onSearch(),
        dataSource: ds.cloneWithRows([])
      }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text>Contact</Text>
        </View>
        <View style={styles.form}>
          <TextInput
            placeholder="Search.."
            style={styles.input}
            value={this.state.query}
            onChangeText={ (query) => {
              this._onSearch(query)
              this.setState({ query: query })
            }}
          />
        </View>
        <View style={styles.tablewrapper}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={
              (data) => <View style={styles.table}>
                <TouchableOpacity onPress={() => this._onPressItem(data.id)}>
                  <Text style={styles.text}>{ data.name }</Text>
                  <Text style={styles.text}>{ data.phone }</Text>
                </TouchableOpacity>
              </View>
            }
            renderHeader={() => <View style={styles.table}>
                <Text style={[styles.text, styles.textheader]}>Result</Text>
              </View>}
            renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
          />
        </View>
      </View>
    );
  }

  _onSearch(query) {
    var result = [];
    var that = this;

    if (query == "") {
      that.setState({
        dataSource: that.state.ds.cloneWithRows(result)
      });
      return;
    }

    ContactProviderAndroid.search(query).then(function(resp) {
      data = JSON.parse(resp);
      data.forEach(function(contact) {
        result.push({
          id: contact.id,
          name: contact.name,
          phone: contact.phone
        });
      });
      that.setState({
        dataSource: that.state.ds.cloneWithRows(result)
      });
    })
  }

  _onPressItem(id) {

  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    flexDirection: 'column'
  },
  wrapper: {
    padding: 10
  },
  form: {
    padding: 10,
    flexDirection: 'row'
  },
  input: {
    flex: 1,
    height: 50
  },
  tablewrapper: {
    flex: 1,
    padding: 10,
    marginTop: 20
  },
  table: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
    flex: 1
  },
  textheader: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#8e8e8e'
  }
});

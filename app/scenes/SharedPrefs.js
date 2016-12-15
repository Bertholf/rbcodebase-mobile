import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, ListView } from 'react-native';

import { SharedPrefsAndroid } from './../lib/Modules';
import { strings } from './../lib/Locale';

export default class SharedPrefs extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
        rowHasChanged: function(r1, r2) : bool {
          return (r1 !== r2);
        }});
    this.state = {
      key: '',
      value: '',
      ds: ds,
      dataRows: this._genRows(),
      dataSource: ds.cloneWithRows([])
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text>Shared Preferences</Text>
        </View>
        <View style={styles.form}>
          <TextInput
            placeholder="Key"
            style={styles.input}
            value={this.state.key}
            onChangeText={ (text) => this.setState({ key: text }) }
          />
          <TextInput
            placeholder="Value"
            style={styles.input}
            value={this.state.value}
            onChangeText={ (text) => this.setState({ value: text }) }
          />
        </View>
        <View>
          <Button
            title={strings.save}
            color='green'
            onPress={this.onSave.bind(this)}
            />
        </View>
        <View style={styles.tablewrapper}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={
              (data) => <View style={styles.table}>
                <Text style={styles.text}>{ data.key }</Text>
                <Text style={styles.text}>{ data.value }</Text>
              </View>
            }
            renderHeader={() => <View style={styles.table}>
              <Text style={[styles.text, styles.textheader]}>Key</Text>
              <Text style={[styles.text, styles.textheader]}>Value</Text>
              </View>}
            renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
          />
        </View>
        <View style={{flex: 1}}>
          <Button
            title={strings.clear}
            color='green'
            onPress={this.onClear.bind(this)}
            />
        </View>
      </View>
    );
  }

  onClear() {
    var that = this;
    SharedPrefsAndroid.clear().then(function() {
      that._genRows();
    });
  }

  onSave() {
    var value = this.state.value;
    var key = this.state.key;
    if (typeof value == 'string') {
      SharedPrefsAndroid.saveString(key, value).then(this._afterSave());
    } else if (typeof value == 'number') {
      SharedPrefsAndroid.saveInt(key, value).then(this._afterSave());
    } else if (typeof value == 'float') {
      SharedPrefsAndroid.saveFloat(key, value).then(this._afterSave());
    } else if (typeof value == 'boolean') {
      SharedPrefsAndroid.saveBoolean(key, value).then(this._afterSave());
    }

    this._afterSave();
  }

  _afterSave() {
    this.setState({ key: '', value: '' });
    this._genRows();
  }

  _genRows() {
    var result = [];
    var that = this;
    SharedPrefsAndroid.getAll().then(function(res) {
      data = JSON.parse(res);
      data.forEach(function(sp) {
        result.push({
          key: sp.key,
          value: sp.value
        });
      });
      that.setState({
        dataSource: that.state.ds.cloneWithRows(result)
      });
    });
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

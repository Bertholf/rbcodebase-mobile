import React from 'react';
import {
  Text,
  View,
  Button,
  Alert,
  Picker,
} from 'react-native';
import styles from './style';

const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};

const privacy = () => {
  return (
    <View style={styles.styleBackground}>
      <View style={{ flexDirection: 'row',justifyContent: 'space-between' }}>
        <Text style={styles.styleText}>
          Comfirm request when someone follow
        </Text>
        <Picker style={{ width: 70 }}>
          <Picker.Item label="Yes" value="ys" />
          <Picker.Item labe="No" value="no" />
        </Picker>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.styleText}>
          Who can follow you
        </Text>
        <Picker style={{ width: 70 }}>
          <Picker.Item label="Yes" value="ys" />
          <Picker.Item label="No" value="no" />
        </Picker>
      </View>
      <View style ={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.styleText}>
          Who can comment on your posts
        </Text>
        <Picker style={{ width: 70 }}>
          <Picker.Item label="Yes" value="ys" />
          <Picker.Item label="No" value="no" />
        </Picker>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.styleText}>
          Who can post on your timeline
        </Text>
        <Picker style={{ width: 70 }}>
          <Picker.Item label="Yes" value="ys" />
          <Picker.Item label="No" value="no" />
        </Picker>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.styleText}>
          Comfirm request when someone follow
        </Text>
        <Picker style={{ width: 70 }}>
          <Picker.Item label="Yes" value="ys" />
          <Picker.Item label="No" value="no" />
        </Picker>
      </View>
      <View>
        <Button
          title="SAVE"
          onPress={onButtonPress}
          color="#08bcde"
        />
      </View>
    </View>
  );
};
export default privacy ;

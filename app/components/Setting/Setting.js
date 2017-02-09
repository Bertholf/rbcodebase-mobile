import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './../../components/Setting/Style';


const Setting = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity onPress={Actions.account} >
            <View style={styles.list}>
              <Image style={styles.imagesLeft} source={require('../../images/ic_account_box_black_24dp.png')} />
              <Text style={styles.text}>Account</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.privacy}>
            <View style={styles.list}>
              <Image style={styles.imagesLeft} source={require('../../images/ic_build_black_24dp.png')} />
              <Text style={styles.text}>Privacy</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.email}>
            <View style={styles.list}>
              <Image style={styles.imagesLeft} source={require('../../images/ic_contact_mail_black_24dp.png')} />
              <Text style={styles.text}>Email</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.deactive}>
            <View style={styles.list1}>
              <Text style={styles.deactive}>Deactive</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default Setting;

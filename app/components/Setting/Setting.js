import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './../../components/Setting/Style';

const next = require('./../../images/ic_navigate_next_2x.png');

const Setting = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView>
        <View style={styles.container}>
            <Text style={styles.titleText}>Account</Text>
          <TouchableOpacity onPress={Actions.account} >
            <View style={styles.list}>
              <View style={{alignSelf: 'center'}}>
                <Text style={styles.text}>Name</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{ alignSelf: 'center'}}>My Name</Text>
                <Image style={styles.image} source={next} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.privacy}>
            <View style={styles.list}>
              <View style={{alignSelf: 'center' }}>
                <Text style={styles.text}>Username</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{ alignSelf: 'center' }}>@tester</Text>
                <Image style={styles.image} source={next} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.email}>
            <View style={styles.list}>
              <View style={{ alignSelf: 'center' }}>
                <Text style={styles.text}>Birthday</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{ alignSelf: 'center'}}>1 Jan 2017</Text>
                <Image style={styles.image} source={next} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.account} >
            <View style={styles.list}>
              <View style={{alignSelf: 'center'}}>
                <Text style={styles.text}>Mobile Number</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{ alignSelf: 'center'}}>+621293823</Text>
                <Image style={styles.image} source={next} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.account} >
            <View style={styles.list}>
              <View style={{alignSelf: 'center'}}>
                <Text style={styles.text}>Email</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{ alignSelf: 'center'}}>email@domain.com</Text>
                <Image style={styles.image} source={next} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.account} >
            <View style={styles.list}>
              <View style={{alignSelf: 'center'}}>
                <Text style={styles.text}>Password</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{ alignSelf: 'center'}}>email@domain.com</Text>
                <Image style={styles.image} source={next} />
              </View>
            </View>
          </TouchableOpacity>
          <Text style={styles.titleText}>Preference</Text>
          <TouchableOpacity onPress={Actions.account} >
            <View style={styles.list}>
              <View style={{alignSelf: 'center'}}>
                <Text style={styles.text}>Privacy</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image style={styles.image} source={next} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.account} >
            <View style={styles.list}>
              <View style={{alignSelf: 'center'}}>
                <Text style={styles.text}>Notificaitons</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image style={styles.image} source={next} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.account} >
            <View style={styles.list}>
              <View style={{alignSelf: 'center'}}>
                <Text style={styles.text}>Ad Preference</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image style={styles.image} source={next} />
              </View>
            </View>
          </TouchableOpacity>
          <Text style={styles.titleText}>More Information</Text>
          <TouchableOpacity onPress={Actions.account} >
            <View style={styles.list}>
              <View style={{alignSelf: 'center'}}>
                <Text style={styles.text}>Support</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image style={styles.image} source={next} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.account} >
            <View style={styles.list}>
              <View style={{alignSelf: 'center'}}>
                <Text style={styles.text}>Privacy Policy</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image style={styles.image} source={next} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.account} >
            <View style={styles.list}>
              <View style={{alignSelf: 'center'}}>
                <Text style={styles.text}>Term of Services</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image style={styles.image} source={next} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.account} >
            <View style={styles.list}>
              <View style={{alignSelf: 'center'}}>
                <Text style={styles.text}>Licences</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image style={styles.image} source={next} />
              </View>
            </View>
          </TouchableOpacity>
          <Text style={styles.titleText}>Account Actions</Text>
          <TouchableOpacity onPress={Actions.account} >
            <View style={styles.list}>
              <View style={{alignSelf: 'center'}}>
                <Text style={styles.text}>Cleaser Cache</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image style={styles.image} source={next} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.account} >
            <View style={styles.list}>
              <View style={{alignSelf: 'center'}}>
                <Text style={styles.text}>Log Out</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image style={styles.image} source={next} />
              </View>
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

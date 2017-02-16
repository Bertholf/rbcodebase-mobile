import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import strings from '../../localizations';
import styles from './../../components/Setting/Style';

const next = require('./../../images/ic_navigate_next_2x.png');

const Setting = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.titleText}>{strings.settings.account}</Text>
          <TouchableOpacity onPress={Actions.account} >
            <View style={styles.list}>
              <View style={{alignSelf: 'center'}}>
                <Text style={styles.text}>{strings.settings.name}</Text>
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
                <Text style={styles.text}>{strings.settings.username}</Text>
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
                <Text style={styles.text}>{strings.settings.birthday}</Text>
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
                <Text style={styles.text}>{strings.settings.mobile}</Text>
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
                <Text style={styles.text}>{strings.settings.email}</Text>
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
                <Text style={styles.text}>{strings.settings.password}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{ alignSelf: 'center'}}>email@domain.com</Text>
                <Image style={styles.image} source={next} />
              </View>
            </View>
          </TouchableOpacity>
          <Text style={styles.titleText}>{strings.settings.preference}</Text>
          <TouchableOpacity onPress={Actions.account} >
            <View style={styles.list}>
              <View style={{alignSelf: 'center'}}>
                <Text style={styles.text}>{strings.settings.privacy}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image style={styles.image} source={next} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.account} >
            <View style={styles.list}>
              <View style={{alignSelf: 'center'}}>
                <Text style={styles.text}>{strings.settings.notification}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image style={styles.image} source={next} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.account} >
            <View style={styles.list}>
              <View style={{alignSelf: 'center'}}>
                <Text style={styles.text}>{strings.settings.adPreference}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image style={styles.image} source={next} />
              </View>
            </View>
          </TouchableOpacity>
          <Text style={styles.titleText}>{strings.settings.moreInfo}</Text>
          <TouchableOpacity onPress={Actions.account} >
            <View style={styles.list}>
              <View style={{alignSelf: 'center'}}>
                <Text style={styles.text}>{strings.settings.support}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image style={styles.image} source={next} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.pp} >
            <View style={styles.list}>
              <View style={{alignSelf: 'center'}}>
                <Text style={styles.text}>{strings.settings.privayPolicy}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image style={styles.image} source={next} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.tos} >
            <View style={styles.list}>
              <View style={{alignSelf: 'center'}}>
                <Text style={styles.text}>{strings.settings.termService}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image style={styles.image} source={next} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.license} >
            <View style={styles.list}>
              <View style={{alignSelf: 'center'}}>
                <Text style={styles.text}>{strings.settings.licence}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image style={styles.image} source={next} />
              </View>
            </View>
          </TouchableOpacity>
          <Text style={styles.titleText}>{strings.settings.accountAction}</Text>
          <TouchableOpacity onPress={Actions.account} >
            <View style={styles.list}>
              <View style={{alignSelf: 'center'}}>
                <Text style={styles.text}>{strings.settings.clearChache}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image style={styles.image} source={next} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.account} >
            <View style={styles.list}>
              <View style={{alignSelf: 'center'}}>
                <Text style={styles.text}>{strings.settings.logout}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image style={styles.image} source={next} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default Setting;

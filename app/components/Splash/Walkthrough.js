import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {
  IndicatorViewPager, PagerDotIndicator
} from 'rn-viewpager';
import { Actions } from 'react-native-router-flux';
import strings from '../../localizations';

const { height, width } = Dimensions.get('window');
export default class walkthrough extends Component {
  render() {
    strings.setLanguage('en');
    return (
      // console.log(strings);
      <View style={{ backgroundColor: '#2196F3', flex: 1 }}>
          <IndicatorViewPager
            style={{ flex: 1 }}
            indicator={this._renderDotIndicator()}
          >
            <View style={{ flex: 1, backgroundColor:'#26A69A', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', paddingBottom: 50 }}>
              <View style={{flex:5}}>
                <Image style={{ height: 270,width: width * 1 }} source={require('./../../images/bromo.jpg')} />
              </View>
              <View style={{flex: 4, flexDirection: 'column', alignItems: 'center', padding: 20, justifyContent: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>{strings.walkthrought.title}</Text>
                <Text>{strings.walkthrought.description}</Text>
              </View>
            </View>
            <View style={{ flex: 1, backgroundColor:'#26C6DA', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', paddingBottom: 50 }}>
              <View style={{flex:5}}>
                <Image style={{ height: 270, width: width * 1 }} source={require('./../../images/everest.jpg')} />
              </View>
              <View style={{flex: 4, flexDirection: 'column', alignItems: 'center', padding: 20, justifyContent: 'center' }}>
                <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>FEATURE OR BENEFIT 2</Text>
                <Text>The 93 mile long Wonderland Trail circumnavigates Mt Rainier withinroad and can be done as day hikes</Text>
              </View>
            </View>
            <View style={{ flex: 1, backgroundColor:'#29B6F6', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', paddingBottom: 50 }}>
              <View style={{flex:5}}>
                <Image style={{ height: 270,width: width * 1 }} source={require('./../../images/jayawijaya.jpg')} />
              </View>
              <View style={{flex: 4, flexDirection: 'column', alignItems: 'center', padding: 20, justifyContent: 'center' }}>
                <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 10}}>ENJOY UNLIMITED PAYES</Text>
                <Text>The 93 mile long Wonderland Trail circumnavigates Mt Rainier withinroad and can be done as day hikes</Text>
              </View>
            </View>
            <View style={{ flex: 1, backgroundColor:'#64B5F6', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', paddingBottom: 50 }}>
              <View style={{flex:5}}>
                <Image style={{ height: 270,width: width * 1 }} source={require('./../../images/rinjani.jpg')} />
              </View>
            <View style={{flex: 4, flexDirection: 'column', alignItems: 'center', padding: 20, justifyContent: 'center' }}>
                <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 10}}>ENJOY UNLIMITED PAYES</Text>
                <Text>The 93 mile long Wonderland Trail circumnavigates Mt Rainier withinroad and can be done as day hikes</Text>
            </View>
            </View>
          </IndicatorViewPager>
        <View style={{ backgroundColor: '#2196F3', alignItems: 'center', justifyContent: 'center', height: 50 }}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={Actions.login}
            style={{ flex: 1, backgroundColor: '#2196F3'}}
          >
            <Text style={{ padding: 10, fontWeight: '200', fontSize: 17, color: 'white', justifyContent: 'center' }}> {strings.walkthrought.buttonText} </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  _renderTitleIndicator() {
    return <PagerTitleIndicator titles={['one', 'two', 'three', 'four']} />;
  }
  _renderDotIndicator() {
    return <PagerDotIndicator pageCount={4} />;
  }
}

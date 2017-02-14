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
const { height, width } = Dimensions.get('window');
export default class walkthrough extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#2196F3', flex: 1 }}>
          <IndicatorViewPager
            style={{ flex: 1 }}
            indicator={this._renderDotIndicator()}
          >
            <View style={{ flex: 1, backgroundColor:'#26A69A', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', paddingBottom: 50 }}>
              <View style={{flex:5}}>
                <Image style={{ height: 270,width: width * 1 }} source={require('./../../images/Bromo.jpg')} />
              </View>
              <View style={{flex: 4, flexDirection: 'column', alignItems: 'center', padding: 20, justifyContent: 'center' }}>
                <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 10}}>FEATURE OR BENEFIT</Text>
                <Text>The 93 mile long Wonderland Trail circumnavigates Mt Rainier withinroad and can be done as day hikes</Text>
              </View>
            </View>
            <View style={{ flex: 1, backgroundColor:'#26C6DA', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', paddingBottom: 50 }}>
              <View style={{flex:5}}>
                <Image style={{ height: 270, width: width * 1 }} source={require('./../../images/Everest.jpg')} />
              </View>
              <View style={{flex: 4, flexDirection: 'column', alignItems: 'center', padding: 20, justifyContent: 'center' }}>
                <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>FEATURE OR BENEFIT 2</Text>
                <Text>The 93 mile long Wonderland Trail circumnavigates Mt Rainier withinroad and can be done as day hikes</Text>
              </View>
            </View>
            <View style={{ flex: 1, backgroundColor:'#29B6F6', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', paddingBottom: 50 }}>
              <View style={{flex:5}}>
                <Image style={{ height: 270,width: width * 1 }} source={require('./../../images/Jayawijaya.jpg')} />
              </View>
              <View style={{flex: 4, flexDirection: 'column', alignItems: 'center', padding: 20, justifyContent: 'center' }}>
                <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 10}}>ENJOY UNLIMITED PAYES</Text>
                <Text>The 93 mile long Wonderland Trail circumnavigates Mt Rainier withinroad and can be done as day hikes</Text>
              </View>
            </View>
            <View style={{ flex: 1, backgroundColor:'#64B5F6', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', paddingBottom: 50 }}>
              <View style={{flex:5}}>
                <Image style={{ height: 270,width: width * 1 }} source={require('./../../images/Rinjani.jpg')} />
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
            style={{ flex: 1, backgroundColor: '#2196F3', elevation: 2 }}
          >
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ padding: 10, fontWeight: '200', fontSize: 17, color: 'white', alignSelf: 'center', justifyContent: 'center' }}> GET STARTED </Text>
            </View>
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

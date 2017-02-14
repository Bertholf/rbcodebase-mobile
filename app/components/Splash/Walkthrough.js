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
const { height } = Dimensions.get('window');
export default class walkthrough extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#2196F3' }}>
          <IndicatorViewPager
            style={{ height: height * 0.91 }}
            indicator={this._renderDotIndicator()}
          >
            <View style={{flex: 1,paddingLeft: 12, paddingRight: 12, backgroundColor:'#3498db', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', paddingBottom: 50 }}>
              <View style={{flex:5}}>
                <Image style={{ height: 270, width: 270 }} source={require('./../../images/android1.png')} />
              </View>
              <View style={{flex: 4, alignItems: 'center' }}>
                <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 10}}>FEATURE OR BENEFIT</Text>
                <Text>The 93 mile long Wonderland Trail circumnavigates Mt Rainier withinroad and can be done as day hikes</Text>
              </View>
            </View>
            <View style={{flex: 1,paddingLeft: 10, paddingRight: 10, backgroundColor: '#1abc9c', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', paddingBottom: 50 }}>
              <View style={{flex:5}}>
                <Image style={{ height: 270, width: 270 }} source={require('./../../images/android2.png')} />
              </View>
              <View style={{flex: 4, alignItems: 'center' }}>
                <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>FEATURE OR BENEFIT 2</Text>
                <Text>The 93 mile long Wonderland Trail circumnavigates Mt Rainier withinroad and can be done as day hikes</Text>
              </View>
            </View>
            <View style={{flex: 1,paddingLeft: 10, paddingRight: 10, backgroundColor: '#2ecc71', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', paddingBottom: 50 }}>
              <View style={{flex:5}}>
                <Image style={{ height: 270, width: 270}} source={require('./../../images/android4.png')} />
              </View>
              <View style={{flex: 4, alignItems: 'center' }}>
                <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 10}}>ENJOY UNLIMITED PAYES</Text>
                <Text>The 93 mile long Wonderland Trail circumnavigates Mt Rainier withinroad and can be done as day hikes</Text>
              </View>
            </View>
            <View style={{flex: 1,paddingLeft: 10, paddingRight: 10, backgroundColor: '#e74c3c', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', paddingBottom: 50 }}>
              <View style={{flex:5}}>
                <Image style={{ height: 270 , width: 270 }} source={require('./../../images/android3.png')} />
              </View>
              <View style={{flex: 4, alignItems: 'center' }}>
                <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 10}}>ENJOY UNLIMITED PAYES</Text>
                <Text>The 93 mile long Wonderland Trail circumnavigates Mt Rainier withinroad and can be done as day hikes</Text>
              </View>
            </View>
          </IndicatorViewPager>
        <View style={{ backgroundColor: '#2196F3', alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={Actions.login}
            style={{ height: 50, backgroundColor: '#2196F3', alignSelf: 'stretch', elevation: 2 }}
          >
            <Text style={{ fontWeight: '200', fontSize: 24, color: 'white', alignSelf: 'center'}}> Get Started </Text>
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

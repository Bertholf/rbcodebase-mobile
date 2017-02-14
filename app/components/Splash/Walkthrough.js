import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Button,
} from 'react-native';
import {
  IndicatorViewPager, PagerDotIndicator
} from 'rn-viewpager';
import { Actions } from 'react-native-router-flux';

const { height, width } = Dimensions.get('window');
export default class walkthrough extends Component {
  constructor(props) {
    super(props);
    this.state =
    {
      gambar: './../../images/account.png',
      subtitle: 'INTRODUCTION2',
      subtitle2: 'WEATHER AND TRAIL CONDITIONS',
    };
          // {
          //   gambar: "./Img/ic_android_black_24dp.png",
          //   subtitle: "INTRODUCTION",
          //   subtitle2: "WEATHER AND TRAIL CONDITIONS",
          // },
          // {
          //   gambar: './Img/ic_perm_media_black_24dp.png',
          //   subtitle: "INTRODUCTION",
          //   subtitle2: "WEATHER AND TRAIL CONDITIONS",
          // },
          // {
          //   gambar: "./ic_room_black_24dp.png",
          //   subtitle: "INTRODUCTION",
          //   subtitle2: "WEATHER AND TRAIL CONDITIONS",
          // };
  }

  render() {
    return (
      <View>
          <IndicatorViewPager
            style={{ height: height * 0.91 }}
            indicator={this._renderDotIndicator()}
          >
            <View style={{flex: 1,paddingLeft: 12, paddingRight: 12, backgroundColor:'#3498db', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', paddingBottom: 50 }}>
              <View style={{flex:5}}>
                <Image style={{ height: 300 , width: 300, }} source={require('./../../images/account.png')} />
              </View>
              <View style={{flex: 4, alignItems: 'center' }}>
                <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 10}}>FEATURE OR BENEFIT</Text>
                <Text>The 93 mile long Wonderland Trail circumnavigates Mt Rainier withinroad and can be done as day hikes</Text>
              </View>
            </View>
            <View style={{flex: 1,paddingLeft: 10, paddingRight: 10, backgroundColor: '#1abc9c', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', paddingBottom: 50 }}>
              <View style={{flex:5}}>
                <Image style={{ height: 300 , width: 300, }} source={require('./../../images/female.png')} />
              </View>
              <View style={{flex: 4, alignItems: 'center' }}>
                <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>FEATURE OR BENEFIT 2</Text>
                <Text>The 93 mile long Wonderland Trail circumnavigates Mt Rainier withinroad and can be done as day hikes</Text>
              </View>
            </View>
            <View style={{flex: 1,paddingLeft: 10, paddingRight: 10, backgroundColor: '#2ecc71', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', paddingBottom: 50 }}>
              <View style={{flex:5}}>
                <Image style={{ height: 300 , width: 300, }} source={require('./../../images/blackheart.png')} />
              </View>
              <View style={{flex: 4, alignItems: 'center' }}>
                <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 10}}>ENJOY UNLIMITED PAYES</Text>
                <Text>The 93 mile long Wonderland Trail circumnavigates Mt Rainier withinroad and can be done as day hikes</Text>
              </View>
            </View>
            <View style={{flex: 1,paddingLeft: 10, paddingRight: 10, backgroundColor: '#e74c3c', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', paddingBottom: 50 }}>
              <View style={{flex:5}}>
                <Image style={{ height: 300 , width: 300, }} source={require('./../../images/camera.png')} />
              </View>
              <View style={{flex: 4, alignItems: 'center' }}>
                <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 10}}>ENJOY UNLIMITED PAYES</Text>
                <Text>The 93 mile long Wonderland Trail circumnavigates Mt Rainier withinroad and can be done as day hikes</Text>
              </View>
            </View>
          </IndicatorViewPager>
        <View style={{ backgroundColor: '#2196F3', alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity onPress={Actions.login}>
            <Text style={{ fontSize: 25, borderColor: '#2196F3', borderWidth: 2, color: 'white' }}> Get Started </Text>
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

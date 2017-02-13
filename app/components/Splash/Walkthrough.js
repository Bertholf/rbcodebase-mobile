import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';
import {
  IndicatorViewPager, PagerDotIndicator
}from 'rn-viewpager';
var { height,  width} = Dimensions.get('window');
const {height } = Dimensions.get('window');
export default class walkthrough extends Component {
  constructor(props){
    super(props);
    this.state =
    {
      gambar: './Img/ic_account_balance_black_24dp.png',
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
        <View style={{flex:1}}>
          <IndicatorViewPager
            style={{ height: height * 0.98 }}
            indicator={this._renderDotIndicator()}
          >
            <View style={{ backgroundColor:'#f1c40f', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('./../../images/account.png')} />
              <Text style= {{fontWeight: 'bold'}}>ENJOY UNLIMITED PAYES</Text>
              <Text>The 93 mile long Wonderland Trail circumnavigates Mt Rainier withinroad and can be done as day hikes</Text>
            </View>
            <View style={{backgroundColor:'#2ecc71',flexDirection:'column',justifyContent:'center',alignItems: 'center'}}>
              <Image source={require('./../../images/account.png')} />
              <Text style= {{fontWeight: 'bold'}}>ENJOY UNLIMITED PAYES</Text>
              <Text>'The 93 mile long Wonderland Trail circumnavigates Mt Rainier withinroad and can be done as day hikes',</Text>
            </View>
            <View style={{backgroundColor:'#2980b9',flexDirection:'column',justifyContent:'center',alignItems: 'center'}}>
                {/* <Image source={require('./Img/ic_perm_media_black_24dp.png')}></Image> */}
                <Image source={require('./../../images/account.png')} />
                <Text style= {{fontWeight: 'bold'}}>ENJOY UNLIMITED PAYES</Text>
                <Text>'The 93 mile long Wonderland Trail circumnavigates Mt Rainier withinroad and can be done as day hikes',</Text>
            </View>
            <View style={{backgroundColor:'#e67e22',flexDirection:'column',justifyContent:'center',alignItems: 'center'}}>
              <Image source={require('./../../images/account.png')} />
              <Text style={{ fontWeight: 'bold'}} >ENJOY UNLIMITED PAYES</Text>
              <Text>The 93 mile long Wonderland Trail circumnavigates Mt Rainier withinroad and can be done as day hikes</Text>
            </View>
        </IndicatorViewPager>

        </View>
      );
  }
  _renderTitleIndicator() {
    return <PagerTitleIndicator titles={['one', 'two', 'three']} />;
  }
  _renderDotIndicator() {
    return <PagerDotIndicator pageCount={4} />;
  }
}

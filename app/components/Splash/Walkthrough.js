import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {
  IndicatorViewPager, PagerDotIndicator,
} from 'rn-viewpager';
import { Actions } from 'react-native-router-flux';
import strings from '../../localizations';

const { height, width } = Dimensions.get('window');


const styles = StyleSheet.create({
  page1: {
    flex: 1,
    backgroundColor: '#26A69A',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 50,
  },
  page2: {

  },
});

export default class walkthrough extends Component {
  constructor(props) {
    super(props);
    strings.setLanguage('en');
    this.state = {
      screen: strings.walkthrought.screen.information,
    };
  }
  render() {
    return (
      <View style={{ backgroundColor: '#2196F3', flex: 1 }}>
          <IndicatorViewPager
            style={{ flex: 1 }}
            indicator={this._renderDotIndicator()}
          >
            <View style={styles.page1}>
              <View style={{flex:5}}>
                <Image style={{ height: 270,width: width * 1 }}  source={this.state.screen[0].imageurl} />
              </View>
              <View style={{flex: 4, flexDirection: 'column', alignItems: 'center', padding: 20, justifyContent: 'center' }}>

                <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>{this.state.screen[0].title}</Text>
                <Text>{this.state.screen[0].description}</Text>
              </View>
            </View>
            <View style={{ flex: 1, backgroundColor:'#26C6DA', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', paddingBottom: 50 }}>
              <View style={{flex:5}}>
                <Image style={{ height: 270, width: width * 1 }} source={this.state.screen[1].imageurl} />
              </View>
              <View style={{flex: 4, flexDirection: 'column', alignItems: 'center', padding: 20, justifyContent: 'center' }}>
                <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>{this.state.screen[1].title}</Text>
                <Text>{this.state.screen[1].description}</Text>
              </View>
            </View>
            <View style={{ flex: 1, backgroundColor:'#29B6F6', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', paddingBottom: 50 }}>
              <View style={{flex:5}}>
                <Image style={{ height: 270,width: width * 1 }} source={this.state.screen[2].imageurl} />
              </View>
              <View style={{flex: 4, flexDirection: 'column', alignItems: 'center', padding: 20, justifyContent: 'center' }}>
                <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>{this.state.screen[2].title}</Text>
                <Text>{this.state.screen[2].description}</Text>
              </View>
            </View>
            <View style={{ flex: 1, backgroundColor: '#64B5F6', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', paddingBottom: 50 }}>
              <View style={{flex:5}}>
                <Image style={{ height: 270,width: width * 1 }} source={this.state.screen[3].imageurl} />
              </View>
            <View style={{flex: 4, flexDirection: 'column', alignItems: 'center', padding: 20, justifyContent: 'center' }}>
                <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>{this.state.screen[3].title}</Text>
                <Text>{this.state.screen[3].description}</Text>
            </View>
            </View>
          </IndicatorViewPager>
        <View style={{ backgroundColor: '#2196F3', alignItems: 'center', justifyContent: 'center', height: 50 }}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={Actions.login}
            style={{ flex: 1, backgroundColor: '#2196F3', width, alignItems: 'center', justifyContent: 'center' }}
          >
            <Text style={{ padding: 10, fontWeight: '200', fontSize: 17, color: 'white', justifyContent: 'center', alignItems: 'center' }}> {strings.walkthrought.buttonText} </Text>
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

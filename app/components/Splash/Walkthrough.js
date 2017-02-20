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

const { width } = Dimensions.get('window');

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
    flex: 4,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center',
  },
  page3: {
    flex: 1,
    backgroundColor: '#26C6DA',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 50,
  },
  page4: {
    flex: 1,
    backgroundColor: '#29B6F6',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 50,
  },
  page5: {
    flex: 1,
    backgroundColor: '#64B5F6',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 50,
  },
  btnContent: {
    backgroundColor: '#2196F3',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  btn: {
    width,
    flex: 1,
    backgroundColor: '#2196F3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    padding: 10,
    fontWeight: '200',
    fontSize: 17,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 4,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center',
  },
});

let setlang = '';

export default class walkthrough extends Component {
  constructor(props) {
    const lang = strings.getInterfaceLanguage();
    switch (lang) {
      case 'in-ID':
        console.log('Bahasa');
        setlang = 'id';
        break;
      case 'en-US':
        console.log('Language');
        setlang = 'en';
        break;
      default:
        setlang = 'en';
        break;
    }
    strings.setLanguage(setlang);
    super(props);
    this.state = {
      screen: strings.walkthrought.screen.information,
    };
  }


  renderTitleIndicator() {
    return <PagerTitleIndicator titles={['one', 'two', 'three', 'four']} />;
  }
  renderDotIndicator() {
    return <PagerDotIndicator pageCount={4} />;
  }
  render() {
    return (
      <View style={{ backgroundColor: '#2196F3', flex: 1 }}>
        <IndicatorViewPager
          style={{ flex: 1 }}
          indicator={this.renderDotIndicator()}
        >
          <View style={styles.page1}>
            <View style={{ flex: 5 }}>
              <Image
                style={{ height: 270, width: width * 1 }} source={this.state.screen[0].imageurl}
              />
            </View>
            <View style={styles.page2}>
              <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>{this.state.screen[0].title}</Text>
              <Text>{this.state.screen[0].description}</Text>
            </View>
          </View>
          <View style={styles.page3}>
            <View style={{ flex: 5 }}>
              <Image
                style={{ height: 270, width: width * 1 }} source={this.state.screen[1].imageurl}
              />
            </View>
            <View style={styles.page2}>
              <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>{this.state.screen[1].title}</Text>
              <Text>{this.state.screen[1].description}</Text>
            </View>
          </View>
          <View style={styles.page4}>
            <View style={{ flex: 5 }}>
              <Image
                style={{ height: 270, width: width * 1 }} source={this.state.screen[2].imageurl}
              />
            </View>
            <View style={styles.content}>
              <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>{this.state.screen[2].title}</Text>
              <Text>{this.state.screen[2].description}</Text>
            </View>
          </View>
          <View style={styles.page5}>
            <View style={{ flex: 5 }}>
              <Image
                style={{ height: 270, width: width * 1 }} source={this.state.screen[3].imageurl}
              />
            </View>
            <View style={styles.content}>
              <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>{this.state.screen[3].title}</Text>
              <Text>{this.state.screen[3].description}</Text>
            </View>
          </View>
        </IndicatorViewPager>
        <View style={styles.btnContent}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={Actions.login}
            style={styles.btn}
          >
            <Text style={styles.btnText}> {strings.walkthrought.buttonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

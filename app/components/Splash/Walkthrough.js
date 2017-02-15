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

const { width } = Dimensions.get('window');

const bromo = require('./../../images/bromo.jpg');
const everts = require('./../../images/everest.jpg');
const jayawijaya = require('./../../images/jayawijaya.jpg');
const rinjani = require('./../../images/rinjani.jpg');

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

export default class walkthrough extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: [
        { imageurl1: bromo, title1: 'FEATURE OF BENEFIT', description1: 'Mount Everest attracts many climbers, some of them highly experienced mountaineers. There are two main climbing routes: one approaching the summit from the southeast in Nepal' },
        { imageurl2: everts, title2: 'FEATURE OF BENEFIT 2', description2: 'The current official height of 8,848 m (29,029 ft) as recognised by China and Nepal was established by a 1955 Indian survey and subsequently confirmed by a Chinese survey in 1975' },
        { imageurl3: jayawijaya, title3: 'FEATURE OF BENEFIT 3', description3: ' An argument regarding the height between China and Nepal lasted five years from 2005 to 2010. China argued it should be measured by its rock height which is 8,844 m but Nepal said it should be measured by its snow height 8,848 m' },
        { imageurl4: rinjani, title4: 'FEATURE OF BENEFIT 4', description4: 'The 1924 expedition resulted in one of the greatest mysteries on Everest to this day: George Mallory and Andrew Irvine made a final summit attempt on 8 June but never returned, sparking debate as to whether they were the first to reach the top' },
      ],
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
                style={{ height: 270, width: width * 1 }} source={this.state.screen[0].imageurl1}
              />
            </View>
            <View style={styles.page2}>
              <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>{this.state.screen[0].title1}</Text>
              <Text>{this.state.screen[0].description1}</Text>
            </View>
          </View>
          <View style={styles.page3}>
            <View style={{ flex: 5 }}>
              <Image
                style={{ height: 270, width: width * 1 }} source={this.state.screen[1].imageurl2}
              />
            </View>
            <View style={styles.page2}>
              <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>{this.state.screen[1].title2}</Text>
              <Text>{this.state.screen[1].description2}</Text>
            </View>
          </View>
          <View style={styles.page4}>
            <View style={{ flex: 5 }}>
              <Image
                style={{ height: 270, width: width * 1 }} source={this.state.screen[2].imageurl3}
              />
            </View>
            <View style={styles.content}>
              <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>{this.state.screen[2].title3}</Text>
              <Text>{this.state.screen[2].description3}</Text>
            </View>
          </View>
          <View style={styles.page5}>
            <View style={{ flex: 5 }}>
              <Image
                style={{ height: 270, width: width * 1 }} source={this.state.screen[3].imageurl4}
              />
            </View>
            <View style={styles.content}>
              <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>{this.state.screen[3].title4}</Text>
              <Text>{this.state.screen[3].description4}</Text>
            </View>
          </View>
        </IndicatorViewPager>
        <View style={styles.btnContent}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={Actions.login}
            style={styles.btn}
          >
            <Text style={styles.btnText}> GET STARTED </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

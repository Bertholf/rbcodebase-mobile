import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import {
  IndicatorViewPager,
  PagerDotIndicator,
} from 'rn-viewpager';
import { Actions } from 'react-native-router-flux';
import Walk from './Walk.json';
import strings from '../../localizations';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#B3E5FC',
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
      // initialization data json
      screen: Walk.screen.information,
    };
  }
  componentDidMount() {
    AsyncStorage.setItem('loadingWalk', 'true')
    .then((response) => { console.log(response); },
     (error) => { console.log(error); });
  }

  // sum of page in walktrough
  renderDotIndicator() {
    return <PagerDotIndicator pageCount={4} />;
  }


 // loader data json to walktrough screen
  renderItem(screen) {
    return (
      <View style={[styles.page, { backgroundColor: screen.bg }]}>
        <View style={{ flex: 5 }}>
          <Image
            style={{ height: 270, width: width * 1 }} source={{ uri: screen.Image }}
          />
        </View>
        <View style={styles.page2}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>{screen.title}</Text>
          <Text>{screen.description}</Text>
        </View>
      </View>);
  }

  render() {
    return (
      <View style={{ backgroundColor: '#2196F3', flex: 1 }}>
        <IndicatorViewPager
          style={{ flex: 1 }}
          indicator={this.renderDotIndicator()}
        >
          {
        this.state.screen.map((screen) => {
          return this.renderItem(screen);
        })
          }
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

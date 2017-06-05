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
// import Walk from './Walk.json';
import strings from '../../../localizations';
import styles from './style';

let setlang = '';

const { height, width } = Dimensions.get('window');

export default class walkthrough extends Component {
  constructor(props) {
    // Will initialize Localization to Default language from user Device
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
      screen: strings.walkthrought.screen,
    };
  }
  componentDidMount() {
    AsyncStorage.setItem('loadingWalk', 'true')
    .then((response) => { console.log(response); },
     (error) => { console.log(error); });
  }

  // sum of page in walktrough
  renderDotIndicator() {
    /**
     * This will return to render dot Indicator
     */
    return <PagerDotIndicator pageCount={4} />;
  }


 // loader data json to walktrough screen
  renderItem(screen) {
    return (
        <View key={screen.bg} style={[styles.page, { backgroundColor: screen.bg }]}>
          <View style={{ flex: 2 }}>
            <Image
              style={{ height: height/2, width: width * 1 }} source={{ uri: screen.Image }}
            />
          </View>
          <View style={styles.page2}>
            <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 20, marginBottom: 10 }}>{screen.title}</Text>
            <Text>{screen.description}</Text>
          </View>
        </View>
    );
  }

  render() {
    return (
      // The View Component
      <View style={{ backgroundColor: '#2196F3', flex: 1 }}>
        <IndicatorViewPager
        /*
         *This will show indicator in ViewPager
         */
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
            <Text style={styles.btnText}> {strings.walkthrought.button}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

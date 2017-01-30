import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgBg: {
    width: 360,
    height: 200,
  },
  btnBackground: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    height: 200,
  },
  btnContainer: {
    flexDirection: 'row',
    height: 200,
    paddingTop: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  backArrow: {
    width: 40,
    marginLeft: 15,
  },
  textTown: {
    color: 'white',
    fontSize: 25,
    fontWeight: '500',
    marginLeft: 30,
  },
  createImg: {
    marginLeft: 50,
  },
  photoLibraryImg: {
    marginLeft: 20,
    marginRight: 20,
  },
  textInformContainer: {
    height: 100,
    backgroundColor: '#009688',
  },
  textInform: {
    marginLeft: 20,
  },
});

export default class trailDetailsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.imgBg}
            source={require('./../../../app/images/everest.jpg')}
          >
            <View style={styles.btnBackground}>
              <View style={styles.btnContainer}>
                <TouchableHighlight>
                  <Image
                    style={styles.backArrow}
                    source={require('./../../../app/images/ic_arrow_back_white_24dp.png')}
                  >
                  </Image>
                </TouchableHighlight>
                <Text style={styles.textTown}>Town</Text>
                <TouchableHighlight>
                  <Image
                    style={styles.createImg}
                    source={require('./../../../app/images/ic_create_white_24dp.png')}
                  >
                  </Image>
                </TouchableHighlight>
                <TouchableHighlight>
                  <Image
                    style={styles.photoLibraryImg}
                    source={require('./../../../app/images/ic_photo_library_white_24dp.png')}
                  >
                  </Image>
                </TouchableHighlight>
                <TouchableHighlight>
                  <Image
                    source={require('./../../../app/images/ic_location_searching_white_24dp.png')}
                  >
                  </Image>
                </TouchableHighlight>
              </View>
            </View>
          </Image>
          <View style={styles.textInformContainer}>
            <View style={styles.textInform}>
              <Text style={{fontSize: 25, color: 'white', marginTop: 15}}>Longmire</Text>
              <Text style={{fontSize: 25, color: 'white'}}>WT mi 89</Text>
            </View>
          </View>
          <View style={{ position: 'absolute', bottom: 60, right: 20, borderRadius: 80, width: 80, height: 80, backgroundColor: 'powderblue' }} >
            <Image
              source={require('./../../../app/images/ic_camera_white_24dp.png')}
            />
          </View>

        </View>
        <View style={styles.content}>

        </View>
        <View style={styles.footer}>

        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('trailDetailsScreen', () => trailDetailsScreen);

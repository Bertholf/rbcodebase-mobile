import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, Dimensions, ScrollView } from 'react-native';
import { BarChart } from 'react-native-charts';

const imageMenu = require('./../../images/menu.png');
const accessible = require('./../../images/accessible.png');
const eye = require('./../../images/eye.png');
const gps = require('./../../images/gps.png');
const search = require('./../../images/search.png');
const morepert = require('./../../images/morepert.png');
const arrow = require('./../../images/arrow.png');
const image = require('./../../images/mountain.jpg');
const kelimutu = require('./../../images/kelimutu.jpg');
const rinjani = require('./../../images/rinjani.jpg');

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    height,
    width,
  },
  header: {
    width,
    height: 60,
    backgroundColor: '#009688',
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 8,
  },
  imgMenu: {
    width: 30,
    height: 30,
    top: 15,
    left: 10,
  },
  menubar: {
    width: width * 0.8,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuBtn: {
    width: 30,
    height: 30,
    top: 15,
  },
  arrow: {
    width: 20,
    height: 30,
  },
  imageSide: {
    width: 100,
    height: 100,
  },
  listTrail: {
    flexDirection: 'row',
    top: 5,
    marginLeft: 5,
  },
  menupert: {
    width: 25,
    height: 25,
  },
  list: {
    backgroundColor: '#00BFA5',
    flexDirection: 'row',
    height: 50,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    margin: 5,
  },
  sub: {
    color: '#FFFFFF',
    fontSize: 16,
    margin: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    backgroundColor: '#00BFA5',
    paddingLeft: 3,
    paddingRight: 3,
    marginRight: 5,
  },
  chart: {
    width: 200,
    height: 200,
  },
});

export default class ListTrails extends Component {
  render() {
    return (
      <View style={styles.container} >
        <View style={styles.header}>
          <Image style={styles.imgMenu} source={imageMenu} />
          <View style={styles.menubar}>
            <View style={{ height: 40, width: 40 }} />
            <Image style={styles.menuBtn} source={eye} />
            <Image style={styles.menuBtn} source={accessible} />
            <Image style={styles.menuBtn} source={gps} />
            <Image style={styles.menuBtn} source={search} />
            <Image style={styles.menuBtn} source={morepert} />
          </View>
        </View>
        <ScrollView style={styles.scroll}>
          <View style={styles.listTrail} >
            <Image style={styles.arrow} source={arrow} />
            <Image style={styles.imageSide} source={image} />
            <View style={styles.label}>
              <View style={styles.row}>
                <Text style={styles.title}>Longmire</Text>
                <Text style={styles.title}>S8511.02mi</Text>
                <Image style={styles.menupert} source={morepert} />
              </View>
              <Text style={styles.sub}>On Trail</Text>
              <Text style={styles.sub}>WT mi-89</Text>
            </View>
          </View>
          <View style={{ height: 5 }} />
          <View style={styles.listTrail} >
            <Image style={styles.arrow} source={arrow} />
            <BarChart
              dataSets={[
                {
                  fillColor: '#46b3f7',
                  data: [
                      { value: 15 },
                      { value: 10 },
                      { value: 12 },
                      { value: 11 },
                  ],
                },
                {
                  fillColor: '#3386b9',
                  data: [
                        { value: 14 },
                        { value: 11 },
                        { value: 14 },
                        { value: 13 },
                  ],
                },
              ]}
              graduation={1}
              horizontal={false}
              howGrid={true}
              barSpacing={5}
              style={{
                height: 100,
                margin: 15,
                width: 300,
              }}
              />
          </View>
          <View style={{ height: 5 }} />
          <View style={styles.listTrail} >
            <Image style={styles.arrow} source={arrow} />
            <Image style={styles.imageSide} source={kelimutu} />
            <View style={styles.label}>
              <View style={styles.row}>
                <Text style={styles.title}>Mowich</Text>
                <Text style={styles.title}>N839.60mi</Text>
                <Image style={styles.menupert} source={morepert} />
              </View>
              <Text style={styles.sub}>On Trail</Text>
              <Text style={styles.sub}>WT mi-33</Text>
            </View>
          </View>
          <View style={{ height: 5 }} />
          <View style={styles.listTrail} >
            <Image style={styles.arrow} source={arrow} />
            <BarChart
              dataSets={[
                {
                  fillColor: '#F44336',
                  data: [
                      { value: 7 },
                      { value: 5 },
                      { value: 9 },
                      { value: 6 },
                  ],
                },
                {
                  fillColor: '#1A237E',
                  data: [
                        { value: 10 },
                        { value: 9 },
                        { value: 7 },
                        { value: 8 },
                  ],
                },
              ]}
              graduation={1}
              horizontal={false}
              howGrid={true}
              barSpacing={5}
              style={{
                height: 100,
                margin: 15,
                width: 300,
              }}
              />
          </View>
          <View style={{ height: 5 }} />
          <View style={styles.listTrail} >
            <Image style={styles.arrow} source={arrow} />
            <Image style={styles.imageSide} source={rinjani} />
            <View style={styles.label}>
              <View style={styles.row}>
                <Text style={styles.title}>Sunrise</Text>
                <Text style={styles.title}>8460.17mi</Text>
                <Image style={styles.menupert} source={morepert} />
              </View>
              <Text style={styles.sub}>On Trail</Text>
              <Text style={styles.sub}>WT mi 54</Text>
            </View>
          </View>
          <View style={{ height: 5 }} />
          <View style={styles.listTrail} >
            <Image style={styles.arrow} source={arrow} />
            <BarChart
              dataSets={[
                {
                  fillColor: '#C51162',
                  data: [
                      { value: 3 },
                      { value: 7 },
                      { value: 2 },
                      { value: 11 },
                  ],
                },
                {
                  fillColor: '#6A1B9A',
                  data: [
                        { value: 4 },
                        { value: 6 },
                        { value: 10 },
                        { value: 5 },
                  ],
                },
              ]}
              graduation={1}
              horizontal={false}
              howGrid={true}
              barSpacing={5}
              style={{
                height: 100,
                margin: 15,
                width: 300,
              }}
              />
          </View>
        </ScrollView>
      </View>
    );
  }
}

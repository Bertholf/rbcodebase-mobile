import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, Dimensions, ScrollView } from 'react-native';
import { BarChart } from 'react-native-charts';
import styles from './style';

const imageMenu = require('./../../images/menu.png');
const accessible = require('./../../images/accessible.png');
const eye = require('./../../images/eye.png');
const gps = require('./../../images/gps.png');
const search = require('./../../images/search.png');
const morepert = require('./../../images/morepert.png');
const arrow = require('./../../images/arrow.png');
const image = require('./../../images/mountain.jpg');
const ListTrails = () => {
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
            <View style={styles.border}>
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
          </View>
          <View style={{ height: 10 }} />
          <View style={styles.listTrail} >
            <Image style={styles.arrow} source={arrow} />
            <View style={styles.border}>
              <BarChart
              dataSets={[
                {
                  fillColor: '#46b3f7',
                  data: [
                      { value: 5 },
                      { value: 10 },
                      { value: 2 },
                      { value: 1 },
                  ],
                },
                {
                  fillColor: '#3386b9',
                  data: [
                        { value: 6 },
                        { value: 3 },
                        { value: 7 },
                        { value: 9 },
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
                  width: 290,
                }}
              />
            </View>
          </View>
          <View style={{ height: 10 }} />
        </ScrollView>
      </View>
    );
};

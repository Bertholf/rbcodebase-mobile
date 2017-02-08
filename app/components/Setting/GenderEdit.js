import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const imgmale = require('./../../images/male.png');
const imgfemale = require('./../../images/female.png');

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  genderRow: {
    paddingTop: 50,
    paddingBottom: 90,
    width: width * 0.9,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 7,
    marginLeft: 18,
    marginRight: 18,
  },
  btnGender: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 2,
    height: 80,
    width: (width * 0.85) / 2,
    borderWidth: 1,
    borderColor: 'silver',
  },
  OuterView: {
    flexDirection: 'column',
    flex: 1,
  },
  Text1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    alignItems: 'flex-start',
    paddingTop: 16,
    paddingBottom: 10,
  },
  imgGender: {
    height: 80,
    width: 80,
    marginRight: 10,
  },
  active: {
    borderWidth: 2,
    borderColor: '#2196F3',
  },
  active2: {
    borderWidth: 2,
    borderColor: '#f2003d',
  },
  View2: {
    marginTop: 20,
    marginBottom: 20,
    elevation: 2,
    alignItems: 'center',
    elevation: 2,
    backgroundColor: '#2196f3',
    marginLeft: 16,
    marginRight: 16,
  },
  Button: {
    paddingTop: 6,
    paddingBottom: 6,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default class Gender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      male: true,
      female: false,
    };
  }
  render() {
    return (
      <View style={styles.OuterView}>
        <ScrollView>
          <View style={styles.genderRow} >
            <TouchableOpacity
              activeOpacity={0.7}
              style={[styles.btnGender, this.state.male && styles.active]}
              onPress={() => this.setState({ male: true, female: false })}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                <Image source={imgmale} style={[styles.imgGender, { tintColor: '#1565c0' }]} />
                <Text style={{ color: '#1565c0' }}>Male</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={[styles.btnGender, this.state.female && styles.active2]}
              onPress={() => this.setState({ female: true, male: false })}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                <Image source={imgfemale} style={[styles.imgGender, { tintColor: '#DF2668' }]} />
                <Text style={{ color: '#DF2668' }}>Female</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <TouchableOpacity onPress={() => console.log('dummy')}>
          <View style={styles.View2}>
            <Text style={styles.Button}>
              SAVE
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './EditNameStyles';

const EditName = () => (
  <View style={styles.container}>
    <View style={{ alignItems: 'center', marginBottom: 24 }}>
      <TouchableOpacity>
        <View style={styles.imageContainer}>
          <Image
            source={require('./../../../images/profile-pic.jpg')}
            style={styles.image}
          />
          <Image
            source={require('./../../../images/ic_add_a_photo_black_18dp.png')}
            style={{ width: 18, height: 18, marginTop: -17, left: 70 }}
          />
        </View>
      </TouchableOpacity>
    </View>

    <View style={styles.inputMargin}>
      <View>
        <Text style={styles.title}>First Name</Text>
      </View>
      <View>
        <TextInput
          placeholder={'Your First Name'}
          placeholderTextColor="#BDBDBD"
          style={styles.inputStyle}
        />
      </View>
    </View>
    <View>
      <Text style={styles.title}>Last Name</Text>
      <TextInput
        placeholder={'Your Last Name'}
        placeholderTextColor="#BDBDBD"
        style={styles.inputStyle}
      />
    </View>
    <View style={{ marginTop: 35 }}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.titleButton}>Save</Text>
      </TouchableOpacity>
    </View>
  </View>
  );

module.exports = EditName;

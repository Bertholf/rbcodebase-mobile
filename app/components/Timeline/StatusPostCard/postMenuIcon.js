import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './../../../components/Timeline/StatusPostCard/styles';

const PostMenu = () => {
  return (
    <View style={styles.containerBottom}>
      <TouchableOpacity>
        <Image
          source={require('./../../../images/ic_perm_identity_black_24dp.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require('./../../../images/ic_place_black_24dp.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require('./../../../images/ic_videocam_black_24dp.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require('./../../../images/camera.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require('./../../../images/ic_insert_emoticon_black_24dp.png')}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
};

module.exports = PostMenu;

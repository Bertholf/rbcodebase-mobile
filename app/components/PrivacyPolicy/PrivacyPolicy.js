import React from 'react';
import { View, Text, WebView, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import strings from '../../localizations';
import styles from './../../style/StyleGlobal';

const icClose = require('./../../images/ic_close.png');

const PPComponent = ({ tosUrl, onClose }) => (
  <View style={{ flex: 1, backgroundColor: '#fff' }}>
    <View style={styles.viewPolicy}>
      <TouchableOpacity onPress={onClose} style={styles.onpressPolicy}>
        <Image source={icClose} style={styles.imagePolicy} />
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 20 }}>{strings.settings.Privacy_policy}</Text>
      </View>
    </View>
    <WebView
      startInLoadingState
      renderLoading={() => <View style={{ flex: 1 }}><ActivityIndicator /></View>}
      source={{ uri: tosUrl }}
      style={{ flex: 1 }}
      scalesPageToFit
    />
  </View>
);

PPComponent.propTypes = {
  tosUrl: React.PropTypes.string.isRequired,
  onClose: React.PropTypes.func.isRequired,
};

export default PPComponent;

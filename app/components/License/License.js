import React from 'react';
import { View, Text, WebView, Image, ActivityIndicator, TouchableOpacity } from 'react-native';

const icClose = require('./../../images/ic_close.png');

const LicenseComp = ({ tosUrl, onClose }) => (
  <View style={{ flex: 1, backgroundColor: '#fff' }}>
    <View style={{ flexDirection: 'row', marginBottom: 10, padding: 10 }}>
      <TouchableOpacity onPress={onClose} style={{ marginRight: 10, width: 30, height: 30 }}>
        <Image source={icClose} style={{ resizeMode: 'cover', width: 30, height: 30 }} />
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 20 }}>Terms of Service</Text>
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

LicenseComp.propTypes = {
  tosUrl: React.PropTypes.string.isRequired,
  onClose: React.PropTypes.func.isRequired,
};

export default LicenseComp;

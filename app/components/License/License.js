import React from 'react';
import { View, Text, WebView, Image, ActivityIndicator, TouchableOpacity } from 'react-native';

const icClose = require('./../../images/ic_close.png');

const LicenseComp = ({ licenseUrl, onClose }) => (
  <View style={{ flex: 1, backgroundColor: '#fff' }}>
    <View style={{ flexDirection: 'row', marginBottom: 10, padding: 10 }}>
      <TouchableOpacity onPress={onClose} style={{ marginRight: 10, width: 30, height: 30 }}>
        <Image source={icClose} style={{ resizeMode: 'cover', width: 30, height: 30 }} />
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 20 }}>License</Text>
      </View>
    </View>
    <WebView
      startInLoadingState
      renderLoading={() => <View style={{ flex: 1 }}><ActivityIndicator /></View>}
      source={{ uri: licenseUrl }}
      style={{ flex: 1 }}
      scalesPageToFit
    />
  </View>
);

LicenseComp.propTypes = {
  licenseUrl: React.PropTypes.string.isRequired,
  onClose: React.PropTypes.func.isRequired,
};

export default LicenseComp;

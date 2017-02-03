import React from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';


const SplashScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff', paddingBottom: 20 }}>
    <Image
      source={require('./../../images/logo.png')}
      style={{
        width: 150,
        height: 150,
        borderRadius: 75 }}
    />
    <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#1565c0', marginTop: 16 }}>
      RBCodebase
    </Text>
    <ActivityIndicator color="#2196f3" size="large" />
  </View>
);
export default SplashScreen;

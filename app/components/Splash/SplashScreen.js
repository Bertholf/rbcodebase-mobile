import React from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';


const SplashScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#64DD17', paddingBottom: 20, opacity:0.5 }}>
    <Image
      source={require('./../../images/logo.png')}
      style={{
        width: 150,
        height: 150,
        borderRadius: 75,

       }}
    />
    <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#2E7D32', marginTop: 16 }}>
      RBCodebase
    </Text>
    <ActivityIndicator color="white" size="large" />
  </View>
);
export default SplashScreen;

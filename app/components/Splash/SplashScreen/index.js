import React from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';


const SplashScreen = () => (
  <Image  source={require('./../../../images/splash.jpg')} style={{
    width: null,
	  height: null,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0)',
  }}>
    <Image
      source={require('./../../../images/logo.png')}
      style={{
        width: 150,
        height: 150,
        borderRadius: 75,

      }}
    />
    <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white', marginTop: 16 }}>
      RBCodebase
    </Text>
    <ActivityIndicator color="white" size="large" />
  </Image>
);
export default SplashScreen;

import React from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';


const SplashScreen = (props) => (
  <View style={{ flex: 1, flexGrow: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#009688' }}>
    <Image source={require('./../../images/logo.jpg')}
        style={{
          width: 250,
          height: 250,
          borderRadius: 125,
          borderWidth: 2,
          borderColor: '#009688'
        }}/>
    <Text style={{
      fontSize: 30,

    }}>Hiekr</Text>
     <ActivityIndicator color="#fff" size="large" />
  </View>
);
export default SplashScreen;

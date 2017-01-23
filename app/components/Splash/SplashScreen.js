import React from 'react';
import { View, Text, Image } from 'react-native';

const SplashScreen = (props) => (
  <View style={{ flex: 1, flexGrow: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#009688' }}>
    <Image source={{uri: 'https://s-media-cache-ak0.pinimg.com/736x/60/15/4f/60154f09e46dcf77148ccae0717963db.jpg'}}
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
  </View>
);
export default SplashScreen;

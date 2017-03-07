import React from 'react';
import NavigationBar from 'react-native-navbar';
import { View, StatusBar, Animated, Text, Image, TouchableOpacity } from 'react-native';
import { Actions, DefaultRenderer } from 'react-native-router-flux';
import IconClose from './IconClose';

const NavBar = (props) => {
  const { navigationState, onNavigate } = props;
  const { children, key } = navigationState;
  const scenes = children[children.length - 1].children || [];
  // const renderLeftButton = () => {(<TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}} onPress={Actions.pop}>
  //     <Image source={ic_close} style={{ resizeMode: 'cover', width: 20, height: 20}}/>
  //     <Text>Back</Text>
  // </TouchableOpacity>)};
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        backgroundColor="#c0c0c0"
        barStyle="light-content"
      />
      {scenes.length > 0 ? <Animated.View style={{ flex: 1 }}>
        {scenes[scenes.length - 1].hideNavBar ? <View /> : <NavigationBar
          leftButton={<IconClose onPress={Actions.pop} />}
          statusBar={{ hidden: false }}
          title={{ title: scenes[scenes.length - 1].title }}
          style={{ height: 55, backgroundColor: '#f0f0f0', borderColor: '#c0c0c0', borderBottomWidth: 2 }}
        />}
        <DefaultRenderer
          navigationState={children[children.length - 1]}
          onNavigate={onNavigate}
        />
      </Animated.View> : <View />}
    </View>
  );
};

export default NavBar;

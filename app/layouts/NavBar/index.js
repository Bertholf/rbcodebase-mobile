import React from 'react';
import NavigationBar from 'react-native-navbar';
import { View, StatusBar, Animated } from 'react-native';
import { Actions, DefaultRenderer } from 'react-native-router-flux';
import IconClose from './../IconClose';

const NavBar = (props) => {
  const { navigationState, onNavigate } = props;
  const { children, key } = navigationState;
  const scenes = children[children.length - 1].children || [];

  return (
    <View style={{ flex: 1 }}>
      <StatusBar />
      {scenes.length > 0 ? <Animated.View style={{ flex: 1 }}>
        {scenes[scenes.length - 1].hideNavBar ? <View /> : <NavigationBar
          leftButton={<IconClose onPress={Actions.pop} />}
          statusBar={{ hidden: true }}
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

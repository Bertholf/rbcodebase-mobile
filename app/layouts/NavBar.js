import React from 'react';
import NavigationBar from 'react-native-navbar';
import { View, Animated } from 'react-native';
import { Actions, DefaultRenderer } from 'react-native-router-flux';

const NavBar = (props) => {
  const { navigationState, onNavigate } = props;
  const { children, key } = navigationState;
  return (
    <Animated.View style={{ flex: 1 }}>
      {children[children.length - 1].hideNavBar ? <View /> : <NavigationBar
        title={{ title: children[children.length - 1].title }}
      />}
      <DefaultRenderer
        navigationState={children[children.length - 1]}
        onNavigate={onNavigate}
      />
    </Animated.View>
  );
};
export default NavBar;

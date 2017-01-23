import React from 'react';
import NavigationBar from 'react-native-navbar';
import { View } from 'react-native';

const NavBar = (props) => {
  const rightButtonConfig = {
    title: 'Next',
    handler: () => console.log('hello!'),
  };
  return (
    <View>
      <NavigationBar
        title={{ title: 'Title' }}
        rightButton={rightButtonConfig}
      />
    </View>
  );
};
export default NavBar;

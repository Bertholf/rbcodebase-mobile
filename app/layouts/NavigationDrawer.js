import React from 'react';
import { View } from 'react-native';
import Drawer from 'react-native-drawer';
import { Actions, DefaultRenderer } from 'react-native-router-flux';
import NavigationBar from 'react-native-navbar';
import MainDrawer from './MainDrawer';

const NavigationDrawer = (props) => {
  const state = props.navigationState;
  const rightButtonConfig = {
    title: 'Next',
    handler: () => console.log('hello!'),
  };
  const leftButtonConfig = {
    title: 'Drawer',
    handler: () => Actions.refresh({ key: state.key, open: true }),
  };
  const { navigationState, onNavigate } = props;
  const { children, key } = navigationState;
  const activeChildren = children[0].children;
  return (
    <Drawer
      open={state.open}
      onOpen={() => Actions.refresh({ key: state.key, open: true })}
      onClose={() => Actions.refresh({ key: state.key, open: false })}
      type="displace"
      content={<MainDrawer />}
      tapToClose
      openDrawerOffset={0.2}
      panCloseMask={0.2}
      negotiatePan
      tweenHandler={ratio => ({
        main: { opacity: Math.max(0.54, 1 - ratio) },
      })}
    >
      {activeChildren[activeChildren.length - 1].hideNavBar ? <View /> : <NavigationBar
        title={{ title: activeChildren[activeChildren.length - 1].title }}
        leftButton={leftButtonConfig}
        rightButton={rightButtonConfig}
      /> }
      <DefaultRenderer navigationState={children[0]} onNavigate={onNavigate} />
    </Drawer>);
};
export default NavigationDrawer;

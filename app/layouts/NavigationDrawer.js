import React from 'react';
import { View, Text } from 'react-native';
import Drawer from 'react-native-drawer';
import { Actions, DefaultRenderer} from 'react-native-router-flux';
import MainDrawer from './MainDrawer';
console.log(MainDrawer);
const NavigationDrawer = (props) => {
  const state = props.navigationState;
  const children = state.children;
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
      <DefaultRenderer navigationState={children[0]} onNavigate={props.onNavigate} />
    </Drawer>);
};
export default NavigationDrawer;

import React, { Component } from 'react';
import { View, Alert } from 'react-native';

import { DefaultRenderer } from 'react-native-router-flux';
import DrawerLayout from 'react-native-drawer-layout';
import NavigationBar from 'react-native-navbar';
import MainDrawer from './MainDrawer';
import DrawerIcon from './DrawerIcon';

export default class NavigationDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerClosed: true,
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);

    this.setDrawerState = this.setDrawerState.bind(this);
  }

  setDrawerState() {
    this.setState(prevState => ({
      drawerClosed: !this.state.drawerClosed,
    }));
  }
  toggleDrawer() {
    if (this.state.drawerClosed) {
      this.DRAWER.openDrawer();
    } else {
      this.DRAWER.closeDrawer();
    }
  }
  render() {
    const children = this.props.navigationState.children;
    const activeChildren = children[0].children;
    const rightButtonConfig = {
      title: 'Next',
      handler: () => console.log('hello!'),
    };
    const leftButtonConfig = () => {
      this.DRAWER.openDrawer();
    }
    return (
      <DrawerLayout
        drawerWidth={300}
        ref={(drawerElement) => { this.DRAWER = drawerElement }}
        drawerPosition={DrawerLayout.positions.left}
        onDrawerOpen={this.setDrawerState}
        onDrawerClose={this.setDrawerState}
        renderNavigationView={() => <MainDrawer navigate={this.toggleDrawer} />}
      >

        {activeChildren[activeChildren.length - 1].hideNavBar ? <View /> : <NavigationBar
          title={{ title: activeChildren[activeChildren.length - 1].title }}
          leftButton={<DrawerIcon onPress={leftButtonConfig} />}
          rightButton={rightButtonConfig}
        /> }
        <DefaultRenderer
          navigationState={children[children.length - 1]}
          onNavigate={this.props.onNavigate}
        />
      </DrawerLayout>
    );
  }
}

import React, { Component } from 'react';
import Menu, {
  MenuContext,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-menu';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

class Example extends Component {
  componentDidMount() {
    // We can use the public context API to open/close/toggle the menu.
    // setInterval(() => {
    //  this.refs.MenuContext.toggleMenu('menu1');
    // }, 2000);
  }

  render() {
    return (

      <MenuContext ref="MenuContext">
        <Menu>
          <MenuTrigger>
            <Image
              source={require('./../../images/ic_more_vert_black_24dp.png')}
              style={styles.iconRightMenu}
            />
          </MenuTrigger>
          <MenuOptions style={styles.menuOptions}>
            <MenuOption value="normal">
              <Text>Normal option</Text>
            </MenuOption>
            <View style={styles.divider} />
            <MenuOption value="do not close">
              <Text>Does not close menu</Text>
            </MenuOption>

          </MenuOptions>
        </Menu>
      </MenuContext>
    );
  }
}

const styles = StyleSheet.create({
  // topbar: {
  //   flexDirection: 'row',
  //   justifyContent: 'flex-end',
  //   backgroundColor: 'black',
  //   paddingHorizontal: 5,
  //   paddingVertical: 10
  // },
  menuTrigger: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  menuTriggerText: {
    color: 'lightgrey',
    fontWeight: '600',
    fontSize: 20,
  },
  disabled: {
    color: '#ccc',
  },
  divider: {
    marginVertical: 5,
    marginHorizontal: 2,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },

});

module.exports = Example;

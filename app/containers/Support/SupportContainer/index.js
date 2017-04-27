import React from 'react';
import {
  Animated,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import SupportComponent from './../../../components/Support/SupportComponent';
import styles from './style';

const { height } = Dimensions.get('window');
const mapStateToProps = ({ app }) => ({
  ...app.support,
});

class SupportContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: new Animated.Value(-height),
    };
  }

  componentDidMount() {
    Animated.timing(this.state.offset, {
      duration: 150,
      toValue: 0,
    }).start();
  }

  closeModal() {
    Animated.timing(this.state.offset, {
      duration: 150,
      toValue: -height,
    }).start(Actions.pop);
  }

  render() {
    return (
      <Animated.View
        style={[styles.container,
          { backgroundColor: 'rgba(52,52,52,0.5)',
            transform: [{ translateY: this.state.offset }],
          }]}
      >
        <SupportComponent onClose={() => this.closeModal()} {...this.props} />
      </Animated.View>
    );
  }
}

export default connect(mapStateToProps)(SupportContainer);
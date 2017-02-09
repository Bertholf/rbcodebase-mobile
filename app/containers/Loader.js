import React from 'react';
import { Animated, Dimensions, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Loader from './../views/Loader';

const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
});

const mapStateToProps = ({ app }) => ({
  ...app.tos,
});

class LoaderContainer extends React.Component {
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

  componentWillReceiveProps(props) {
    if (props.hide) {
      this.closeModal();
    }
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
        style={[styles.container, { backgroundColor: 'rgba(52,52,52,0.5)' },
                                    { transform: [{ translateY: this.state.offset }] }]}
      >
        <Loader {...this.props} onPress={() => this.closeModal()}/>
      </Animated.View>
    );
  }
}

export default connect(mapStateToProps)(LoaderContainer);

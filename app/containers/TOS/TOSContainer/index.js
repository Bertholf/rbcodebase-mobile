import React from 'react';
import { Animated, Dimensions, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import TOSComponent from './../../../components/TOS/TOSComponent';

const { height } = Dimensions.get('window');
const mapStateToProps = ({ app }) => ({
  tosUrl: app.license.licenseUrl,
});

class TOSContainer extends React.Component {
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
        style={[styles.container, { backgroundColor: 'rgba(52,52,52,0.5)' },
                                    { transform: [{ translateY: this.state.offset }] }]}
      >
        <TOSComponent {...this.props} onClose={() => this.closeModal()} />
      </Animated.View>
    );
  }
}

export default connect(mapStateToProps)(TOSContainer);

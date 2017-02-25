import React, { Component } from 'react';
import {View, Text} from 'react-native';
import auth from './../../services/auth';


class Follower extends Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
      auth.followers()
      .then(response => this.setState({ followers: response.data}, () => console.log(this.state)))
      .catch(Err => console.log('err,Err'));
    }

    render() {
        return (
            <View>
              <Text>halo</Text>
            </View>
        );
    }

}

export default Follower;

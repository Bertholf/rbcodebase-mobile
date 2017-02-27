import React, {Component} from 'react';
import { View, Text } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

class Loading extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
		};
	}

	componentDidMount() {
		setInterval(() => {
			this.setState({
				visible: !this.state.visible
			});
		}, 3000);
	}

	render() {
		return(
				 <View style={{ flex: 1 }}>
	        <Spinner visible={this.state.visible}/>
	      </View>
		);
	}
}

module.exports = Loading;
import React from 'react';
import {
	Text,
	View,
	StyleSheet,
	Slider
} from 'react-native';
import AddEntry  from './components/AddEntry';
import { getMetricMetaInfo } from './utils/helpers';
import UdaciSlider from './components/UdaciSlider';

export default class App extends React.Component {
	render() {
		return (
	    <View style={styles.container}>
	    	<AddEntry />
	    </View>
	  );
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginLeft: 10,
		marginRight: 10,
		alignItems: 'center',
		justifyContent: 'center'
	},
	btn: {
		backgroundColor: '#E53224',
		padding: 10,
		paddingLeft: 50,
		paddingRight: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
	},
	btnText: {
		color: '#fff'
	}
})

import React from 'react';
import {
	Text,
	View,
	StyleSheet,
	Slider,
	Switch,
	TextInput,
	Image,
	KeyboardAvoidingView
} from 'react-native';
import AddEntry  from './components/AddEntry';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'


export default class App extends React.Component {
	render() {

		return (
			<Provider store={createStore(reducer)}>
				<View >
				<AddEntry />
				</View>
			</Provider>

	  );
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginLeft: 5,
		marginRight: 5,
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
	input: {

	},
	img: {
		width: 100,
		height: 100,
		borderRadius: 50,
	},
	btnText: {
		color: '#fff'
	}
})

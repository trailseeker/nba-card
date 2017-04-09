import React, { Component } from 'react'
import Styles from './styles'

import {
	View,
	Text,
} from 'react-native'

class app extends Component {
	render() {
		return (
			<View style={Styles.container}>
				<Text>app</Text>
			</View>
		)
	}
}

export default app
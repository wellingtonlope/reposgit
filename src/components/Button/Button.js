import React from 'react'
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'

import If from '../If'
import styles from './styles'
import { primaryColor } from '../../colors'

const Button = props => (
	<TouchableOpacity
		disabled={props.isLoading}
		style={[styles.button, props.style]}
		onPress={props.onPress}>

		<If test={props.isLoading}>
			<ActivityIndicator size={'small'} color={primaryColor} />
		</If>

		<If test={!props.isLoading}>
			<Text style={styles.label}>
				{props.label}
			</Text>
		</If>
	</TouchableOpacity>
)

Button.defaultProps = {
	isLoading: false
}

export default Button
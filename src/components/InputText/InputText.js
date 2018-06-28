import React from 'react'
import { View, Text, TextInput } from 'react-native'

import styles from './styles'
import { textSecondaryColor } from '../../colors';

const InputText = props => {
	const { label, placeholder, meta: { touched, error }, input: { onChange, ...restInput } } = props

	return (
		<View style={styles.wrapper}>
			<View style={[styles.wrapperInput, touched && error ? styles.errorInput : null]}>
				<Text style={[styles.label, touched && error ? styles.errorLabel : null]}>
					{label}
				</Text>
				
				<TextInput 
					style={styles.input}
					placeholder={placeholder}
					underlineColorAndroid={'transparent'}
					placeholderTextColor={textSecondaryColor}
					onChangeText={onChange}
					{...restInput}
				/>
			</View>
			
			<Text style={styles.errorMessage}>
				{touched && error ? error: ' '}
			</Text>
		</View>
	)
}

export default InputText
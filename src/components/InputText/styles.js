import { StyleSheet } from 'react-native'

import { errorColor, primaryColor, textPrimaryColor } from '../../colors'


export default StyleSheet.create({
	wrapper: {
		marginBottom: 8,
	},
	wrapperInput: {
		borderColor: primaryColor,
		borderWidth: 1,
		borderRadius: 5,
		paddingHorizontal: 16,
		paddingVertical: 10,
		marginBottom: 4,
	},
	label: {
		color: textPrimaryColor,
	},
	input: {
		width: 200,
		fontSize: 18,
		padding: 0,
	},
	errorMessage: {
		color: errorColor,
		marginHorizontal: 16,
	},
	errorLabel: {
		color: errorColor,
	},
	errorInput: {
		borderColor: errorColor,
	},
})

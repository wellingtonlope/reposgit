import { StyleSheet } from 'react-native'

import { errorColor, primaryColor } from '../../colors'

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		paddingVertical: 8,
		paddingHorizontal: 8,
		justifyContent: 'center'
	},
	error: {
		color: errorColor,
		marginBottom: 8
	},
	contentButtons: {
		justifyContent: 'space-between',
		flexDirection: 'row'
	},
	input: {
		marginVertical: 5
	},
	button: {
		flex: 1
	}
})

export default styles
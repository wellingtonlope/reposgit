import { StyleSheet } from 'react-native'

import { secondaryColor } from '../../colors'

export default StyleSheet.create({
	modalContainer: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.7)',
		justifyContent: 'center',
		alignItems: 'center'
	},
	boxContainer: {
		paddingVertical: 20,
		paddingHorizontal: 0,
		backgroundColor: secondaryColor,
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
		width: 280,
		height: 250
	},
	boxTitle: {
		fontWeight: 'bold',
		fontSize: 16
	}
})
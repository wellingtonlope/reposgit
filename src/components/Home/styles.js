import { StyleSheet, Platform } from 'react-native'

import { primaryColor, secondaryColor } from '../../colors'
 
export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: primaryColor,
	},
	header: {
		height: (Platform.OS === 'ios') ? 70 : 50,
		paddingTop: (Platform.OS === 'ios') ? 20 : 0,
		backgroundColor: primaryColor,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 20,
	},
	headerText: {
		fontSize: 30,
		color: secondaryColor,
		fontWeight: 'bold',
	},
	repoList: {
		padding: 20,
	},
	addButton: {
		height: 50,
		backgroundColor: secondaryColor,
		justifyContent: 'center',
		alignItems: 'center'
	},
	addButtonText: {
		color: primaryColor,
		fontSize: 16,
		fontWeight: 'bold'
	}
})
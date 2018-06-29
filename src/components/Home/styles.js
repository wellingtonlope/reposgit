import { StyleSheet, Platform, Dimensions } from 'react-native'

import { primaryColor, secondaryColor, primaryDarkColor } from '../../colors'

const height = Dimensions.get('window').height
const iPhone = Platform.OS === 'ios'
const iPhoneX = Platform.OS === 'ios' && height === 812
 
export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: primaryColor,
	},
	header: {
		paddingTop: iPhoneX ? 30 : iPhone ? 20 : 0,
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
		height: iPhoneX ? 60 : 50,
		backgroundColor: secondaryColor,
		justifyContent: 'center',
		alignItems: 'center',
		paddingBottom: iPhoneX ? 10 : 0
	},
	addButtonText: {
		color: primaryColor,
		fontSize: 16,
		fontWeight: 'bold'
	},
	contentEmpty: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	imageEmpty: {
		height: 128,
		width: 120
	},
	textEmpty: {
		fontSize: 20,
		fontWeight: 'bold',
		color: primaryDarkColor
	}
})
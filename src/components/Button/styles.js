import {StyleSheet} from 'react-native'

import {primaryColor, secondaryColor} from '../../colors'

const styles = StyleSheet.create({
	button: {
		backgroundColor: secondaryColor,
		justifyContent: 'center',
		alignItems: 'center'
	},
	label: {
		color: primaryColor,
		fontSize: 18,
		fontWeight: '500'
	}
})

export default styles
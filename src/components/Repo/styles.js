import { StyleSheet } from 'react-native'
import { secondaryColor, textPrimaryColor, textSecondaryColor, primaryColor } from '../../colors'

const styles = StyleSheet.create({
	repo: {
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 20,
		marginBottom: 20,
		borderRadius: 5,
		backgroundColor: secondaryColor,
		flexDirection: 'row'
	},
	repoBox: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	repoImage: {
		width: 50,
		height: 50,
		borderRadius: 25
	},
	repoInfo: {
		marginLeft: 10
	},
	repoTitle: {
		fontWeight: 'bold',
		color: textPrimaryColor
	},
	repoAuthor: {
		fontSize: 12,
		color: textSecondaryColor
	},
	repoLink: {
		color: primaryColor,
		fontSize: 12
	},
	deleteImage: {
		width: 30,
		height: 30
	}
})

export default styles
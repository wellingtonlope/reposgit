import React from 'react'

import {
	View,
	Image,
	Text,
	TouchableOpacity
} from 'react-native'

import styles from './styles'

const Repo = props => (
	<View style={styles.repo}>
		<View style={styles.repoBox}>
			<Image
				style={styles.repoImage}
				source={{ uri: props.data.thumbnail }}
			/>
			<View style={styles.repoInfo}>
				<Text style={styles.repoTitle}>{props.data.title}</Text>
				<Text style={styles.repoAuthor}>{props.data.author}</Text>
			</View>
		</View>
		<TouchableOpacity
			style={styles.button}
			onPress={() => props.removeRepo(props.data)}>
			<Text style={styles.buttonText}>X</Text>
		</TouchableOpacity>
	</View>
)

export default Repo
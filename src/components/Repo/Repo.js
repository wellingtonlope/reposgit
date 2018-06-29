import React from 'react'

import {
	View,
	Image,
	Text,
	TouchableOpacity,
	Linking
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
				<TouchableOpacity
					onPress={() => Linking.openURL(props.data.url)}>
					<Text style={styles.repoLink}>Acessar repositório</Text>
				</TouchableOpacity>
			</View>
		</View>
		<TouchableOpacity
			onPress={() => props.removeRepo(props.data)}>
			<Image style={styles.deleteImage} source={require('../../img/trash.png')}/>
		</TouchableOpacity>
	</View>
)

export default Repo
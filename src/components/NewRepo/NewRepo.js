import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
	Modal,
	Text,
	View
} from 'react-native'

import styles from './styles'
import NewRepoForm from '../../forms/NewRepoForm'
import { addRepo } from '../../actions/repo'


const NewRepo = props => (
	<Modal animationType='fade' transparent={true} visible={props.visible}>
		<View style={styles.modalContainer}>
			<View style={styles.boxContainer}>
				<Text style={styles.boxTitle}>Adicionar repositório</Text>
				<NewRepoForm onSubmit={props.addRepo} onCancel={props.onCancel} />
			</View>
		</View>
	</Modal>
)

export default NewRepo
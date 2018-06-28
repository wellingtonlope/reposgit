/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addRepo, removeRepo, openModal, closeModal } from '../../actions/repo'
import { primaryDarkColor } from '../../colors'

import {
	Text,
	View,
	ScrollView,
	TouchableOpacity,
	StatusBar
} from 'react-native';

import Repo from '../Repo'
import NewRepo from '../NewRepo';
import styles from './styles'

class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<StatusBar
					backgroundColor={primaryDarkColor}
				/>
				<View style={styles.header}>
					<Text style={styles.headerText}>ReposGit</Text>
				</View>

				<ScrollView contentContainerStyle={styles.repoList}>
					{
						this.props.repo.data.map(repo =>
							<Repo
								key={repo.id}
								data={repo}
								removeRepo={this.props.removeRepo.bind(this)}
							/>
						)
					}
				</ScrollView>
				<TouchableOpacity style={styles.addButton} onPress={() => this.props.openModal()}>
					<Text style={styles.addButtonText}>Adicionar</Text>
				</TouchableOpacity>
				<NewRepo
					onCancel={this.props.closeModal.bind(this)}
					addRepo={this.props.addRepo.bind(this)}
					visible={this.props.repo.modal}
				/>
			</View>
		)
	}
}


const mapStateToProps = state => ({ ...state.repo })
const mapDispatchToProps = dispatch => bindActionCreators({ addRepo, removeRepo, openModal, closeModal }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
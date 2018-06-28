import React from 'react'
import { Text, View } from 'react-native'
import { Field, reduxForm } from 'redux-form'

import styles from './styles'

import InputText from '../../components/InputText'
import Button from '../../components/Button'

const Form = props => {
	const { submitting, error, handleSubmit, onCancel } = props

	return (
		<View style={styles.wrapper}>
			<Text style={styles.error}>{error ? error : ''}</Text>

			<Field
				style={styles.input}
				name={'repo'}
				label={'Repositório'}
				placeholder={'organização/repositório'}
				component={InputText}
			/>
			<View style={styles.contentButtons}>
				<Button
					style={styles.button}
					label={'Cancelar'}
					onPress={props.onCancel}
				/>

				<Button
					style={styles.button}
					isLoading={submitting}
					label={'Adicionar'}
					onPress={handleSubmit}
				/>
			</View>
		</View>
	)
}

const validate = values => {
	const errors = {}

	if (!values.repo)
		errors.repo = 'Preencha este campo'

	return errors
}

const NewRepoForm = reduxForm({
	form: 'newRepoForm',
	validate
})(Form)

export default NewRepoForm
import axios from 'axios'
import { SubmissionError } from 'redux-form'

import { ADD_REPO, REMOVE_REPO, OPEN_MODAL, CLOSE_MODAL, BASE_URL } from '../constants'

const addRepo = values => {
	return async dispatch => {
		try {
			const response = await axios.get(`${BASE_URL}/${values.repo}`)

			dispatch({
				type: ADD_REPO,
				payload: response
			})
		} catch (error) {
			throw new SubmissionError({ repo: 'Repositório não encontrado' })
		}
	}
}

const removeRepo = values => {
	return dispatch => {
		dispatch({
			type: REMOVE_REPO,
			payload: values
		})
	}
}

const openModal = () => {
	return dispatch => {
		dispatch({
			type: OPEN_MODAL
		})
	}
}

const closeModal = () => {
	return dispatch => {
		dispatch({
			type: CLOSE_MODAL
		})
	}
}

export { addRepo, removeRepo, openModal, closeModal }
import { ADD_REPO, REMOVE_REPO, OPEN_MODAL, CLOSE_MODAL } from '../constants'

const INITIAL_STATE = {
	repo: {
		modal: false,
		status: 200,
		data: []
	}
}

const repo = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ADD_REPO:
			const data = action.payload.data
			const repository = {
				id: data.id,
				thumbnail: data.owner.avatar_url,
				title: data.name,
				author: data.owner.login
			}
			return {
				...state,
				repo: {
					modal: false,
					status: action.payload.status,
					data: [
						...state.repo.data,
						repository
					]
				}
			}
		case REMOVE_REPO:
			const id = action.payload.id
			return {
				...state,
				repo: {
					...state.repo,
					data: [
						...state.repo.data.filter(data => id !== data.id)
					]
				}
			}
		case OPEN_MODAL:
			return {
				...state,
				repo: {
					...state.repo,
					modal: true
				}
			}
		case CLOSE_MODAL:
			return {
				...state,
				repo: {
					...state.repo,
					modal: false
				}
			}
		default:
			return state
	}
}

export default repo
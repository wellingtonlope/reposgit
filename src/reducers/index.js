import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import repo from './repo'

const reducers = combineReducers({
	form,
	repo
})

export default reducers
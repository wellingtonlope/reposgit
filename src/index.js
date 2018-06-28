import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from './config/store'
import Home from './components/Home'

export default () => (
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<Home />
		</PersistGate>
	</Provider>
)

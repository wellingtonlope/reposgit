import { applyMiddleware, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

import reducers from '../reducers'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['repo'],
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = applyMiddleware(thunk)(createStore)(persistedReducer)

const persistor = persistStore(store)

export { store, persistor }
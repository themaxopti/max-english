import { languageReducer } from '../modules/LanguageModule/state/reducers/language.slice'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { ReduxModule } from './redux.module'
import { Reducers } from './types'
import { someSlice } from '../modules/testModule/state/test.reucer'
import { someSlice2 } from './some.slice'
import { themeReducer } from '../modules/ThemeModule/state/reducers/theme.slice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  // learningNavbar: learningNavbarReducer,
  theme: themeReducer,
  language: languageReducer
})

const persistConfig = {
  key: 'root',
  storage
  // blackList: ['theme']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

// export type RootReducer = typeof rootReducer
const store = configureStore({ reducer: persistedReducer, middleware: [thunk] })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const persistor = persistStore(store)
export default store

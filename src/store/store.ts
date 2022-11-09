import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { ReduxModule } from '../core/redux.module'
import { rootReducer } from '../modules/testModule/index'

const RootReducer = combineReducers({
  ...rootReducer,
})

export const reduxModule = new ReduxModule({
  reducer: RootReducer,
})

const store = reduxModule.store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store

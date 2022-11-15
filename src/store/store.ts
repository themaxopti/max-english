import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { ReduxModule } from './redux.module'
import { Reducers } from './types'
import { rootReducer } from '../modules/testModule/index'
import { someSlice } from '../modules/testModule/state/test.reucer'
import { someSlice2 } from './some.slice'

const RootReducer = combineReducers({
  ...rootReducer
})

// @ts-ignore
export const reduxModule = new ReduxModule(RootReducer)
const store = reduxModule.store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default store

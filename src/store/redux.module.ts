import { SomeInitialState, SOME_NAME } from './some.slice'
import { persistReducer, persistStore } from 'redux-persist'
import {
  AnyAction,
  CombinedState,
  configureStore,
  EmptyObject,
  Reducer,
  ReducersMapObject,
  Slice,
  ThunkMiddleware
} from '@reduxjs/toolkit'
import { EnhancedStore } from '@reduxjs/toolkit/dist/configureStore'
import { Module } from '../core/coreModule'
import { RootState } from './store'
import { Reducers } from './types'
import thunk from 'redux-thunk'

export type GetStateType = Reducer<CombinedState<Reducers>, AnyAction>

export class ReduxModule<T extends Reducer<any, AnyAction> | ReducersMapObject<any, AnyAction>> {
  public store
  constructor(rootReducer: T) {
    this.store = configureStore({ reducer: rootReducer, middleware: [thunk] })
  }
}

import { SomeInitialState, SOME_NAME } from './some.slice'
import { AnyAction, CombinedState, configureStore, Reducer, Slice, ThunkMiddleware } from '@reduxjs/toolkit'
import { EnhancedStore } from '@reduxjs/toolkit/dist/configureStore'
import { Module } from '../core/coreModule'
import { RootState } from './store'
import { Reducers } from './types'

export type GetStateType = Reducer<CombinedState<Reducers>, AnyAction>
export class ReduxModule {
  public store
  constructor(rootReducer: GetStateType) {
    this.store = configureStore({ reducer: rootReducer })
  }
}

import { SomeInitialState, someSlice2 } from './../../store/some.slice'
import { Module } from '../../core/coreModule'
import { InitialStateRecucer, someSlice } from './state/test.reucer'
import { Home } from './components/Some.component'
import { Reducer } from 'react'
import { AnyAction, combineReducers } from '@reduxjs/toolkit'

export const mainModule1 = new Module<InitialStateRecucer, null, typeof someSlice.name, null>({
  component: Home,
  slice: someSlice,
  reducer: someSlice.reducer
})
export const mainModule3 = new Module<SomeInitialState, null, typeof someSlice2.name, null>({
  component: Home,
  slice: someSlice2,
  reducer: someSlice2.reducer,
  modules: [mainModule1]
})

// const mainModule2 = new Module({ component: Home, modules: [mainModule3] })
export const { rootReducer, component: testComponent } = mainModule3

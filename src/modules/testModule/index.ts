import { someSlice2 } from './../../store/some.slice'
import { Module } from '../../core/coreModule'
import { InitialStateRecucer, someSlice } from './state/test.reucer'
import { Home } from './components/Some.component'
import { Reducer } from 'react'
import { AnyAction, combineReducers } from '@reduxjs/toolkit'

const mainModule1 = new Module({
  component: Home,
  slice: someSlice,
  reducer: someSlice.reducer,
})
const mainModule3 = new Module({
  component: Home,
  slice: someSlice2,
  reducer: someSlice2.reducer,
  modules: [mainModule1],
})

// const mainModule2 = new Module({ component: Home, modules: [mainModule3] })
export const { rootReducer, component: testComponent } = mainModule3

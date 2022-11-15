import { InitialStateRecucer } from '../modules/testModule/state/test.reucer'
import { SomeInitialState, SOME_NAME } from './some.slice'
import { AnyAction, CombinedState } from '@reduxjs/toolkit'
import { Reducer } from 'react'
import { NAME_TEST } from '../modules/testModule/state/test.reucer'

export type Reducers = {
  [SOME_NAME]: SomeInitialState
  [NAME_TEST]: InitialStateRecucer
}

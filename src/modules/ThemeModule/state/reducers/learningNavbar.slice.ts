import { AnyAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import React, { Reducer } from 'react'

export const LEARNING_NAVBAR = 'LEARNING_NAVBAR_reducer'

export interface InitialState {
  some: number
}

const initialState: InitialState = {
  some: 0
}

const slice2 = createSlice({
  name: LEARNING_NAVBAR,
  initialState,
  reducers: {}
})

export const someSlice2 = slice2
export type SomeReducer = Reducer<InitialState, AnyAction>

// const slice3 = createSlice({
//     name: 'bops',
//     initialState: { some: 0, ops: '10' },
//     reducers: {
//     },
// })

// export const someSlice3 = slice3

import { AnyAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import React, { Reducer } from 'react'

const arr = [1, 1, 2, 432]

export const SOME_NAME = 'ops'

export interface SomeInitialState {
  some: number
}

const initialState: SomeInitialState = {
  some: 0,
}

const slice2 = createSlice({
  name: SOME_NAME,
  initialState,
  reducers: {},
})

export const someSlice2 = slice2
export type SomeReducer = Reducer<SomeInitialState, AnyAction>

// const slice3 = createSlice({
//     name: 'bops',
//     initialState: { some: 0, ops: '10' },
//     reducers: {
//     },
// })

// export const someSlice3 = slice3

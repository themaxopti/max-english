import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type InitialStateRecucer = {
  opa: string
}

export const NAME_TEST = 'testttt'

const initialState: InitialStateRecucer = {
  opa: 'popa',
}

const slice = createSlice({
  name: NAME_TEST,
  initialState,
  reducers: {},
})

export const someSlice = slice

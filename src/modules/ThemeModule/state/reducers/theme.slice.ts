import { AnyAction, PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import React, { Reducer } from 'react'
import { persistReducer, persistStore } from 'redux-persist'
import storageSession from 'reduxjs-toolkit-persist/lib/storage/session'
import storage from 'redux-persist/lib/storage'

// export type Titles = Record<'blue', 'red'>
export type Titles = 'blue' | 'red' | 'some'

export interface Theme {
  title: Titles
  bodyColor: string
  primaryColor: string
  navbarColor: string
}

export type ThemeState = {
  themes: { [key in Titles]: Theme }
  mainTheme: Titles
}

// #FF7FC1
// FF60D2
// FD008D
export const initialState: ThemeState = {
  themes: {
    blue: {
      title: 'blue',
      bodyColor: '#E5EDF6',
      primaryColor: '#2C80FF',
      navbarColor: '#3195FC'
    },
    red: {
      title: 'red',
      bodyColor: '#DCA8A5',
      primaryColor: '#DC2D36',
      navbarColor: '#FC5F67'
    },
    some: {
      title: 'some',
      bodyColor: '#FFE83C',
      primaryColor: '#6CFFF0',
      navbarColor: '#3195FC'
    }
  },
  mainTheme: 'blue'
}

const slice = createSlice({
  name: 'Theme-module',
  initialState,
  reducers: {
    changeMainTheme: (state, action: PayloadAction<Titles>) => {
      state.mainTheme = action.payload
    }
  }
})

// const persistConfig = {
//   key: 'root',
//   storage: storageSession
// }

// export const persistedReducer = persistReducer(persistConfig, slice.reducer)

export const { changeMainTheme } = slice.actions

export const themeSlice = slice
export const themeReducer = slice.reducer

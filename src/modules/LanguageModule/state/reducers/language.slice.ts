import { AnyAction, PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import React, { Reducer } from 'react'

export type Titles = 'en' | 'ru' | 'ua'

export type HeaderLink = {
  title: string
  link: string
}

export type Navbar = {
  groups: string
  addGroup: string
  form: {
    title: string
    translate: string
    add: string
  }
}

export interface Language {
  title: Titles
  header: {
    links: HeaderLink[]
  }
  navbar: Navbar
}

export type LanguageState = {
  languages: {
    en: Language
    ru: Language
    ua: Language
  }
  mainLanguage: Titles
}

export const initialState: LanguageState = {
  languages: {
    en: {
      title: 'en',
      header: {
        links: [
          { link: 'dictionary', title: 'dictionary' },
          { link: 'training', title: 'training' },
          { link: 'learning', title: 'learning' },
          { link: 'login', title: 'login' },
          { link: 'chat', title: 'chat' }
        ]
      },
      navbar: {
        addGroup: 'Add group',
        form: {
          add: 'add',
          title: 'title',
          translate: 'translate'
        },
        groups: 'Groups'
      }
    },
    ru: {
      title: 'ru',
      header: {
        links: [
          { link: 'dictionary', title: 'словарь' },
          { link: 'training', title: 'тренировка' },
          { link: 'learning', title: 'обучение' },
          { link: 'login', title: 'вход' },
          { link: 'chat', title: 'чат' }
        ]
      },
      navbar: {
        addGroup: 'Добавить группу',
        form: {
          add: 'добавить',
          title: 'слово',
          translate: 'перевод'
        },
        groups: 'Групы'
      }
    },
    ua: {
      title: 'ua',
      header: {
        links: [
          { link: 'dictionary', title: 'словник' },
          { link: 'training', title: 'тренировка' },
          { link: 'learning', title: 'навчання' },
          { link: 'login', title: 'вхід' },
          { link: 'chat', title: 'чат' }
        ]
      },
      navbar: {
        addGroup: 'Додати группу',
        form: {
          add: 'додати',
          title: 'слово',
          translate: 'переклад'
        },
        groups: 'Групи'
      }
    }
  },
  mainLanguage: 'en'
}

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeMainLanguage: (state, action: PayloadAction<Titles>) => {
      state.mainLanguage = action.payload
    }
  }
})

export const { changeMainLanguage } = languageSlice.actions

export const languageReducer = languageSlice.reducer

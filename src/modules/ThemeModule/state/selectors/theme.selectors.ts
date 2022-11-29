import { Theme, ThemeState, Titles } from './../reducers/theme.slice'
import { createSelector } from '@reduxjs/toolkit'
import { RootState, useAppSelector } from '../../../../store/store'

export const blueTheme = (state: RootState) => state.theme.themes.blue
export const redTheme = (state: RootState) => state.theme.themes.red
export const orangeTheme = (state: RootState) => state.theme.themes.some

export const mainThemeTitle = (state: RootState) => state.theme.mainTheme
export const themesSelector = (state: RootState) => state.theme.themes

export const themesselector = createSelector(themesSelector, themes => {
  return Object.keys(themes).map((el, i) => {
    // @ts-ignore
    const elem = themes[el]
    return { color: elem.primaryColor, title: elem.title }
  })
})

export const mainTheme = createSelector(
  [blueTheme, redTheme, orangeTheme, mainThemeTitle],
  (...variables: any[]): Theme => {
    for (let i = 0; i < variables.length; i++) {
      const mainColor = variables[variables.length - 1]
      const currentColor = variables[i]
      if (i >= variables.length - 1) {
        continue
      }
      if (mainColor === currentColor.title) {
        return currentColor
      }
    }
    return variables[0]
  }
)

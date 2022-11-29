import { RootState } from '../../../../store/store'
import { createSelector } from '@reduxjs/toolkit'
import { Language, Titles } from '../reducers/language.slice'

export const mainLanguageTitleSelector = (state: RootState) => state.language.mainLanguage

export const enLanguageSelector = (state: RootState) => state.language.languages.en
export const ruLanguageSelector = (state: RootState) => state.language.languages.ru
export const uaLanguageSelector = (state: RootState) => state.language.languages.ua

export const languagesSelector = (state: RootState) => state.language.languages

export const languagesTitlesSelector = createSelector(languagesSelector, (languages): Titles[] => {
  return Object.keys(languages).map((el, i) => {
    // @ts-ignore
    const elem = languages[el]
    return elem.title
  })
})

export const languagesArraySelector = createSelector(languagesSelector, (languages): Language[] => {
  return Object.keys(languages).map((el, i) => {
    // @ts-ignore
    const elem = languages[el]
    return elem
  })
})

export const mainLanguageSelector = createSelector(
  [enLanguageSelector, ruLanguageSelector, uaLanguageSelector, mainLanguageTitleSelector],
  (...variables: any[]): Language => {
    for (let i = 0; i < variables.length; i++) {
      const mainLanguage = variables[variables.length - 1]
      const currentLanguage = variables[i]
      if (i >= variables.length - 1) {
        continue
      }
      if (mainLanguage === currentLanguage.title) {
        return currentLanguage
      }
    }
    return variables[0]
  }
)

export const mainLanguageNavbarSelector = createSelector(mainLanguageSelector, mainLanguage => {
  return mainLanguage.navbar
})

import { RootState } from '../../../../store/store'
import { initialState } from '../reducers/language.slice'
import {
  enLanguageSelector,
  languagesArraySelector,
  languagesTitlesSelector,
  mainLanguageSelector,
  mainLanguageTitleSelector,
  ruLanguageSelector,
  uaLanguageSelector
} from '../selectors/language.selectors'

describe('language selectors', () => {
  test('main language title selector', () => {
    expect(mainLanguageTitleSelector({ language: initialState } as RootState)).toBe('en')
  })

  test('english language selector', () => {
    expect(enLanguageSelector({ language: initialState } as RootState)).toEqual({
      title: 'en',
      header: {
        links: [
          { link: 'dictionary', title: 'dictionary' },
          { link: 'training', title: 'training' },
          { link: 'learning', title: 'learning' },
          { link: 'login', title: 'login' },
          { link: 'chat', title: 'chat' }
        ]
      }
    })
  })

  test('russian language selector', () => {
    expect(ruLanguageSelector({ language: initialState } as RootState)).toEqual({
      title: 'ru',
      header: {
        links: [
          { link: 'dictionary', title: 'словарь' },
          { link: 'training', title: 'тренировка' },
          { link: 'learning', title: 'обучение' },
          { link: 'login', title: 'вход' },
          { link: 'chat', title: 'чат' }
        ]
      }
    })
  })

  test('ukranian language selector', () => {
    expect(uaLanguageSelector({ language: initialState } as RootState)).toEqual({
      title: 'ua',
      header: {
        links: [
          { link: 'dictionary', title: 'словник' },
          { link: 'training', title: 'тренировка' },
          { link: 'learning', title: 'навчання' },
          { link: 'login', title: 'вхід' },
          { link: 'chat', title: 'чат' }
        ]
      }
    })
  })

  test('languages titles selector', () => {
    expect(languagesTitlesSelector.resultFunc(initialState.languages)).toEqual(['en', 'ru', 'ua'])
  })

  test('languages array selector', () => {
    const arrayLanguages = Object.keys(initialState.languages).map((el, i) => {
      // @ts-ignore
      const elem = initialState.languages[el]
      return elem
    })
    expect(languagesArraySelector.resultFunc(initialState.languages)).toEqual(arrayLanguages)
  })

  test('main language selector', () => {
    const { en, ru, ua } = initialState.languages

    expect(mainLanguageSelector.resultFunc(en, ru, ua, 'en')).toEqual(initialState.languages.en)
  })
})

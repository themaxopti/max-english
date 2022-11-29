import { changeMainLanguage, initialState, languageReducer } from '../reducers/language.slice'

describe('theme reducer', () => {
  test('change main theme action', () => {
    expect(languageReducer(initialState, changeMainLanguage('ru'))).toEqual({
      ...initialState,
      mainLanguage: 'ru'
    })
  })
})

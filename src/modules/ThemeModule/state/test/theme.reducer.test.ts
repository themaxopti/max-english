import { changeMainTheme, initialState, themeReducer } from '../reducers/theme.slice'

describe('theme reducer', () => {
  test('change main theme action', () => {
    expect(themeReducer(initialState, changeMainTheme('blue'))).toEqual({
      ...initialState,
      mainTheme: 'blue'
    })
  })
})

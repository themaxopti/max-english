import store, { RootState } from '../../../../store/store'
import { Theme, ThemeState, Titles } from '../reducers/theme.slice'
import {
  blueTheme,
  mainTheme,
  mainThemeTitle,
  redTheme,
  themesselector
} from '../selectors/theme.selectors'

describe('test theme selectors', () => {
  test(`blue theme`, () => {
    const theme: ThemeState = {
      themes: {
        red: {
          title: 'blue',
          bodyColor: 'red',
          navbarColor: 'blue',
          primaryColor: 'red'
        }
      } as { [key in Titles]: Theme },
      mainTheme: 'blue'
    }
    expect(blueTheme({ theme } as RootState)).toEqual(theme.themes.blue)
  })

  test(`red theme`, () => {
    const theme: ThemeState = {
      themes: {
        red: {
          title: 'red',
          bodyColor: 'red',
          navbarColor: 'blue',
          primaryColor: 'red'
        }
      } as { [key in Titles]: Theme },
      mainTheme: 'red'
    }
    expect(redTheme({ theme } as RootState)).toEqual(theme.themes.red)
  })

  test(`main theme title`, () => {
    const theme: ThemeState = {
      themes: {
        red: {
          title: 'blue',
          bodyColor: 'red',
          navbarColor: 'blue',
          primaryColor: 'red'
        }
      } as { [key in Titles]: Theme },
      mainTheme: 'blue'
    }
    expect(mainThemeTitle({ theme } as RootState)).toEqual('blue')
  })

  test(`themes selector`, () => {
    const theme = {
      red: {
        title: 'red',
        bodyColor: 'red',
        navbarColor: 'blue',
        primaryColor: 'red'
      } as Theme,
      blue: {
        title: 'blue',
        bodyColor: 'red',
        navbarColor: 'blue',
        primaryColor: 'red'
      } as Theme,
      some: {
        title: 'some',
        bodyColor: 'red',
        navbarColor: 'blue',
        primaryColor: 'red'
      } as Theme
    }

    expect(themesselector.resultFunc(theme)).toEqual([
      { color: 'red', title: 'red' },
      { color: 'red', title: 'blue' },
      { color: 'red', title: 'some' }
    ])
  })

  test(`main theme`, () => {
    const theme: ThemeState = {
      themes: {
        red: {
          title: 'red',
          bodyColor: 'red',
          navbarColor: 'blue',
          primaryColor: 'red'
        } as Theme,
        blue: {
          title: 'blue',
          bodyColor: 'red',
          navbarColor: 'blue',
          primaryColor: 'red'
        } as Theme,
        some: {
          title: 'some',
          bodyColor: 'red',
          navbarColor: 'blue',
          primaryColor: 'red'
        } as Theme
      },
      mainTheme: 'blue'
    }

    expect(
      mainTheme.resultFunc(theme.themes.blue, theme.themes.some, theme.themes.red, theme.mainTheme)
    ).toEqual({ title: 'blue', bodyColor: 'red', navbarColor: 'blue', primaryColor: 'red' })
  })
})

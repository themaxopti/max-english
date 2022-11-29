import { Language } from '../Language'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from 'store/store'
import { createMockRouter } from 'utils/testUtils/createMockRouter'

describe('Test Language', () => {
  jest.useFakeTimers()

  test('Should open language burger', async () => {
    const languages = ['ru', 'en', 'ukk']

    const view = render(
      <Provider store={store}>
        <Language />
      </Provider>
    )

    const language = screen.getByTestId('language')
    const burger = screen.getByTestId('language__burger')
    const currentLanguage = screen.getByTestId('language__current')
    const burgerElement = screen.getAllByTestId(`languages`)

    expect(burger).toHaveStyle('clip-path: inset(10% 50% 90% 50% round 10px);')
    fireEvent.click(language)

    await waitFor(
      () => {
        expect(burger).toHaveStyle('clip-path: inset(0% 0% 0% 0% round 10px);')
        // expect(screen.getAllByTestId('circle')).
      },
      { timeout: 50000 }
    )

    // fireEvent.click(burgerElement)
    burgerElement.forEach((el, i) => {
      fireEvent.click(el)
      expect(currentLanguage).toHaveTextContent(`${el.textContent}`)
    })
    // expect(currentLanguage).toHaveTextContent(`${burgerElement.textContent}`)

    expect(view).toMatchSnapshot()
  })
})

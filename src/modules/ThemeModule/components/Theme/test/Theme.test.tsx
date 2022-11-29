import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from 'store/store'
import { createMockRouter } from '../../../../../utils/testUtils/createMockRouter'
import { Theme } from '../Theme'

describe('Test Theme', () => {
  jest.useFakeTimers()

  test('Should open theme burger', async () => {
    const view = render(
      <Provider store={store}>
        <Theme />
      </Provider>
    )

    const theme = screen.getByTestId('theme')
    const burger = screen.getByTestId('theme__burger')
    expect(burger).toHaveStyle('clip-path: inset(10% 50% 90% 50% round 10px);')
    fireEvent.click(theme)

    await waitFor(
      () => {
        expect(screen.getByTestId('theme__burger')).toHaveStyle(
          'clip-path: inset(0% 0% 0% 0% round 10px);'
        )
        // expect(screen.getAllByTestId('circle')).
      },
      { timeout: 50000 }
    )

    const burgerElement = screen.getAllByTestId(`circleEl`)
    burgerElement.forEach(el => {
      fireEvent.click(el)
      const mainCircle = screen.getByTestId(`circle`)
      console.log(el.style.background)
      expect(mainCircle).toHaveStyle(`background:${el.style.background}`)
      expect(mainCircle).not.toHaveStyle(`background:red`)
    })
    expect(view).toMatchSnapshot()
  })
})

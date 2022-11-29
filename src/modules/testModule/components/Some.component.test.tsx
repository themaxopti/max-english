import { useRouter } from 'next/router'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../../store/store'
import { Header } from '../../../components/GridComponents/Header/Header'
import { testRouter } from '../../../utils/testUtils/useRouter'

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))
const pushMock = jest.fn()


test('test', async () => {
  testRouter(useRouter, {}, pushMock)

  const view = render(
    <Provider store={store}>
      <Header />
    </Provider>
  )

  const el = screen.getByTestId('header')
  expect(el).toBeInTheDocument()
})

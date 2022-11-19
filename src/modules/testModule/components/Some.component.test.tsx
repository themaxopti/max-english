import { Home } from 'modules/testModule/components/Some.component'
import { useRouter } from 'next/router'
import { fireEvent, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../../store/store'
import { Header } from '../../../components/GridComponents/Header/Header'

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))
const pushMock = jest.fn()


test('test', async () => {
  // @ts-ignore
  useRouter.mockReturnValue({
    query: {},
    push: pushMock,
  })
  const view = render(
    <Provider store={store}>
      <Header />
    </Provider>
  )
  const el = screen.getByTestId('header')
  expect(el).toBeInTheDocument()
})

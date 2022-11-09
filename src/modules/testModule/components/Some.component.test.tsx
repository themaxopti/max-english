import { Home } from 'modules/testModule/components/Some.component'
import { useRouter } from 'next/router'
import { fireEvent, render, screen } from '@testing-library/react'

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

// setup a new mocking function for push method
const pushMock = jest.fn()


test('test', async () => {
  // @ts-ignore
  useRouter.mockReturnValue({
    query: {},
    push: pushMock,
  })
  const apa = render(<Home />)
  const el = screen.getByTestId('link')
  fireEvent.click(el)
  const el2 = screen.getByText('some')
  expect(el2).toBeInTheDocument()
})

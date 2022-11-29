import { useRouter } from 'next/router'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from 'store/store'
import { Header } from 'components/GridComponents/Header/Header'
import { testRouter } from 'utils/testUtils/useRouter'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { createMockRouter } from '../../../../utils/testUtils/createMockRouter'
import Main2 from '../../../../../pages/index'
import Main from '../../../../../pages/learning/index'

// jest.mock('next/router', () => ({
//   useRouter: jest.fn()
// }))
// const pushMock = jest.fn()

// test('test', async () => {
//   // @ts-ignore
//   jest.useFakeTimers()

//   // //@ts-ignore
//   // //   useRouter.mockReturnValueOnce({
//   // //     query: { page: 'training' }
//   // //   })
//   // const mockRouter = {
//   //   query: { page: 'training' },
//   //   push: jest.fn() // the component uses `router.push` only
//   // }
//   // //@ts-ignore
//   // useRouter.mockReturnValue(mockRouter)

//   //   const router = createMockRouter({ query: { page: 'training' } })

//   const view = render(
//     <Provider store={store}>
//       <RouterContext.Provider value={createMockRouter({ query: { page: 'training' } })}>
//         <Main2 />
//       </RouterContext.Provider>
//     </Provider>
//   )

//   const header = screen.getByTestId('header')
//   expect(header).toBeInTheDocument()

//   const link = screen.getByTestId('header-link0')
//   expect(link).not.toHaveClass('header__link-active')

//   const link2 = screen.getByTestId('header-link1')
//   expect(link2).toHaveClass('header__link-active')

//   //   expect(screen.getByTestId('dict')).toBeInTheDocument()
//   //   expect(mockRouter.push).toHaveBeenCalledWith('/?page=dictionary')
//   //   await waitFor(
//   //     () => {
//   //       //   expect(mockRouter.push).toHaveBeenCalledTimes(2)
//   //       expect(screen.getByTestId('dictionary')).toBeInTheDocument()
//   //       expect(screen.getByTestId('header-link0')).toHaveClass('header__link-active')
//   //     },
//   //     { timeout: 50000 }
//   //   )

//   //   console.log(window.location.href)
//   //   expect(link).toHaveClass('header__link-active')

//   expect(view).toMatchSnapshot()
// })

describe('Test Header', () => {
  const links = ['dictionary', 'training', 'learning', 'login', 'chat']
  for (let i = 0; i < links.length - 1; i++) {
    test('Should have active class', () => {
      const link = links[i]

      const view = render(
        <Provider store={store}>
          <RouterContext.Provider value={createMockRouter({ query: { page: `${link}` } })}>
            <Header />
          </RouterContext.Provider>
        </Provider>
      )

      const linkElement = screen.getByTestId(`${link}`)

      expect(linkElement).toHaveClass('header__link-active')
      expect(view).toMatchSnapshot()
    })
  }
})

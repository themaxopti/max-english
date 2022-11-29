import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Provider, useSelector } from 'react-redux'
import store, { persistor } from '../src/store/store'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { mainTheme } from '../src/modules/ThemeModule/state/selectors/theme.selectors'
// import { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'

export default function App({ Component, pageProps }: AppProps) {
  // const color = useSelector(blueTheme)

  // const theme = createTheme({
  //   palette: {
  //     primary: {
  //       main: '#2C80FF'
  //     },
  //     secondary: {
  //       main: '#FF40BC'
  //     }
  //   }
  // })

  return (
    <Provider store={store}>
      {/* <ThemeProvider theme={theme}> */}
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
      {/* </ThemeProvider> */}
    </Provider>
  )
}

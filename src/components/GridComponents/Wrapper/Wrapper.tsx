import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Header } from '../Header/Header'
import { HeaderMobile } from '../HeaderMobile/HeaderMobile'
import { HeaderMobileContainer } from '../HeaderMobile/HeaderMobileContainer'
import { motion } from 'framer-motion'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useMediaQuery } from 'react-responsive'
import { useSelector } from 'react-redux'
import { mainTheme } from '../../../modules/ThemeModule/state/selectors/theme.selectors'
import { Navbar, NavbarPortal } from '../../../modules/NavbarModule/components/Navbar/Navbar'

interface WrapperProps {
  children: any
}

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const [domLoaded, setDomLoaded] = useState(false)
  const [render, setrender] = useState(false)
  const color = useSelector(mainTheme)
  const mainThemee = useSelector(mainTheme)

  const theme = createTheme({
    palette: {
      primary: {
        main: color.primaryColor
      },
      secondary: {
        main: '#FF40BC'
      },
      info: {
        main: '#FC00DF'
      }
    }
  })

  return (
    <>
      <style global jsx>
        {`
          body {
            background-color: ${mainThemee.bodyColor};
          }
        `}
      </style>
      {/* <NavbarPortal className='portal'> */}
      <Navbar />
      {/* </NavbarPortal> */}
      <ThemeProvider theme={theme}>
        {<Header />}
        {<HeaderMobileContainer />}
        {/* {<div style={{ height: '1000px' }}>{children}</div>} */}
      </ThemeProvider>
    </>
  )
}

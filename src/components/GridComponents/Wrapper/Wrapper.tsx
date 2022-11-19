import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Header } from '../Header/Header'
import { HeaderMobile } from '../HeaderMobile/HeaderMobile'
import { HeaderMobileContainer } from '../HeaderMobile/HeaderMobileContainer'
import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'

interface WrapperProps {
  children: any
}

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const [domLoaded, setDomLoaded] = useState(false)
  const [render, setrender] = useState(false)

  const isSmall = useMediaQuery({
    query: '(max-width: 992px)'
  })
  const isBig = useMediaQuery({
    query: '(min-width: 992px)'
  })
  useEffect(() => {
    console.log(isSmall)
    console.log(isBig)

    setDomLoaded(true)
  }, [])

  useEffect(() => {
    setrender(!render)
    console.log(isSmall)
  }, [isSmall])

  useEffect(() => {
    setrender(!render)
    console.log(isBig)
  }, [isBig])

  return (
    <>
      {isBig && domLoaded ? <Header /> : <HeaderMobileContainer />}
      {/* {isSmall && domLoaded ? <HeaderMobileContainer /> : ''} */}
      <div>sadas</div>
    </>
  )
}

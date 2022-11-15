import Image from 'next/image'
import React from 'react'
import { Header } from '../Header/Header'
import { HeaderMobile } from '../HeaderMobile/HeaderMobile'

interface WrapperProps {
  children: any
}

// @ts-ignore
const customLoader = ({ src, width, quality }) => {
  return `http://localhost:3000/image/${src}?w=${width}&q=${quality || 75}`
}

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <>
      <Header />
      <HeaderMobile />
    </>
  )
}

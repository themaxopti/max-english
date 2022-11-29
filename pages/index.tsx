import Head from 'next/head'
import Image from 'next/image'
import { Module } from '../src/core/coreModule'
import { Home } from 'modules/testModule/components/Some.component'
import styles from '../styles/Home.module.css'
import { NavbarDictionary } from '../src/modules/DictionaryModule'
import { Wrapper } from '../src/components/GridComponents/Wrapper/Wrapper'
import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Header } from '../src/components/GridComponents/Header/Header'
import { HeaderMobileContainer } from '../src/components/GridComponents/HeaderMobile/HeaderMobileContainer'
import Learning from './learning'
import classNames from 'classnames'
import { Navbar } from '../src/modules/NavbarModule/components/Navbar/Navbar'

export default () => {
  const [active, setActive] = useState(false)

  const classNamee = classNames({
    foo: active
  })

  return (
    <>
      {/* <Navbar /> */}
      <Wrapper>
        <div onClick={() => setActive(!active)} data-testid='dictionary'>
          dictionary
        </div>
        <div data-testid='some' className={classNamee}>
          some
        </div>
      </Wrapper>
    </>
  )
}

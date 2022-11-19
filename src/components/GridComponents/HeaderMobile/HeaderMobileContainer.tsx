import classNames from 'classnames'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { HeaderMobile } from './HeaderMobile'
import s from './HeaderMobile.module.scss'

export const HeaderMobileContainer = () => {
  const router = useRouter()
  const [clicked, setClicked] = useState(true)
  const links = [
    { page: 'dictionary' },
    { page: 'learning' },
    { page: 'translate' },
    { page: 'user' },
    { page: 'login' },
    { page: 'chat' }
  ]
  const [currentPage, setCurrentpage] = useState('dictionary')

  useEffect(() => {
    if (!router.isReady) return
    if (!router.query.page) {
      router.push({ query: { page: currentPage } })
    }
  }, [router.isReady])

  useEffect(() => {
    if (!router.isReady) return
    if (!router.query.page) {
      console.log('here')
    }
  }, [router.query.page])

  const burgerClasses = classNames({
    [s.burger]: true,
    [s['burger-hide']]: clicked
  })

  const navbarClasses = classNames({
    [s.navbar]: true,
    [s['navbar-clicked']]: !clicked
  })

  function linkClasses(linkPage: string) {
    return classNames({
      [s.burger__link]: true,
      [s['burger__link-active']]: linkPage === router.query.page ? true : false
    })
  }

  const pushToUrl = (page: string) => {
    router.push({ query: { page } })
  }

  return (
    <>
      <HeaderMobile
        burgerClasses={burgerClasses}
        clicked={clicked}
        linkClasses={linkClasses}
        links={links}
        navbarClasses={navbarClasses}
        pushToUrl={pushToUrl}
        setIsClicked={setClicked}
      />
    </>
  )
}

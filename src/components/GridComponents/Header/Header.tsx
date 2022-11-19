import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Img } from '../../Img/Img'
import s from './Header.module.scss'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { Container } from '../../Container/Container'
import { motion } from 'framer-motion'
import { Language } from '../../../modules/LanguageModule/components/Language/Language'
import { Theme } from '../../../modules/ThemeModule/components/Theme/Theme'
import { useRouter } from 'next/router'

export const Header = () => {
  const links = ['dictionary', 'training', 'learning', 'login', 'chat']
  const [active, setActive] = useState('dictionary')
  const router = useRouter()

  useEffect(() => {
    if (!router.isReady) return
    // if (!router.query.page) {
    //   router.push({ query: { page: currentPage } })
    // }
    // setActive(router.query.page as string)
  }, [router.isReady])

  function headerLinkClasses(name: string) {
    return classNames({
      [s.header__link]: true,
      [s['header__link-active']]: name === router.query.page ? true : false
    })
  }

  return (
    <>
      <Container>
        <div data-testid="header" className={s.header}>
          <div className={s.header__logo}>
            <div>
              <Link href='/'>
                <Image
                  layout='responsive'
                  alt=''
                  width={180}
                  height={65}
                  src={'/images/GridComponents/logo.svg'}
                />
              </Link>
            </div>
          </div>

          <motion.div className={s.header__links}>
            {links.map((el, i) => (
              <motion.div key={i} className={headerLinkClasses(el)} onClick={() => setActive(el)}>
                <Link
                  className={s.link}
                  // style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}
                  href={{ pathname: `/${el}`, query: { page: el } }}
                >
                  <nav>{el}</nav>
                  {router.query.page === el && (
                    <motion.div
                      layoutId='underline'
                      className={s['header__link-line']}
                    ></motion.div>
                  )}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className={s.header__utils}>
            <div className={s['header__lang-color']}>
              <Language />
              {/* <div className={s.heder__colors}></div> */}
              <Theme />
            </div>
            <AccountCircleIcon className={s.header__user} color='primary' />
          </div>
        </div>
      </Container>
    </>
  )
}

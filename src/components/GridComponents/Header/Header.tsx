import classNames from 'classnames'
import Image from 'next/legacy/image'
import Link from 'next/link'
import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { Img } from '../../Img/Img'
import s from './Header.module.scss'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { Container } from '../../Container/Container'
import { motion } from 'framer-motion'
import { Language } from '../../../modules/LanguageModule/components/Language/Language'
import { Theme } from '../../../modules/ThemeModule/components/Theme/Theme'
import { useRouter } from 'next/router'
import { Logo } from './test/Logo'
import { HeaderLink } from './HeaderLink/HeaderLink'
import { HeaderLinks } from './HeaderLink/HeaderLinks'
import { useAppSelector } from '../../../store/store'
import {
  languagesArraySelector,
  mainLanguageSelector
} from '../../../modules/LanguageModule/state/selectors/language.selectors'

export const Header = React.memo(() => {
  const [render, setrender] = useState(false)

  const languages = useAppSelector(languagesArraySelector)
  const mainLanuage = useAppSelector(mainLanguageSelector)
  // const currentLanuage

  // console.log('render')

  return (
    <>
      {/* <div onClick={() => setrender(!render)}>render</div> */}
      <Container>
        <div data-testid='header' className={s.header}>
          <div className={s.header__logo}>
            <div>
              <Link href='/'>
                <Logo className='app-logo-pc' />
              </Link>
            </div>
          </div>

          <HeaderLinks />

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
})

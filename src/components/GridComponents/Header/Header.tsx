import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Img } from '../../Img/Img'
import s from './Header.module.scss'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { Container } from '../../Container/Container'

export const Header = () => {
  return (
    <>
      <Container>
        <div className={s.header}>
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

          <div className={s.header__links}>
            <div className={s.header__link}>
              <Link href='/'>dictionary</Link>
            </div>
            <div className={s.header__link}>
              <Link href='/'>training</Link>
            </div>
            <div className={s.header__link}>
              <Link href='/'>learning</Link>
            </div>
          </div>

          <div className={s.header__utils}>
            <div className={s['header__lang-color']}>
              <div className={s.header__language}>
                <div>en</div>
                <div>
                  <Img
                    layOut='intrinsic'
                    height={10}
                    width={10}
                    src={'/images/GridComponents/arrow.svg'}
                  />
                </div>
              </div>
              <div className={s.heder__colors}></div>
            </div>
            <AccountCircleIcon
              className={s.header__user}
              color='secondary'
            />
          </div>
        </div>
      </Container>
    </>
  )
}

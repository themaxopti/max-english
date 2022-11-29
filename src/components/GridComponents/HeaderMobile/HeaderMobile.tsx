import React, { useEffect, useState } from 'react'
import s from './HeaderMobile.module.scss'
import MenuIcon from '@mui/icons-material/Menu'
import { Container } from '../../Container/Container'
import { Img } from '../../Img/Img'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MobileLearning } from '../../../modules/NavbarModule/components/mobileLearning/MobileLearning'
import { MobileDictionary } from '../../../modules/NavbarModule/components/mobileDictionary/MobileDictionary'
import st from '/styles/Nah.module.scss'
import { Language } from '../../../modules/LanguageModule/components/Language/Language'
import { MobileLanguage } from '../../../modules/LanguageModule/components/MobileLanguage/MobileLanguage'
import { Logo } from '../Header/test/Logo'
import { AddGroupFormContainer } from '../../../modules/NavbarModule/components/Groups/AddGroupFormContainer'
import { useAppSelector } from '../../../store/store'
import { mainLanguageSelector } from '../../../modules/LanguageModule/state/selectors/language.selectors'

interface HeaderMobileProps {
  setIsClicked: (isClicked: boolean) => void
  burgerClasses: string
  navbarClasses: string
  pushToUrl: (page: string) => void
  linkClasses: (linkPage: string) => string
  links: {
    page: string
  }[]
  clicked: boolean
}

export const HeaderMobile: React.FC<HeaderMobileProps> = ({
  burgerClasses,
  linkClasses,
  links,
  pushToUrl,
  setIsClicked,
  navbarClasses,
  clicked
}) => {
  const currentLanuageLinks = useAppSelector(mainLanguageSelector).header.links

  return (
    <>
      <Container padding='50px 0 0 0'>
        <div className={s['header-mobile']}>
          <div>
            <Link href={'/'}>
              {/* <Img
                height={40}
                width={120}
                src={'/images/GridComponents/logo.svg'}
                layOut={'intrinsic'}
              /> */}
              <Logo className='app-logo-mobile' />
            </Link>
          </div>
          <div onClick={() => setIsClicked(!clicked)}>
            {/* <MenuIcon className={navbarClasses} /> */}
            <img src='/images/GridComponents/menu.png' className={navbarClasses} alt='' />
          </div>
        </div>
      </Container>
      <div className={burgerClasses}>
        <Container className={s.burger__container} rowGap='100px' columnDirection={true}>
          <div className={s.burger__links}>
            {currentLanuageLinks.map((link, i) => (
              <div key={i} onClick={() => pushToUrl(link.link)} className={linkClasses(link.link)}>
                {link.title}
              </div>
            ))}
            <MobileLanguage />
            <div>1</div>
          </div>
          {/* <Language /> */}

          <MobileDictionary />
          <AddGroupFormContainer />
          {/* <MobileLearning /> */}
        </Container>
      </div>
    </>
  )
}

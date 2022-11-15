import React from 'react'
import s from './HeaderMobile.module.scss'
import MenuIcon from '@mui/icons-material/Menu'
import { Container } from '../../Container/Container'
import { Img } from '../../Img/Img'
import Link from 'next/link'
import { Flex } from '../../Flex/Flex'
import { FormField } from '../../Form/FormField'
import { LearningFormContainer } from '../../../modules/LearningNavbarModule/components/Form/FormContainer'

export const HeaderMobile = () => {
  return (
    <>
      <Container padding='50px 0 0 0'>
        <div className={s['header-mobile']}>
          <div>
            <Img
              height={40}
              width={120}
              src={'/images/GridComponents/logo.svg'}
              layOut={'intrinsic'}
            />
          </div>
          <div>
            <Link href={'/'}>
              <MenuIcon className={s.navbar} />
            </Link>
          </div>
        </div>
      </Container>
      <div className={s.burger}>
        <Container className={s.burger__container} rowGap='100px' columnDirection={true}>
          <div className={s.burger__links}>
            <div className={s.burger__link}>dictionary</div>
            <div className={s.burger__link}>learning</div>
            <div className={s.burger__link}>training</div>
          </div>

          <Flex direction='column' className={s['burger__learning']} rowGap={'30px'}>
            <div>Add word</div>
            <div className={s['burger__groups']}>
              <div>soem</div>
              <div>some</div>
              <div>some</div>
            </div>
            <Flex direction='column' className={s['burger__add-word']} rowGap='10px'>
              <div>Or add own word</div>
              <LearningFormContainer />
            </Flex>
          </Flex>
        </Container>
      </div>
    </>
  )
}

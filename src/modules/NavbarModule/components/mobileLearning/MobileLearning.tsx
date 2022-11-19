import React from 'react'
import { Flex } from '../../../../components/Flex/Flex'
import { LearningFormContainer } from '../Form/FormContainer'
import { MobileDictionary } from '../mobileDictionary/MobileDictionary'
import s from '/src/components/GridComponents/HeaderMobile/HeaderMobile.module.scss'
export interface MobileLearningProps {}

export const MobileLearning = () => {
  return (
    <Flex direction='column' className={s['burger__learning']} rowGap={'30px'}>
      <div>Add word</div>
      <div className={s['burger__groups']}>
        <div>soem</div>
        <div>some</div>
        <div>some</div>
      </div>
      <Flex direction='column' className={s['burger__add-word']} rowGap='10px'>
        <LearningFormContainer />
        {/* <MobileDictionary /> */}
      </Flex>
    </Flex>
  )
}

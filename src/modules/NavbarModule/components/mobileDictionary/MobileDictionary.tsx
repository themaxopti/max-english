import React from 'react'
import { Flex } from '../../../../components/Flex/Flex'
import { motion } from 'framer-motion'
import s from './MobileDictionary.module.scss'
import { useSelector } from 'react-redux'
import { mainLanguageNavbarSelector } from '../../../LanguageModule/state/selectors/language.selectors'

export const MobileDictionary = () => {
  const navbarLanguage = useSelector(mainLanguageNavbarSelector)

  return (
    <>
      <Flex direction='column' rowGap='20px'>
        <div className={s.groups}>{navbarLanguage.groups}</div>
        <Flex direction='column' className={s.groups__nav} rowGap='13px'>
          <motion.div className={s.groups} whileTap={{ scale: 1.1 }}>
            Group title
          </motion.div>
          <motion.div className={s.groups} whileTap={{ scale: 1.1 }}>
            Group title
          </motion.div>
          <motion.div className={s.groups} whileTap={{ scale: 1.1 }}>
            Group title
          </motion.div>
          <motion.div className={s.groups} whileTap={{ scale: 1.1 }}>
            Group title
          </motion.div>
          <motion.div className={s.groups} whileTap={{ scale: 1.1 }}>
            Group title
          </motion.div>
          <motion.div className={s.groups} whileTap={{ scale: 1.1 }}>
            Group title
          </motion.div>
          <motion.div className={s.groups} whileTap={{ scale: 1.1 }}>
            Group title
          </motion.div>
          <motion.div className={s.groups} whileTap={{ scale: 1.1 }}>
            Group title
          </motion.div>
        </Flex>
      </Flex>
    </>
  )
}

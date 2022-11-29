import React from 'react'
import { motion } from 'framer-motion'
import s from './MobileLanguage.module.scss'
import { useState, useCallback } from 'react'
import {
  languagesTitlesSelector,
  mainLanguageSelector
} from '../../state/selectors/language.selectors'
import { useSelector } from 'react-redux'
import { useAppDispatch, useAppSelector } from '../../../../store/store'
import { changeMainLanguage } from '../../state/reducers/language.slice'

export const MobileLanguage = () => {
  const [active, setActive] = useState(false)
  // const [currentLanuage, setCurrentLanuage] = useState('en')
  // const languages = ['ru', 'en', 'uk']
  const languages = useSelector(languagesTitlesSelector)
  const dispatch = useAppDispatch()
  const currentLanuage = useAppSelector(mainLanguageSelector).title

  return (
    <>
      <motion.nav
        tabIndex={0}
        onBlur={() => {
          setActive(false)
        }}
        onClick={() => setActive(!active)}
        initial={false}
        animate={active ? 'open' : 'closed'}
        className={s.language__navigation}
      >
        <div className={s.header__language}>
          <motion.div>{currentLanuage}</motion.div>
          <svg width='10' fill='black' height='10' viewBox='0 0 20 20'>
            <path d='M0 7 L 20 7 L 10 16' />
          </svg>
        </div>

        <motion.div
          variants={{
            open: {
              display: 'flex'
            },
            closed: {
              display: 'none'
            }
          }}
          className={s.header__language__content}
        >
          {languages.map((el, i) => (
            <motion.div
              onClick={() => dispatch(changeMainLanguage(el))}
              whileHover={{ scale: 1.3 }}
              key={i}
            >
              {el}
            </motion.div>
          ))}
        </motion.div>
      </motion.nav>
    </>
  )
}

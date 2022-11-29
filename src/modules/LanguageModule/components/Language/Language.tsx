import React from 'react'
import { motion } from 'framer-motion'
import s from './Language.module.scss'
import { useState, useCallback } from 'react'
import { useAppearence } from '../../../../utils/motion/language'
import { useMediaQuery } from 'react-responsive'
import { LanguageBurger } from './LanguageBurger/LanguageBurger'
import { useSelector } from 'react-redux'
import { mainLanguageSelector } from '../../state/selectors/language.selectors'

export const Language = React.memo(() => {
  const [active, setActive] = useState(false)
  // const [currentLanuage, setCurrentLanuage] = useState('en')
  const currentLanuage = useSelector(mainLanguageSelector).title

  return (
    <>
      <motion.nav
        data-testid='language'
        tabIndex={0}
        onBlur={() => {
          setActive(false)
        }}
        onClick={() => setActive(!active)}
        initial={false}
        animate={active ? 'open' : 'closed'}
        className={s.language__navigation}
      >
        <motion.div
          whileTap={{ scale: 1.2 }}
          whileHover={{ scale: 1.1 }}
          className={s.header__language}
        >
          <motion.div data-testid='language__current'>{currentLanuage}</motion.div>
          <svg width='10' fill='black' height='10' viewBox='0 0 20 20'>
            <path d='M0 7 L 20 7 L 10 16' />
          </svg>
        </motion.div>

        {/* <motion.div
          data-testid='language__burger'
          variants={{
            open: {
              clipPath: 'inset(0% 0% 0% 0% round 10px)',
              transition: {
                type: 'spring',
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05
              }
            },
            closed: {
              clipPath: 'inset(10% 50% 90% 50% round 10px)',
              transition: {
                type: 'spring',
                bounce: 0,
                duration: 0.3
              }
            }
          }}
          // variants={useAppearence()}
          className={s.header__language__content}
        >
          {languages.map((el, i) => (
            <motion.div
              data-testid={`languages`}
              onClick={() => setCurrentLanuage(el)}
              whileHover={{ scale: 1.3 }}
              key={i}
            >
              {el}
            </motion.div>
          ))}
        </motion.div> */}
        <LanguageBurger />
      </motion.nav>
    </>
  )
})

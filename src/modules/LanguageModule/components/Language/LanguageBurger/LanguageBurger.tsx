import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import s from '../Language.module.scss'
import { useSelector } from 'react-redux'
import { languagesTitlesSelector } from '../../../state/selectors/language.selectors'
import { useAppDispatch } from '../../../../../store/store'
import { changeMainLanguage } from '../../../state/reducers/language.slice'

interface LanguageBurgerProps {
  // setCurrentLanuage: React.Dispatch<React.SetStateAction<string>>
}

export const LanguageBurger = React.memo(({}: LanguageBurgerProps) => {
  // const languages = React.useMemo(() => ['ru', 'en', 'uk'], [])
  const languages = useSelector(languagesTitlesSelector)
  const dispatch = useAppDispatch()

  // useEffect(() => {
  //   console.log(languagesTitles)
  // }, [])

  return (
    <motion.div
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
          onClick={() => dispatch(changeMainLanguage(el))}
          whileHover={{ scale: 1.3 }}
          key={i}
        >
          {el}
        </motion.div>
      ))}
    </motion.div>
  )
})

import React from 'react'
import { motion } from 'framer-motion'
import { useState, useCallback } from 'react'
import s from './Theme.module.scss'
import { useAppDispatch } from '../../../../store/store'
import { changeMainTheme, Titles } from '../../state/reducers/theme.slice'
import { useSelector } from 'react-redux'
import { mainTheme, themesselector, themesSelector } from '../../state/selectors/theme.selectors'

export const Theme = React.memo(() => {
  const [active, setActive] = useState(false)
  // const [currentColor, setCurrentColor] = useState('#2C80FF')
  const colors = useSelector(themesselector)
  const currentColor = useSelector(mainTheme).primaryColor
  const dispatch = useAppDispatch()

  return (
    <>
      <motion.nav
        tabIndex={0}
        onBlur={() => {
          setActive(false)
        }}
        onClick={() => setActive(!active)}
        data-testid='theme'
        initial={false}
        animate={active ? 'open' : 'closed'}
        className={s.circle__navigation}
      >
        <motion.div
          whileTap={{ scale: 1.2 }}
          whileHover={{ scale: 1.1 }}
          className={s.circle}
          data-testid='circle'
          style={{
            background: currentColor
          }}
        ></motion.div>

        <motion.div
          data-testid='theme__burger'
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
          className={s.circle__language__content}
        >
          {colors.map((el, i) => (
            <motion.div
              className={s.circle}
              data-testid={`circleEl`}
              onClick={() => {
                // setCurrentColor(el.color)
                // @ts-ignore
                dispatch(changeMainTheme(el.title))
              }}
              whileHover={{ scale: 1.1 }}
              key={i}
              style={{
                background: el.color
              }}
            >
              {/* {el} */}
            </motion.div>
          ))}
        </motion.div>
      </motion.nav>
    </>
  )
})

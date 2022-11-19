import React from 'react'
import { motion } from 'framer-motion'
import { useState, useCallback } from 'react'
import s from './Theme.module.scss'

export const Theme = () => {
  const [active, setActive] = useState(false)
  const [currentColor, setCurrentColor] = useState('#34EEAA')
  const colors = ['#34EEAA', 'blue', '#4B63EE', '#EE2533']

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
        className={s.circle__navigation}
      >
        <motion.div
          whileTap={{ scale: 1.2 }}
          whileHover={{ scale: 1.1 }}
          className={s.circle}
          style={{
            background: currentColor
          }}
        ></motion.div>

        <motion.div
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
              onClick={() => setCurrentColor(el)}
              whileHover={{ scale: 1.1 }}
              key={i}
              style={{
                background: el
              }}
            >
              {/* {el} */}
            </motion.div>
          ))}
        </motion.div>
      </motion.nav>
    </>
  )
}

import { NextRouter, useRouter, Router } from 'next/router'
import React, { useState, useCallback, useMemo, useEffect } from 'react'
import { HeaderLink } from './HeaderLink'
import { motion } from 'framer-motion'
import s from '../Header.module.scss'
import classNames from 'classnames'
import { useAppSelector } from '../../../../store/store'
import { mainLanguageSelector } from '../../../../modules/LanguageModule/state/selectors/language.selectors'

interface HeaderLinksProps {}

export const HeaderLinks = React.memo(() => {
  const [links, setLinks] = useState(['dictionary', 'training', 'learning', 'login', 'chat'])
  const currentLanuage = useAppSelector(mainLanguageSelector).header.links

  useEffect(() => {
    // console.log(currentLanuage)
  }, [])

  return (
    <>
      <motion.div className={s.header__links}>
        {currentLanuage.map((el, i) => (
          <HeaderLink link={el.link} index={i} title={el.title} key={i} />
        ))}
      </motion.div>
    </>
  )
})

import classNames from 'classnames'
import Image from 'next/legacy/image'
import Link from 'next/link'
import React, { useState, useEffect, useMemo } from 'react'
import s from '../Header.module.scss'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { motion } from 'framer-motion'
import { NextRouter, useRouter } from 'next/router'
import { useAppSelector } from '../../../../store/store'
import { mainTheme } from '../../../../modules/ThemeModule/state/selectors/theme.selectors'

interface HeaderLinkProps {
  index: number
  title: string
  link: string
}

export const HeaderLink: React.FC<HeaderLinkProps> = React.memo(({ index, title, link }) => {
  const router = useRouter()
  const blueColor = useAppSelector(mainTheme)

  function headerLinkClasses(name: string) {
    return classNames({
      [s.header__link]: true,
      [s['header__link-active']]: name === router.query.page ? true : false
    })
  }

  return (
    <motion.div
      data-testid={`${link}`}
      key={index}
      className={headerLinkClasses(link)}
      onClick={() => {
        router.push({
          pathname: `/${link === 'dictionary' ? '' : link}`,
          query: { page: link }
        })
      }}
    >
      <nav>{title}</nav>
      {router.query.page === link && (
        <motion.div
          layoutId='underline'
          style={{
            background: `${blueColor.primaryColor}`
          }}
          className={s['header__link-line']}
        ></motion.div>
      )}
    </motion.div>
  )
})

import classNames from 'classnames'
import React from 'react'
import s from './Container.module.scss'

export interface ContainerProps {
  children: any
  padding?: string
  columnDirection?: boolean
  rowGap?: string
  className?: string
}

export const Container: React.FC<ContainerProps> = ({
  children,
  padding,
  columnDirection,
  rowGap,
  className
}) => {
  const classes = classNames([s.container], [className])

  return (
    <div
      className={classes}
      style={{
        padding,
        flexDirection: columnDirection ? 'column' : 'row',
        rowGap
      }}
    >
      {children}
    </div>
  )
}

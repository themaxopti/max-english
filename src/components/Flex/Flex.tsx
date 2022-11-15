import React from 'react'

export interface FlexProps {
  direction?: 'column' | 'row'
  rowGap?: string
  columnGap?: string
  justifyContent?:
    | 'spaceBetween'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-around'
    | 'space-evenly'
  alignItems?: 'center' | 'stretch' | 'start' | 'end'
  flexBasis?: string
  flexShrink?: '0' | '1' | '2'
  flexGrow?: '1' | '2' | '3'
  children?: any
  className?: string
}

export const Flex: React.FC<FlexProps> = ({
  children,
  flexGrow,
  flexShrink,
  alignItems,
  columnGap,
  direction,
  flexBasis,
  justifyContent,
  rowGap,
  className
}) => {
  return (
    <>
      <div
        className={className}
        style={{
          display: 'flex',
          flexDirection: direction,
          alignItems,
          columnGap,
          flexBasis,
          justifyContent,
          rowGap,
          flexGrow,
          flexShrink
        }}
      >
        {children}
      </div>
    </>
  )
}

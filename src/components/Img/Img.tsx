import Image from 'next/legacy/image'
import React from 'react'

export interface ImgProps {
  width: number
  height: number
  layOut: 'responsive' | 'fill' | 'fixed' | 'intrinsic'
  src: string
}

export const Img: React.FC<ImgProps> = ({
  height = 10,
  layOut = 'responsive',
  width = 10,
  src
}) => {
  return <Image src={src} alt='' width={width} layout={layOut} height={height} />
}

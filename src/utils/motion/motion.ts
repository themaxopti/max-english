import React from 'react'
import { useMediaQuery } from 'react-responsive'

export const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0
  },
  visible: (custom: any) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom }
  })
}

export const imgAnimation = {
  hidden: {
    x: -100,
    opacity: 1
  },
  visible: (custom: any) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom }
  })
}

export const useImgAnimation = (): {} => {
  const isBig = useMediaQuery({
    query: '(min-width: 1000px)'
  })

  if (isBig) {
    return {
      hidden: {
        x: -100,
        opacity: 1
      },
      visible: (custom: any) => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom }
      })
    }
  } else {
    return {}
  }
}

export const whyMeAnimation = {
  hidden: {
    x: 0,
    opacity: 0
  },
  visible: (custom: any) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom }
  })
}

export const whyMeAnimationText = {
  hidden: {
    x: 200,
    opacity: 0
  },
  visible: (custom: any) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom }
  })
}

export const leftAnimationAmount = {
  hidden: {
    x: 200,
    opacity: 0
  },
  visible: (custom: any) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom }
  })
}

export const sideAnimation = (x: number, y = 0) => ({
  hidden: {
    x,
    y,
    opacity: 0
  },
  visible: (custom: any) => ({
    x: 0,
    y: 0,
    opacity: 1,
    transition: { delay: custom }
  })
})

export const useSideAnimation = (x: number, y = 0): {} => {
  const isBig = useMediaQuery({
    query: '(min-width: 1000px)'
  })

  if (isBig) {
    return {
      hidden: {
        x,
        y,
        opacity: 0
      },
      visible: (custom: any) => ({
        x: 0,
        y: 0,
        opacity: 1,
        transition: { delay: custom }
      })
    }
  } else {
    return {
      hidden: {
        x: 0,
        y: 0,
        opacity: 1
      },
      visible: (custom: any) => ({
        x: 0,
        y: 0,
        opacity: 1
      })
    }
  }
}

export const useSideAnimationCourse = (x: number, y = 0): {} => {
  const isBig = useMediaQuery({
    query: '(min-width: 1000px)'
  })

  if (isBig) {
    return {
      hidden: {
        x,
        y,
        opacity: 0,
        display: 'none'
      },
      visible: (custom: any) => ({
        x: 0,
        y: 0,
        opacity: 1,
        transition: { delay: custom },
        display: 'flex'
      })
    }
  } else {
    return {
      hidden: {
        x: 0,
        y: 0,
        opacity: 1,
        display: 'none'
      },
      visible: (custom: any) => ({
        x: 0,
        y: 0,
        opacity: 1,
        display: 'flex'
      })
    }
  }
}

export const useSideAnimationDisplay = (x: number, y = 0): {} => {
  const isBig = useMediaQuery({
    query: '(min-width: 1000px)'
  })

  if (isBig) {
    return {
      hidden: {
        x,
        y,
        display: 'none'
      },
      visible: (custom: any) => ({
        x: 0,
        y: 0,
        display: 'flex',
        transition: { delay: custom }
      })
    }
  } else {
    return {}
  }
}

import { useMediaQuery } from 'react-responsive'

export const useAppearence = (): {} => {
  const isBig = useMediaQuery({
    query: '(min-width: 992px)'
  })
  console.log(isBig)

  if (isBig) {
    return {
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
    }
  } else {
    return {
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
        display: 'none',
        clipPath: 'none',
        transition: {
          type: 'spring',
          bounce: 0,
          duration: 0.3
        }
      }
    }
  }
}

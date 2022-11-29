import React from 'react'
import s from './Navbar.module.scss'
import * as ReactDOM from 'react-dom'
import { MobileDictionary } from '../mobileDictionary/MobileDictionary'
import { AddGroupFormContainer } from '../Groups/AddGroupFormContainer'
import { Flex } from '../../../../components/Flex/Flex'
import { useSelector } from 'react-redux'
import { mainTheme } from '../../../ThemeModule/state/selectors/theme.selectors'
import { mainLanguageNavbarSelector } from '../../../LanguageModule/state/selectors/language.selectors'

export const Navbar = () => {
  const backColor = useSelector(mainTheme).navbarColor

  return (
    <>
      <Flex
        style={{ backgroundColor: `${backColor}` }}
        rowGap='45px'
        direction='column'
        className={'navbar'}
      >
        <MobileDictionary />
        <AddGroupFormContainer />
      </Flex>
    </>
  )
}

{
  /* <div style={{backgroundColor}}></div> */
}

interface NavbarPortalProps {
  children: any
  className: string
}

export const NavbarPortal: React.FC<NavbarPortalProps> = ({ children, className }) => {
  const [container] = React.useState(() => {
    return document.createElement('div')
  })

  React.useEffect(() => {
    container.classList.add(className)
    document.body.appendChild(container)
    return () => {
      document.body.removeChild(container)
    }
  }, [])

  return ReactDOM.createPortal(children, container)
}

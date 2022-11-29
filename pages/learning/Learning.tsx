import React from 'react'
import { useEffect, useState } from 'react'
import { Header } from 'components/GridComponents/Header/Header'
import { HeaderMobile } from 'components/GridComponents/HeaderMobile/HeaderMobile'
import { HeaderMobileContainer } from 'components/GridComponents/HeaderMobile/HeaderMobileContainer'
import { useMediaQuery } from 'react-responsive'

export const Learning = () => {
  debugger
  const [domLoaded, setDomLoaded] = useState(false)
  const isBig = useMediaQuery({
    query: '(min-width: 992px)'
  })
  const isSmall = useMediaQuery({
    query: '(max-width: 992px)'
  })
  useEffect(() => {
    setDomLoaded(true)
  }, [])

  return (
    <>
      {<Header />}
      {<HeaderMobileContainer />}
      <div style={{ height: '1000px' }}>{'learning'}</div>
    </>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const data = {}

  // Pass data to the page via props
  return { props: { data } }
}

import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const index = () => {
  const router = useRouter()

  useEffect(() => {
    if (!router.isReady) {
      return
    }
    router.push({ query: { page: 'nah' } })
  }, [router.isReady])

  return (
    <>
      {router.query.page && <div data-testid='nah'>{router.query.page}</div>}
      <></>
    </>
  )
}

export default index

import * as React from 'react'
import { Helmet } from 'react-helmet'

import { globalFont } from '/src/utils/styles'
// import SlideInPanel from '../components/SlideInPanel'
import Header from '/src/components/Header'

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>Navigation</title>
        <link
          rel="stylesheet"
          href="https://static.mecca.com.au/assets/global/css/reset.min.css"
          type="text/css"
          media="screen"
        />
        <style>{globalFont}</style>
      </Helmet>
      <Header />
    </>
  )
}

export default IndexPage

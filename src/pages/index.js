import React, { useState } from 'react'
import { Helmet } from 'react-helmet'

import { globalFont } from '/src/utils/styles'
import Header from '/src/components/Header'
import Message from '/src/components/Message'

const IndexPage = () => {
  const [categoryName, setCategoryName] = useState('')
  const handleAnchorClick = (item = {}) => {
    setCategoryName(item.name)
  }
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
      <Header handleAnchorClick={handleAnchorClick} />
      {categoryName && (
        <Message
          message={`Congratulations! You have landed on ${categoryName} page!`}
        />
      )}
    </>
  )
}

export default IndexPage

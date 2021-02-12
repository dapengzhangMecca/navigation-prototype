import React, { useState } from 'react'
import { Helmet } from 'react-helmet'

import { globalFont } from '/src/utils/styles'
import Header from '/src/components/Header'
import Message from '/src/components/Message'
import mockedSite from '/src/images/mockedSite.png'

import * as styles from './styles'

export default () => {
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
      <div css={styles.mobileView}>
        <Header handleAnchorClick={handleAnchorClick} />
        <div css={styles.mockedSite}>
          <img alt="mocked site" src={mockedSite} />
        </div>
        {categoryName && (
          <Message
            message={`Congratulations! You have landed on ${categoryName} page!`}
          />
        )}
      </div>
      <div css={styles.desktopView}>
        <Message message="Sorry, this Demo APP does not support desktop devices. Please try a mobile phone or tablet." />
      </div>
    </>
  )
}

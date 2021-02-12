import React, { useState } from 'react'
import { Global } from '@emotion/react'

import { mockedCategories } from '/src/data/mockedCategories'
import Menu from '/src/components/MenuWrapper'
import * as styles from './styles'

export default ({ handleAnchorClick }) => {
  const [showMenu, setShowMenu] = useState(false)
  const handleAnchorClickAndCloseMenu = item => {
    handleAnchorClick(item)
    setShowMenu(false)
  }
  return (
    <header>
      {showMenu && (
        <Global
          styles={{
            body: {
              overflow: 'hidden',
            },
          }}
        />
      )}

      <div css={styles.banner}>
        Free shipping on orders over $25. Read more.
      </div>
      <div css={styles.inlineWrapper}>
        <button
          type="button"
          onClick={() => {
            setShowMenu(true)
            handleAnchorClick({ name: '' })
          }}
          css={styles.menuButton}
        >
          Menu
        </button>
        <div>
          <img
            src="https://www.mecca.com.au/on/demandware.static/Sites-MeccaAU-Site/-/default/dwc4ead7ba/images/mecca-header-logo.svg"
            alt="MECCA"
            className="logo"
          />
        </div>
        <div>
          <span className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 20">
              <path
                d="M16 20H0V6h16v14zM1 19h14V7H1v12zM3 5c0-2.8 2.2-5 5-5s5 2.2 5 5h-1c0-2.2-1.8-4-4-4S4 2.8 4 5H3z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
          <span className="icon">
            <img
              alt="Location pin icon"
              src="https://static.mecca.com.au/assets/s1/image/mecca/asset/icon/icon-locationpin.svg"
            />
          </span>
        </div>
      </div>
      <div css={styles.menuWrapper(showMenu)}>
        <Menu
          category={mockedCategories}
          showMenu={showMenu}
          handleAnchorClick={handleAnchorClickAndCloseMenu}
        />

        <button
          type="button"
          onClick={() => {
            setShowMenu(false)
          }}
          css={styles.closeButton}
        >
          &#10005;
        </button>
      </div>
    </header>
  )
}

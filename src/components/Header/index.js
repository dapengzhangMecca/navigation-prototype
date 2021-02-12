import React, { useState } from 'react'
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
    <>
      <button
        type="button"
        onClick={() => {
          setShowMenu(true)
          handleAnchorClick({ name: '' })
        }}
        css={styles.menuButton(showMenu)}
      >
        Menu
      </button>
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
    </>
  )
}

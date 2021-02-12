import React, { useState } from 'react'
import { mockedCategories } from '/src/data/mockedCategories'
import Menu from '/src/components/menuWrapper'
import * as styles from './styles'

export default () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <>
      <button
        type="button"
        onClick={() => {
          setShowMenu(true)
        }}
        css={styles.menuButton(showMenu)}
      >
        Menu
      </button>
      <div css={styles.menuWrapper(showMenu)}>
        <Menu category={mockedCategories} showMenu={showMenu} />

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

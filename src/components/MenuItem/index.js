import React from 'react'
import * as styles from './styles'

export default ({ item, onClick = () => {} }) => {
  const { name } = item
  const handleClick = () => {
    onClick(item)
  }

  return (
    <button type="button" css={styles.menuItem} onClick={handleClick}>
      {name}
    </button>
  )
}

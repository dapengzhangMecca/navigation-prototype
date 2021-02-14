import React from 'react'
import * as styles from './styles'

export default ({ item, onClick = () => {}, isFirstLevel }) => {
  const { name } = item
  const handleClick = () => {
    onClick(item)
  }

  return (
    <button
      type="button"
      css={styles.menuItem(isFirstLevel)}
      onClick={handleClick}
    >
      {name}
      {Boolean(item.subCategories?.length) && (
        <div css={styles.rightArrow}>
          <svg
            enableBackground="new 0 0 185.343 185.343"
            viewBox="0 0 185.343 185.343"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m51.707 185.343c-2.741 0-5.493-1.044-7.593-3.149-4.194-4.194-4.194-10.981 0-15.175l74.352-74.347-74.352-74.352c-4.194-4.194-4.194-10.987 0-15.175 4.194-4.194 10.987-4.194 15.18 0l81.934 81.934c4.194 4.194 4.194 10.987 0 15.175l-81.934 81.939c-2.093 2.1-4.84 3.15-7.587 3.15z"
              stroke="#181818"
              strokeWidth="10"
            />
          </svg>
        </div>
      )}
    </button>
  )
}

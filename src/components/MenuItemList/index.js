import React, { useRef, useEffect } from 'react'
import MenuItem from '/src/components/MenuItem'

import * as styles from './styles'

const MenuHead = ({ handleBackButtonClick, name, url, handleAnchorClick }) => {
  return (
    <>
      <button
        type="button"
        css={styles.backButton}
        onClick={handleBackButtonClick}
      >
        <svg
          width="24"
          height="13"
          viewBox="0 0 24 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.19797 1L7.04376 1.88472L3.29617 5.92603H23V7.19521H3.29617L7.04376 11.1153L6.19797 12L1 6.5628L6.19797 1Z"
            fill="#181818"
            stroke="#181818"
            strokeWidth="0.5"
          />
        </svg>
      </button>
      {name && <div css={styles.categoryName}>{name}</div>}
      <hr css={styles.hr} />
      <a
        href={url}
        css={styles.categoryLink}
        onClick={event => {
          event.preventDefault()
          handleAnchorClick({ name })
        }}
      >
        Shop All
      </a>
    </>
  )
}

export default ({
  category = {},
  handleMenuItemClick = () => {},
  handleBackButtonClick = () => {},
  handleAnchorClick = () => {},
  toSlideIn,
  toSlideOut,
  isFirstLevel,
}) => {
  const { subCategories = [], url, name } = category
  const ref = useRef()

  useEffect(() => {
    if (toSlideIn && ref.current) {
      ref.current.classList.add('slide-in')
      ref.current.classList.remove('slide-out')
    }

    if (toSlideOut && ref.current) {
      ref.current.classList.add('slide-out')
      ref.current.classList.remove('slide-in')
    }
  }, [toSlideIn, toSlideOut])

  return (
    <div ref={ref} css={styles.menuItemListWrapper}>
      {isFirstLevel ? (
        <div css={styles.menuHeadPlaceholder} />
      ) : (
        <MenuHead
          handleBackButtonClick={handleBackButtonClick}
          name={name}
          url={url}
          handleAnchorClick={handleAnchorClick}
        />
      )}
      {subCategories.map(item => {
        return (
          <MenuItem
            key={item.name}
            item={item}
            onClick={handleMenuItemClick}
            isFirstLevel={isFirstLevel}
          />
        )
      })}
      {isFirstLevel && (
        <div css={styles.navigationFooter}>
          <div>
            <span className="dot" />
            <span>My Account</span>
          </div>
          <div>
            <span className="dot" />
            <span>Shipping &#38; Returns</span>
          </div>
          <div>
            <span className="dot" />
            <span>Beauty Loop</span>
          </div>
          <div>
            <span className="dot" />
            <span>Book a Service</span>
          </div>
        </div>
      )}
    </div>
  )
}
